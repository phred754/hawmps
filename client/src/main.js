import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import Home from './components/Home'
import Crew from './components/Crew'
import About from './components/About'
import Trailer from './components/Trailer'
import DisplayCrew from './components/DisplayCrew'
import DisplayCrewMember from './components/DisplayCrewMember'
import CreateUser from './components/CreateUser'
import Footer from './components/Footer'

// import passport from 'passport'

Vue.use(VueRouter)

const routes = [
  { path: '/Home', name:"Home", component: Home },
  { path: '/Crew', name:"Crew", component: Crew },
  { path: '/About', name:"About", component: About },
  { path: '/Trailer', name:"Trailer", component: Trailer },
  { path: '/DisplayCrew', name:"DisplayCrew", component: DisplayCrew },
  { path: '/DisplayCrewMember', name:"DisplayCrewMember", component: DisplayCrewMember, props:true },
  { path: '/CreateUser', name:"CreateUser", component: CreateUser },
  { path: '/Footer', name:"Footer", component: Footer },
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


