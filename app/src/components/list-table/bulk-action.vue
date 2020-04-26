<template>
	<div class="alignleft actions bulkactions" v-if="hasOptions">
		<label :for="actionId" class="screen-reader-text">{{ actionLabel }}</label>
		<select name="action" :id="actionId" v-model="bulkAction" @change="actionChangeHandler">
			<option value>{{ actionLabel }}</option>
			<option v-for="(label, option) in actionOptions" :value="option" :key="option">{{ label }}</option>
		</select>
		<button
			v-if="enableSubmit"
			type="button"
			class="button"
			:disabled="disableSubmit"
			@click="actionClickHandler"
		>{{ $i18n.buttons.apply }}</button>
	</div>
</template>

<script>
export default {
	name: 'BulkAction',

	props: {
		actionKey: {
			type: String,
			required: true
		},
		actionLabel: {
			type: String,
			required: true
		},
		actionOptions: {
			type: Object,
			required: true
		},
		isTop: {
			type: Boolean,
			default: true
		},
		enableSubmit: {
			type: Boolean,
			default: true
		}
	},

	computed: {
		/**
		 * Check if the current component has actions.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		hasOptions() {
			return Object.keys(this.actionOptions).length > 0
		},

		/**
		 * Get the action ID based on the position and action.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		actionId() {
			return this.actionKey + this.position
		},

		/**
		 * Check if submit should be disabled.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		disableSubmit() {
			return '' === this.bulkAction
		}
	},

	data() {
		return {
			bulkAction: '',
			position: this.isTop ? 'top' : 'bottom'
		}
	},

	methods: {
		/**
		 * Handle the action click event.
		 *
		 * Emit the submit event to parent.
		 *
		 * @since 4.0.0
		 */
		actionClickHandler() {
			this.$emit('submit', {
				action: this.actionKey,
				selected: this.bulkAction,
				position: this.position
			})
		},

		/**
		 * Handle the action change event.
		 *
		 * Emit a change event to parent component.
		 *
		 * @since 4.0.0
		 */
		actionChangeHandler() {
			this.$emit('change', {
				action: this.actionKey,
				selected: this.bulkAction,
				position: this.position
			})
		}
	}
}
</script>
