/**
 * Assets helper functions for admin.
 *
 * @since 4.0.0
 * @author Joel James <joel@incsub.com>
 *
 * Beehive, Copyright 2007-2019 Incsub (http://incsub.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import store from '@/store/store'

/**
 * Get a single option value.
 *
 * @param {string} key Option key.
 * @param {string|boolean} group Option group.
 * @param {string|boolean|array|integer|object} value Default value.
 *
 * @since 4.0.0
 *
 * @return {string|boolean}
 */
export function getOption(key, group, value = false) {
	let settings = store.state.settings;

	// Only if set.
	if (settings[group] && settings[group][key]) {
		value = settings[group][key]
	}

	return value;
}

/**
 * Set a single option value.
 *
 * Note: This will not update the value in db.
 * You need to call saveOptions() action for that.
 *
 * @param {string} key Option key.
 * @param {string|boolean|array} value Default value.
 *
 * @since 4.0.0
 *
 * @return {string|boolean}
 */
export function setOption(key, group, value) {
	store.dispatch('settings/setOption', {
		key: key,
		group: group,
		value: value
	});
}

/**
 * Update the latest values in db.
 *
 * We will take the latest value from settings
 * vuex store and update it.
 *
 * @since 4.0.0
 *
 * @return {string | string}
 */
export async function saveOptions() {
	return await store.dispatch('settings/saveOptions');
}
