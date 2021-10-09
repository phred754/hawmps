import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import Home from './components/Home'
import Crew from './components/Crew'

// import passport from 'passport'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/crew', component: Crew }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: function(createElement){
      return createElement(App)
  }
}).$mount('#app')

router.replace('/home')

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.use(BootstrapVue);


