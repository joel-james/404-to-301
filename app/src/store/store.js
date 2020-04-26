import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import settings from './modules/settings'

Vue.use(Vuex);

export default new Vuex.Store({
	namespaced: true,
	modules: {
		data: data,
		settings: settings,
	}
});
