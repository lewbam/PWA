<template>
    <div class="sign-up">
        <h1 id="login-title">Sign up</h1>
        <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" id="username" type="text" v-model="userName"> <!-- use v-model for two way data binding -->
          <label class="mdl-textfield__label" for="username">Username</label>
        </div><br>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" id="email" type="text" v-model="email"> <!-- use v-model for two way data binding -->
            <label class="mdl-textfield__label" for="email">Email</label>
          </div><br>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" id="password" type="password" v-model="password"> <!-- use v-model for two way data binding -->
            <label class="mdl-textfield__label" for="password">Password</label>
          </div><br>
        </form>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-on:click="signUp">Sign Up</button> <!-- on button click run 'signUp' function -->
        <span>Go back to <router-link to="/login">Login</router-link></span> <!-- change route to '/login' -->
    </div>
</template>

<script>
//import node modules
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function() {
      return { // Set values to 0
        email: '',
        password: '',
        userName: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( // Create user in firebase records using data obtained through v-model
          function (user) { // if this is successful
            alert('Your account has been created') // alert the user an account as been created
            // console.log(user.uid) // console log the users unique ID (remove for production)
          },
          function (err) { // if this fails
            alert('Oops. ' + err.message) // alert the user with the firebase provided error message
          },
          this.$root.$firebaseRefs.user.push(  //push data to firebase database
          {
            'username': this.userName, // Assign data to variable
            'email': this.email, // Assign data to variable
            'password': this.password // Assign data to variable
          })
        );
      }
    }
  }
</script>

<style scoped> /* apply component scoped styles */
  .signUp {
    margin-top: 40px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }

  #login-title {
    font-weight: lighter;
    font-family: 'Lobster', cursive;
    font-size: 25px;
  }
</style>