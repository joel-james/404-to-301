<template>
	<form id="email-settings" method="post">
		<table class="form-table">
			<tbody>
				<tr>
					<th>
						<label for="email-notify">{{ $i18n.settings.labels.email_notification }}</label>
					</th>
					<td>
						<input type="checkbox" id="email-notify" v-model="emailNotify" />
					</td>
				</tr>
				<tr>
					<th>
						<label for="email-recipient">{{ $i18n.settings.labels.email_address }}</label>
					</th>
					<td>
						<input type="email" id="email-recipient" v-model="emailRecipient" :disabled="!emailNotify" />
					</td>
				</tr>
				<tr>
					<th colspan="2">
						<button
							type="button"
							class="button button-primary"
							:disabled="saving"
							@click="submitForm"
						>{{ saving ? $i18n.buttons.saving_changes : $i18n.buttons.save_changes }}</button>
					</th>
				</tr>
			</tbody>
		</table>
	</form>
</template>

<script>
import { restPost } from '@/helpers/api'

export default {
	/**
	 * Current template name.
	 *
	 * @since 4.0.0
	 */
	name: 'Email',

	/**
	 * Get the default set of data for the template.
	 *
	 * @since 4.0.0
	 *
	 * @returns {object}
	 */
	data() {
		return {
			saving: false
		}
	},

	computed: {
		buttonText() {
			return this.saving ? 'Loading..' : 'Save Changes'
		},

		/**
		 * Computed model for email notification flag.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		emailNotify: {
			get() {
				return this.getOption('email_notify', 'email')
			},
			set(value) {
				this.setOption('email_notify', 'email', value)
			}
		},

		/**
		 * Computed model for email recipients.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		emailRecipient: {
			get() {
				return this.getOption('email_notify_address', 'email', '')
			},
			set(value) {
				this.setOption('email_notify_address', 'email', value)
			}
		}
	},

	methods: {
		/**
		 * Handle settings for submit.
		 *
		 * Validate the form before submitting it.
		 *
		 * @since 4.0.0
		 *
		 * @returns {boolean}
		 */
		async submitForm() {
			// Start waiting mode.
			this.saving = true

			let success = await this.saveOptions()

			// Show notice.
			this.$root.$emit('showAdminNotice', {
				type: success ? 'success' : 'error',
				autoDismiss: true,
				message: success
					? this.$i18n.settings.notices.settings_updated
					: this.$i18n.settings.notices.settings_update_failed
			})

			this.saving = false
		}
	}
}
</script>
