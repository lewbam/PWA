<template>
    <div class="login">
      <div class="fullscreen-bg">
        <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
          <source src="static/images/video.mp4" type="video/mp4">
        </video>
      </div>
      <h3 id="login-title" style="font-size:35px; color:white;">Jigolie</h3>
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" style="color:white;" id="email" type="text" v-model="email"> <!-- V-model allows two way data binding -->
          <label class="mdl-textfield__label" style="color:white;" for="email">Email</label> 
        </div><br>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" style="color:white;" id="password" type="password" v-model="password">
          <label class="mdl-textfield__label" style="color:white;" for="password">Password</label>
        </div><br>
      </form>
      <router-link to="/home"> <!-- on button click, change route to home. (will only work if user is authenticated, based on router rules) -->
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" v-on:click="signIn">Sign In</button> <!-- on click, run function 'signIn' -->
      </router-link>
      <p style="color: white;">Don't have an account? <router-link to="/sign-up">Sign up now</router-link></p> <!-- if link is clicked changed route to '/sign-up'-->
    </div>
</template>

<script>
// Import Components and Node Modules
  import firebase from 'firebase'
  import Vue from 'vue'
  import router from '../router'

  export default {
    name: 'login',
    data: function() {
      return { // Set email and password to empty
        email: '', 
        password: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( //if username and password match records within firebase databae -->
          function(user) { // change route to home screen
            // this.$router.replace('home')
            // // alert('Logged in')
          },
          function(err) { // If not, display firebase provided error message as alert
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>

  .fullscreen-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
}

  .fullscreen-bg__video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .login {
    text-align: center;
    padding-top: 15%;
  }

  input {
    margin: 10px 0;
    width: 100%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    text-decoration: underline;
    cursor: pointer;
    color: #84baf2;
  }

  #login-title {
    font-weight: lighter;
    font-family: 'Lobster', cursive;
    font-size: 25px;
  }

  .login {
    /* background-image: url("https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a92c4e3580094ddd156079701920b260&auto=format&fit=crop&w=1395&q=80"); */
    background-size: cover;
    position:absolute;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
  }

  button {
    width:300px;
    background-color: white;
  }

  button:hover {
    background-color: #84baf2;
  }
  @media screen and (max-width: 1024px) {
    .login {
    background-image: url("https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a92c4e3580094ddd156079701920b260&auto=format&fit=crop&w=1395&q=80");
    background-size: cover;
    position:absolute;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
  }

  video {
    display: none;
  }

  }
</style>