import firebase from 'firebase'

var config = {
 apiKey: "AIzaSyD5xpbnV4UlzaLsJ-0FwmDlHkzIYkQYeUU",
 authDomain: "progressivewebapp-1997.firebaseapp.com",
 databaseURL: "https://progressivewebapp-1997.firebaseio.com",
 storageBucket: "progressivewebapp-1997.appspot.com",
 messagingSenderId: "124917557296"
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
    if (!app) {
        app = new Vue({
            el: '#app',
            template: '<App/>',
            components: { App },
            router
        })
    }
});

export default {
 database: firebase.database(),
 storage: firebase.storage()
}