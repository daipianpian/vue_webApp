import Vue from 'vue'
import Router from 'vue-router'
import TalentRenew from '@/pages/Talent/Renew' //达人续约

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/',
	routes: [
		{ 	path: '/', name: 'TalentRenew', component: TalentRenew ,
			meta: { keepAlive: false, title: '达人续约' }
		}
	]
})