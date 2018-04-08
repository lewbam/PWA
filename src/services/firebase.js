import firebase from 'firebase' //Import Firebase from node modules

var config = { // Configure Firebase Settings
 apiKey: "AIzaSyD5xpbnV4UlzaLsJ-0FwmDlHkzIYkQYeUU", // Assign API key linked to Firebase account to variable
 authDomain: "progressivewebapp-1997.firebaseapp.com", // Assign domain URL to variable
 databaseURL: "https://progressivewebapp-1997.firebaseio.com", // Assign database URL to variable
 storageBucket: "progressivewebapp-1997.appspot.com", // Assign storage bucket URL to variable
 messagingSenderId: "124917557296" // Assign individual messaging sender ID to Variable
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) { // On change of authenticated state, run function.
    if (!app) {
        app = new Vue({
            el: '#app',
            template: '<App/>',
            components: { App },
            router
        })
    }
})

export default {
 database: firebase.database(),
 storage: firebase.storage()
}