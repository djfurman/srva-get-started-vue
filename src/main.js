import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App'
import Messages from './components/Messages'
import Hello from './components/Hello'

const routes = [
  {path: '/hello', component: Hello},
  {path: '/', component: Messages}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
