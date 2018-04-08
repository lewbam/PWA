// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Import Components and Node modules
import Vue from 'vue'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import VueResource from 'vue-resource'
import { VueExtendLayout, layout } from 'vue-extend-layout'
// Run specific node modules that arent going to be called elsewhere (running in background)
Vue.use(VueResource)
Vue.use(Vuefire)

Vue.config.productionTip = 
Vue.use(VueExtendLayout)

 new Vue({
  el: '#app',
  firebase: { // return firebase data, assign to variables
    post: firebase.database.ref('post').orderByChild('created_at'),
    user: firebase.database.ref('users').orderByChild('created_at')
  },
  router, // use router 
  ...layout // Add methods to extend layouts
})