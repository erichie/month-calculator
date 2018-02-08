import Vue from 'vue'
import Router from 'vue-router'
import MonthCalculator from '@/components/MonthCalculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MonthCalculator',
      component: MonthCalculator
    }
  ]
})
