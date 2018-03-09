<template>
    <div class="sign-up">
        <h1 id="login-title">Sign up</h1>
        <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" id="email" type="text" v-model="email">
            <label class="mdl-textfield__label" for="email">Email</label>
          </div><br>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" id="password" type="password" v-model="password">
            <label class="mdl-textfield__label" for="password">Password</label>
          </div><br>
        </form>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-on:click="signUp">Sign Up</button>
        <span>Go back to <router-link to="/login">Login</router-link></span>
    </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('Your account has been created')
          },
          function (err) {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
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