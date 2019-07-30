import Vue from 'vue'
import vuetify from './plugins/vuetify' // external components partial support
import Vuetify from 'vuetify' // this imports everything
import App from './App.vue'
import router from './router'

Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
