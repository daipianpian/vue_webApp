// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css' //全局重置样式
import store from './store/index'
import 'lib-flexible/flexible.js'
import axios from 'axios'
import {fetch} from './config/fetch.js'
import common from './assets/js/common.js'

Vue.config.productionTip = false

window.common = common
window.fetch = fetch

/*title随着路由变化而变化 start*/
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
/*title随着路由变化而变化 end*/


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
})