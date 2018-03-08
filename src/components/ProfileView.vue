<template>
    <form>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--8-col">
          <div id='clock'></div>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet" id="upload">
            <button class="mdl-button mdl-js-button mdl-button--raised">
                Follow
            </button>
            <button v-on:click="logout" class="mdl-button mdl-js-button mdl-button--raised">
                Log out
            </button>
        </div>
      </div>
    </form>
  </template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'profile',
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>
     
<style scoped>
  .picture > img {
      color: #fff;
      width:100%;
    }
.waiting {
  padding: 10px;
  color: #555;
}

#clock {
background-image:url('');
background-size:cover;
background-position: center;
height: 380px; width: 380px;
border: 1px solid #bbb;
}
</style>