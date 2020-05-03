import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import routes from './router';

Vue.config.productionTip = false

new Vue({
  vuetify,
  routes,
  render: h => h(App)
}).$mount('#app')
