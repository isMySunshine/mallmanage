import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: welcome,
      redirect: '/main',
      children: [
        {
          path: '/main',
          component: main
        }
      ]
    }
  ]
})
