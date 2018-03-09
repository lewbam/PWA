import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import ProfileView from '@/components/ProfileView'
import SearchView from '@/components/SearchView'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

import firebase from 'firebase'

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        layout: 'layoutLogin' // name of the layout
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'layoutLogin' // name of the layout
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
        layout: 'default'
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
      meta: {
        requiresAuth: true,
        layout: 'default'
      }
    },
    {
      path: '/post',
      name: 'post',
      component: PostView,
      meta: {
        requiresAuth: true,
        layout: 'default'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        requiresAuth: true,
        layout: 'default'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: {
        requiresAuth: true,
        layout: 'default'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router