import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Item from '@/pages/Item'
import Score from '@/pages/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
