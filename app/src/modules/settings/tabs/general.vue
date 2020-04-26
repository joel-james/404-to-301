<template>
	<form id="general-settings" method="post">
		<table class="form-table">
			<tbody>
				<tr>
					<th>
						<label for="redirect-type">{{ $i18n.settings.labels.redirect_type }}</label>
					</th>
					<td>
						<select id="redirect-type" v-model="redirectType">
							<option value="301">{{ $i18n.settings.labels.redirect_301 }}</option>
							<option value="302">{{ $i18n.settings.labels.redirect_302 }}</option>
							<option value="307">{{ $i18n.settings.labels.redirect_307 }}</option>
							<option value="404">{{ $i18n.settings.labels.redirect_404 }}</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>
						<label for="redirect-to">{{ $i18n.settings.labels.redirect_to }}</label>
					</th>
					<td>
						<select id="redirect-to" v-model="redirectTo">
							<option value="page">{{ $i18n.settings.labels.existing_page }}</option>
							<option value="link">{{ $i18n.settings.labels.custom_url }}</option>
							<option value="none">{{ $i18n.settings.labels.no_redirect }}</option>
						</select>
						<p
							class="description"
							v-if="'page' === redirectTo"
						>{{ $i18n.settings.descriptions.select_page }}</p>
						<p
							class="description"
							v-if="'link' === redirectTo"
						>{{ $i18n.settings.descriptions.custom_url }}</p>
						<p
							class="description"
							v-if="'none' === redirectTo"
						>{{ $i18n.settings.descriptions.disable_redirect }}</p>
						<p class="description">
							<strong>{{ $i18n.settings.descriptions.override_settings }}</strong>
						</p>
					</td>
				</tr>
				<tr v-if="'page' === redirectTo">
					<th>
						<label for="redirect-page">{{ $i18n.settings.labels.redirect_page }}</label>
					</th>
					<td>
						<select id="redirect-page" v-model="redirectPage">
							<option value="page">{{ $i18n.settings.labels.existing_page }}</option>
							<option value="link">{{ $i18n.settings.labels.custom_url }}</option>
							<option value="none">{{ $i18n.settings.labels.no_redirect }}</option>
						</select>
					</td>
				</tr>
				<tr v-if="'link' === redirectTo">
					<th>
						<label for="redirect-link">{{ $i18n.settings.labels.custom_url }}</label>
					</th>
					<td>
						<input type="url" id="redirect-link" v-model="redirectLink" />
					</td>
				</tr>
				<tr>
					<th>
						<label for="redirect-log">{{ $i18n.settings.labels.log_errors }}</label>
					</th>
					<td>
						<input type="checkbox" id="redirect-log" v-model="redirectLog" />
					</td>
				</tr>
				<tr>
					<th>
						<label for="disable-guessing">{{ $i18n.settings.labels.disable_guess }}</label>
					</th>
					<td>
						<input type="checkbox" id="disable-guessing" v-model="disableGuessing" />
					</td>
				</tr>
				<tr>
					<th>
						<label for="exclude-paths">{{ $i18n.settings.labels.exclude_paths }}</label>
					</th>
					<td>
						<textarea id="exclude-paths" v-model="excludePaths"></textarea>
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
export default {
	/**
	 * Current template name.
	 *
	 * @since 4.0.0
	 */
	name: 'General',

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
		/**
		 * Computed model for redirect type.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		redirectType: {
			get() {
				return this.getOption('redirect_type', 'general', 307)
			},
			set(value) {
				this.setOption('redirect_type', 'general', value)
			}
		},

		/**
		 * Computed model for redirect to.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		redirectTo: {
			get() {
				return this.getOption('redirect_to', 'general', '')
			},
			set(value) {
				this.setOption('redirect_to', 'general', value)
			}
		},

		/**
		 * Computed model for redirect page.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		redirectPage: {
			get() {
				return this.getOption('redirect_page', 'general', '')
			},
			set(value) {
				this.setOption('redirect_page', 'general', value)
			}
		},

		/**
		 * Computed model for redirect link.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		redirectLink: {
			get() {
				return this.getOption('redirect_link', 'general', '')
			},
			set(value) {
				this.setOption('redirect_link', 'general', value)
			}
		},

		/**
		 * Computed model for redirect log flag.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		redirectLog: {
			get() {
				return this.getOption('redirect_log', 'general')
			},
			set(value) {
				this.setOption('redirect_log', 'general', value)
			}
		},

		/**
		 * Computed model for redirect url guessing.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		disableGuessing: {
			get() {
				return this.getOption('disable_guessing', 'general')
			},
			set(value) {
				this.setOption('disable_guessing', 'general', value)
			}
		},

		/**
		 * Computed model for exclude url.
		 *
		 * @since 4.0.0
		 *
		 * @returns {string}
		 */
		excludePaths: {
			get() {
				return this.getOption('exclude_paths', 'general')
			},
			set(value) {
				this.setOption('exclude_paths', 'general', value)
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
			this.waiting = true

			let success = await this.saveOptions()

			// Show notice.
			this.$root.$emit('showAdminNotice', {
				type: success ? 'success' : 'error',
				autoDismiss: true,
				message: success
					? this.$i18n.settings.notices.settings_updated
					: this.$i18n.settings.notices.settings_update_failed
			})

			this.waiting = false
		}
	}
}
</script>
