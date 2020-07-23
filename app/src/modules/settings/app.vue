<template>
    <div id="dd404-admin-settings">
        <!-- Admin notices for settings page -->
        <reactive-admin-notice/>

        <tabs :current="tabs[0]" :tabs="tabs"/>
    </div>
</template>

<script>
	import Logs from './tabs/logs'
	import Email from './tabs/email'
	import General from './tabs/general'
	import Tabs from '@/components/tabs'
	import ReactiveAdminNotice from '@/components/reactive-admin-notice'

	export default {
		/**
		 * Current template name.
		 *
		 * @since 4.0.0
		 */
		name: 'App',

		components: { Tabs, General, Email, ReactiveAdminNotice },

		/**
		 * Get the default set of data for the template.
		 *
		 * @since 4.0.0
		 *
		 * @returns {object}
		 */
		data() {
			return {
				alert: false,
				alertType: 'success',
				tab: 'general',
				tabs: [
					{
						name: 'general',
						icon: 'admin-generic',
						title: this.$i18n.settings.titles.general,
						component: General
					},
					{
						name: 'email',
						icon: 'email',
						title: this.$i18n.settings.titles.email,
						component: Email
					},
					{
						name: 'logs',
						icon: 'admin-page',
						title: this.$i18n.settings.titles.logs,
						component: Logs
					}
				]
			}
		}
	}
</script>

<style lang="scss">
    @import 'styles/main';
</style>
