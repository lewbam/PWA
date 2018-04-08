// Import Node Modules and Components
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

Vue.use(Router) // Run router in background
let router = new Router({
  routes: [
    {
      path: '*', // if path is *
      redirect: '/login' // Redirect user to login page
    },
    {
      path: '/', // if path is /
      redirect: '/login' // Redirect user to login page
    },
    {
      path: '/sign-up', // Assign path to route
      name: 'SignUp', // Assign name to route
      component: SignUp, // Specify component being used
      meta: {
        layout: 'layoutLogin' // name of the layout
      }
    },
    {
      path: '/login', // Assign path to route
      name: 'login', // Assign name to route
      component: Login, // Specify component being used
      meta: {
        layout: 'layoutLogin' // name of the layout
      }
    },
    {
      path: '/home', // Assign path to route
      name: 'home', // Assign name to route
      component: HomeView, // Specify component being used
      meta: {
        requiresAuth: true, // User can only access page if authenticated
        layout: 'default' // name of the layout
      }
    },
    {
      path: '/detail/:id', // Assign path to route
      name: 'detail', // Assign name to route
      component: DetailView, // Specify component being used
      meta: {
        requiresAuth: true, // User can only access page if authenticated
        layout: 'default' // name of the layout
      }
    },
    {
      path: '/post', // Assign path to route
      name: 'post', // Assign name to route
      component: PostView, // Specify component being used
      meta: {
        requiresAuth: true, // User can only access page if authenticated
        layout: 'default' // name of the layout
      }
    },
    {
      path: '/profile', // Assign path to route
      name: 'profile', // Assign name to route
      component: ProfileView, // Specify component being used
      meta: {
        requiresAuth: true, // User can only access page if authenticated
        layout: 'default' // name of the layout
      }
    },
    {
      path: '/search', // Assign path to route
      name: 'search', // Assign name to route
      component: SearchView, // Specify component being used
      meta: {
        requiresAuth: true, // User can only access page if authenticated
        layout: 'default' // name of the layout
      }
    }
  ]
})

router.beforeEach((to, from, next) => { //Before route change
  let currentUser = firebase.auth().currentUser; // Get current user and assign to variable
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth); //Check if user record requires authentication (will apply to all users not logged in)

  if (requiresAuth && !currentUser) next('login') // if user requires authentication and is NOT currently logged in, change route to /login
  else if (!requiresAuth && currentUser) next('home') // if user doesn't requires authentication and is currently logged in, change route to /home
  else next()
})

export default router