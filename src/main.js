// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuefire)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  firebase: {
    post: firebase.database.ref('post').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
      }
    if(file){
        reader.readAsDataURL(file);
        var name = file.name
        console.log(name)
        // const task = firebase.storage().ref().child(name).put(file, metadata);
        // task.then((snapshot) => {
        // const url = snapshot.downloadURL;
        // console.log(url);
        // document.querySelector('#someImageTagID').src = url;
      // }).catch((error) => {
      //   console.error(error);
      // });
    }else{
    }
  }
// function upload(){
//     const ref = firebase.storage().ref();
//     const file = document.getElementById('getval').files[0]
//     const name = (+new Date()) + '-' + file.name;
//       console.log(name)
//       const metadata = {
//         contentType: file.type
//       };
//       const task = ref.child(name).put(file, metadata);
//       task.then((snapshot) => {
//         const url = snapshot.downloadURL;
//         console.log(url);
//         document.querySelector('#someImageTagID').src = url;
//       }).catch((error) => {
//         console.error(error);
//       });
//   }
// } 




// var fileButton = document.getElementById('getval');

// fileButton.addEventListener('change', function(e){
//     var file = e.target.files[0];
//     var storageRef = firebase.storage().ref(file.name);
//     storageRef.put(file);
//   });  


// var fileButton = document.getElementById("fileButton");
// fileButton.addEventListener('change', function(e){
//    var file = e.target.files[0];
//    var storageRef = firebase.storage().ref(file.name);
//    storageRef.put(file);
// });  
