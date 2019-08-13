import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Mainview.vue'
import Addpet from './views/AddPetview.vue'
import Deletepet from './views/DeletePetview.vue'
import Contacto from './views/Contactoview.vue'
import Licencia from './views/Licenciaview.vue'

Vue.use(Router)

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
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/addpet',
      name: 'addpet',
      component: Addpet
    },
    {
      path: '/deletepet',
      name: 'deletepet',
      component: Deletepet
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/licencia',
      name: 'licencia',
      component: Licencia
    }
  ]
});
