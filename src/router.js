import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './components/Welcome.vue'
import About from './components/About.vue'
import Tips from './components/Tips.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
	{ path: '/', component: Welcome },
	{ path: '/about', component: About },
	{ path: '/tips', component: Tips }
	]
})