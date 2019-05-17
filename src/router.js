import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /*webpackChunkName:'login'*/ '@/components/Login/index')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( /*webpackCHunkName:'home' */ '@/components/Home/home'),
      children: [{
          path: 'aritice',
          name: 'aritice',
          component: () => import( /*webpackCHunkName:'aritice'*/ '@/components/Aritice/aritice'),
          children: [{
              path: 'addaritice',
              name: 'addaritice',
              component: () => import( /*webpackCHunkName:'addaritice'*/ '@/components/Aritice/addAritice')
            },
            {
              path: 'showAritice',
              name: 'showAritice',
              component: () => import( /*webpackCHunkName:'showAritice'*/ '@/components/Aritice/showAritice')
            },

          ]

        },
        {
          path: 'category',
          name: "category",
          component: () => import( /*webpackCHunkName:'category'*/ '@/components/Category/category')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import( /*webpackCHunkName:'setting'*/ '@/components/Setting/setting')
        },
        {
          path: 'team',
          name: 'team',
          component: () => import( /*webpackCHunkName:'aritice'*/ '@/components/Team/team')
        },
      ]
    }
  ]
})