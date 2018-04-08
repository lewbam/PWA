<template>
        <form>
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col">
            <input id="name" v-model.trim="dogBreed" type="text" class="mdl-textfield__input"/> <!-- use v-model for two way data binding, trim removes any white space to format it for API query string -->
                <button @click.prevent="searchDog" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                    <i class="material-icons">search</i>
                </button>
              <div class="card-image__picture">
                <img :src="this.postUrl"/> <!-- bind image url to img tag, binding allows this to be changed dynamically -->
              </div>
            
            <div class="mdl-cell mdl-cell--12-col">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
                <input id="username" v-model="title" type="text" class="mdl-textfield__input"/> <!-- use v-model for two way data binding -->
                <label for="username" class="mdl-textfield__label">Describe me</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
                <input id="name" v-model="name" type="text" class="mdl-textfield__input"/> <!-- use v-model for two way data binding -->
                <label for="name" class="mdl-textfield__label">What's your name?</label>
              </div>
              <div class="actions">
                <button @click.prevent="postImage" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
                  <i class="material-icons">add</i>
                </button>
              </div>
            </div>
          </div>
          </div>
        </form>
      </template>
      
      <script>
      // Import node modules
        import axios from 'axios'
      // import parse from 'xml-parser'
      export default {
        data () {
          return { // Set values to null
            'postUrl': null,
            'dogBreed': null,
            'title': null,
            'name': null
      
          }
        },
        mounted () { // run mounted to allow access to reactive component
          
        },
        methods: {
            searchDog () {
                axios.get('https://dog.ceo/api/breed/' + this.dogBreed + '/images/random').then(response => { // append dogBreed data from v-model to API query
                console.log(response.data.message) // console log the response
                this.postUrl = response.data.message // assign response to variable
                })
            },
          postImage () {
            this.$root.$firebaseRefs.post.push( //push data to firebase database
          {
            'url': this.postUrl, // Assign data to variable
            'comment': this.title, // Assign data to variable
            'info': 'Posted by ' + this.name + ' on Tuesday', // Assign data to variable
            'created_at': -1 * new Date().getTime() // Get todays date and assign to variable
          })
          .then(this.$router.push('/')) // Change route to the homepage
      }
    }
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
      
        </style>