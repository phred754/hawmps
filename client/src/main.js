import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import Home from './components/Home'
import Crew from './components/Crew'
import DisplayCrew from './components/DisplayCrew'
import DisplayCrewMember from './components/DisplayCrewMember'

// import passport from 'passport'

Vue.use(VueRouter)

const routes = [
  { path: '/Home', component: Home },
  { path: '/Crew', component: Crew },
  { path: '/DisplayCrew', component: DisplayCrew },
  { path: '/DisplayCrewMember', component: DisplayCrewMember }
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


