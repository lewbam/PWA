

<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="card-image__picture">
          <img :src="this.postUrl"/> <!-- bind image url to img tag, use of binding allows content to update dynamically -->
        </div>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/> <!-- add v-model property to allow 2 way data binding -->
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="name" v-model="name" type="text" class="mdl-textfield__input"/> <!-- add v-model property to allow 2 way data binding -->
          <label for="name" class="mdl-textfield__label">What's your name?</label>
        </div>
        <div class="actions">
          <button @click.prevent="postImage" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"> <!-- Run 'postImage' function on button click -->
            <i class="material-icons">add</i>
          </button>
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
    return { // Set data variables to null
      'postUrl': null,
      'title': null,
      'name': null

    }
  },
  mounted () { // run mounted to allow access to reactive component
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => { // Make API call for random dog image URL
      console.log(response.data.message) // Log the response in the console
      this.postUrl = response.data.message // Assign response to variable
    })
  },
  methods: {
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

    #clock{
    background-image:url('');
    background-size:cover;
    background-position: center;
    height: 380px; width: 380px;
    border: 1px solid #bbb;
}
  </style>