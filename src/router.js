import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Over from './views/Over.vue'
import Contact from './views/Contact.vue'
import Producten from './views/Producten.vue'


Vue.use(Router)// installeert Router in vue (geeft toegang tot this.router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/over',
      name: 'over',
      component: Over
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/producten',
      name: 'producten',
      component: Producten
    }
    
  ]
})
