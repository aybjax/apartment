import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import SnackBar from '@/components/snackBar'

Vue.config.productionTip = false
Vue.component('snack-bar', SnackBar)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
