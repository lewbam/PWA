
<template>
    <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header" >
        <div class="mdl-layout__header-row">
          <router-link class="material-icons" to="/post">camera_alt</router-link>
          <span><router-link class="mdl-layout-title" id="title" to="/">Jigolie</router-link></span>
          <router-link class="material-icons" id="send" style="float:right;" to="/post">send</router-link>
          
        </div>
        
      </header>
      
      <main class="mdl-layout__content">
        <div class="page-content">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </main>
        <footer class="mdl-mega-footer">
            <router-link class="material-icons nav" to="/">home</router-link>
            <router-link class="material-icons nav" to="/search">search</router-link>
            <router-link class="material-icons nav" to="/post">add</router-link>
            <router-link class="material-icons nav" to="">favorite_border</router-link>
            <router-link class="material-icons nav" to="/profile">account_circle</router-link>
        </footer>
    </div>
  </template>

<script>
  require('material-design-lite')
  export default {
  name: 'default',
  methods: {
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
  @import url('https://fonts.googleapis.com/css?family=Lobster');

  .mdl-grid {
    margin-top: 50px;
    z-index: -999;
    bottom: 0;
    top: 0;
  }

  #title {
    font-weight: lighter;
    padding-top: 0px;
    color: black;
    font-family: 'Lobster', cursive;
    font-size: 25px;
    text-decoration: none;
    margin-bottom: 15px;
    margin-left: 350%;
  }

  .material-icons {
     color: black;
     text-decoration: none;
  }

  .mdl-layout__header {
    background-color: white !important;
    /* position: fixed; */
  }

  .mdl-mega-footer {
    background-color: white !important;
    box-shadow: 0 -5px 5px -5px #333;
    padding: 10px 0px;
    padding-top: 14px;
    position: fixed;
    z-index: 999 !important;
    bottom: 0px !important;
    width: 100%;

  }

  .mdl-mega-footer .nav {
    padding: 0 8% 0 8%;
  }

  /* .mdl-layout__header-row {
      padding: 0 9% 0 3%;
  } */

  #send {
    padding: 0 5% 0 82%;
  }
  

  @media screen and (min-width: 1022px) {
    #title {
      margin-left: 600%;
  }

    .mdl-mega-footer .nav {
    padding: 0 8.5% 0 8.5%;
  }

  .mdl-layout__header-row {
      padding: 0 5% 0 5%;
  }

  #send {
    padding: 0 5% 0 89%;
  }

}

  @media screen and (max-width: 414px) and (min-width: 367px) {
    #title {
      margin-left: 170%;
  }

    .mdl-mega-footer .nav {
    padding: 0 6.3% 0 6.3%;
  }

  .mdl-layout__header-row {
      padding: 0 5% 0 5%;
  }

  #send {
    padding: 0 5% 0 69%;
  }
}

@media screen and (max-width: 367px) {
  #title {
      margin-left: 150%;
  }

    .mdl-mega-footer .nav {
    padding: 0 6% 0 6%;
  }

  .mdl-layout__header-row {
      padding: 0 5% 0 5%;
  }

  #send {
    padding: 0 5% 0 65%;
  }
  
}

 @media screen and (max-width: 767px) and (min-width: 414px) {
    #title {
      margin-left: 170%;
  }

    .mdl-mega-footer .nav {
    padding: 0 6.2% 0 6.2%;
  }

  .mdl-layout__header-row {
      padding: 0 5% 0 5%;
  }

  #send {
    padding: 0 5% 0 69%;
  }

  
}
  
body {
  margin:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 999;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
