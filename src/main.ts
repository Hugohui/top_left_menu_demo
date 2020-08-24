import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './permission.ts'

// import element-ui
import Element from 'element-ui'
import './assets/styles/element-variables.scss'
Vue.use(Element)

// reset.css
import './assets/styles/reset.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
