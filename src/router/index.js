import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../components/Students/StudentView.vue'
import StudentAdd from '../components/Students/StudentAdd.vue'
import notFound from '../views/notFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home', 
    },
    {
      path: '/home/',
      name: 'home',
      component: StudentView,
      children:[
         {path:'cloudy', component:null}
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: StudentAdd
    },
    {
      path: '/:notFound(.*)',
      name: null,
      component: notFound
    }
  ]
})

export default router
