import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout'
import Details from '@/pages/Details'
import Car from '@/pages/details/car'
import Hill from '@/pages/details/hill'
import Earth from '@/pages/details/earth'
import Loud from '@/pages/details/loud'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      redirect:"/details/car",
      children:[
        {
          name:"Car",
          path:"car",
          component:Car
        }, {
          name:'Hill',
          path:"hill",
          component:Hill
        }, {
          name:'earth',
          path:"earth",
          component:Earth
        }, {
          name:'Loud',
          path:"loud",
          component:Loud
        },
        
      ]
    },
  ]
})
