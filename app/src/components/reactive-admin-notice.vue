<template>
	<transition name="fade">
		<admin-notice v-if="show" :type="type" :dismissible="dismissible">
			<p v-html="message"></p>
		</admin-notice>
	</transition>
</template>

<script>
import AdminNotice from './admin-notice'

export default {
	name: 'ReactiveAdminNotice',

	components: { AdminNotice },

	data() {
		return {
			show: false,
			type: 'success',
			message: '',
			dismissible: false,
			autoDismiss: true,
			timeout: 3000
		}
	},

	mounted() {
		this.$root.$on('showAdminNotice', data => {
			// Setup notice options.
			this.setupNotice(data)

			// Auto hide if required.
			this.autoHide()
		})
	},

	methods: {
		/**
		 * Setup notice properties from data.
		 *
		 * @since 1.8.0
		 *
		 * @returns {void}
		 */
		setupNotice(data) {
			// Notice type.
			this.type = data.type || 'success'

			// Notice type.
			this.message = data.message || ''

			if (data.autoDismiss) {
				this.dismissible = false
				this.autoDismiss = true
			} else {
				// Notice dismissible.
				this.dismissible = data.dismissible || true
				this.autoDismiss = false
			}

			this.show = true
		},

		/**
		 * Get notice message from property.
		 *
		 * @since 1.8.0
		 *
		 * @returns {string}
		 */
		dismiss() {
			this.show = false
		},

		/**
		 * Get notice message from property.
		 *
		 * @since 1.8.0
		 *
		 * @returns {string}
		 */
		autoHide() {
			if (this.autoDismiss) {
				setTimeout(this.dismiss, this.timeout)
			}
		}
	}
}
</script>
