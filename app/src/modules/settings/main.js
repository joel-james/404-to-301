import Vue from 'vue'
import App from './app'
import store from '@/store/store'
import { sprintf } from 'sprintf-js'
import {
	getOption,
	setOption,
	saveOptions,
} from '@/helpers/settings'

Vue.config.productionTip = false;

// Global functions.
Vue.mixin({
	methods: {
		sprintf,
		getOption,
		setOption,
		saveOptions,
	},
});

// Global vars.
Vue.prototype.$i18n = window.dd4t3i18n;
Vue.prototype.$vars = window.dd4t3Vars;
Vue.prototype.$moduleVars = window.dd4t3ModuleVars;

/* eslint-disable no-new */
new Vue({
	el: '#dd404-settings-app',
	render: h => h(App),
	store
});
