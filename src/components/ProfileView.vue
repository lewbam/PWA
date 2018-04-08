<template>
    <form>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <div class="image-container">
            <img class="profile-image" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="">
          </div> 
          <div class="info">
            <h4>{{ email }}</h4> <!-- add email field from array to H4 tag -->
            <!-- <p>About</p><br>
            <small>Lewis Bamber is a 3rd year UCLan Web Design & Development student. This is his final year project.</small><br> -->
          </div>
            <button v-on:click="logout" class="mdl-button mdl-js-button mdl-button--raised"> <!-- on button click, run 'logout' function -->
                Log out
            </button>
        </div>
      </div>
    </form>
  </template>

<script>
//import node modules
  import firebase from 'firebase'

  export default {
    name: 'profile',
    data () {
      return { // set email value to null
        email: null
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => { // sign out from firebase authentication
          this.$router.replace('login') // change route to login page
        })
      }
    },
      created: function() {
        let user = firebase.auth().currentUser // assign current user record to 'user' variable
        let userId = firebase.auth().currentUser.uid; // assign current user's unique ID to userId
        let email // define email variable

        if (user) { // if user is logged in (current user exists)
          email = user.email; // set the email variable as the email on record

          if (!email) { // If email doesn't exist
            email = user.providerData[0].email; // Assign email as data on their account record
          }
          this.email = email 
          return firebase.database().ref('/user/' + userId).once('value').then(function(snapshot) { 
            console.log(snapshot)
        })
        }

      },
    }
  
</script>
     
<style scoped> /* apply component scoped styles */
  .picture > img {
      color: #fff;
      width:100%;
    }
.waiting {
  padding: 10px;
  color: #555;
}

.profile-image {
  max-width: 300px;
}

.image-container {
  text-align: center;
}

p {
  margin: 0px;
}

button {
  margin: 5px;
}

.info small {
  max-width: 200px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.info p {
  font-weight: bold;
  text-align: left;
  max-width: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}



</style>