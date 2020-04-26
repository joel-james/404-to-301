<template>
	<div v-if="show" :class="noticeClass">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'AdminNotice',

	props: {
		show: {
			type: Boolean,
			default: true
		},
		dismissible: {
			type: Boolean,
			default: true
		},
		type: {
			type: String,
			default: 'success'
		}
	},

	computed: {
		/**
		 * Get the notice class based on the alert type.
		 *
		 * We use inbuilt WP admin notice classes.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		noticeClass() {
			return {
				notice: true,
				'is-dismissible': this.dismissible,
				'notice-success': this.type === 'success',
				'notice-error': this.type === 'error',
				'notice-warning': this.type === 'warning',
				'notice-info': this.type === 'info'
			}
		}
	}
}
</script>
