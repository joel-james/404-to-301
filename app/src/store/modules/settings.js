import { restGet, restPost } from '@/helpers/api'

/**
 * Centralized management of plugin settings data.
 *
 * We use Vuex to get the settings using API and then
 * store it in a common store. We can access/update the
 * settings from anywhere in the app using available actions.
 * For easier usage, we have some helper functions available
 * in helpers/utils.js
 *
 * @since 4.0.0
 */
const settings = {
	namespaced: true,

	state: window.dd4t3Vars.settings,

	mutations: {
		/**
		 * Update a single value in store.
		 *
		 * This will only update the value in store.
		 * To update in db, you need to call updateValues
		 * mutation.
		 *
		 * @param {object} state Current state.
		 * @param {object} data Data to update.
		 */
		setValue: (state, data) => {
			state[data.group][data.key] = data.value;
		},

		/**
		 * Update the whole settings data in state.
		 *
		 * This will replace the current state with the
		 * data provided.
		 *
		 * @param {object} state Current state.
		 * @param {object} settings Settings data.
		 */
		updateValues: (state, settings) => {
			window.dd4t3Vars.settings = settings;
			Object.assign(state, settings);
		},
	},

	actions: {
		/**
		 * Re-initialize the settings store forcefully.
		 *
		 * We need to call the API and get the settings,
		 * then update the store state with the new values.
		 *
		 * @param commit Commit
		 *
		 * @return {Promise<void>}
		 */
		reInit: async ({ commit }) => {
			restGet({
				path: 'settings'
			}).then(response => {
				if (response.success && response.data) {
					commit('updateValues', response.data);
				}
			});
		},

		/**
		 * Set a single option value after validation.
		 *
		 * Make sure all required items are provided, then
		 * call the mutation.
		 *
		 * @param commit Commit.
		 * @param {object} data Custom params.
		 */
		setOption: ({ commit }, data = {}) => {
			// Only if all required items are found.
			if (data.hasOwnProperty('key')
				&& data.hasOwnProperty('group')
				&& data.hasOwnProperty('value')
			) {
				commit('setValue', data);
			}
		},

		/**
		 * Update the settings values in db.
		 *
		 * Use the API and update the whole values.
		 * Only do this when required.
		 *
		 * @param {object} Commit and State.
		 *
		 * @return {Promise<void>}
		 */
		saveOptions: async ({ commit, state }) => {
			let success = false;

			await restPost({
				path: 'settings',
				data: {
					value: state,
				}
			}).then(response => {
				if (response.success) {
					// Update the store with the values from response.
					// Update the store with the values from response.
					commit('updateValues', response.data);

					success = true;
				}
			});

			return success;
		},
	},
};

export default settings;
