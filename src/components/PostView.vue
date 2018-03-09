

<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="card-image__picture">
          <img :src="this.postUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="name" v-model="name" type="text" class="mdl-textfield__input"/>
          <label for="name" class="mdl-textfield__label">What's your name?</label>
        </div>
        <div class="actions">
          <button @click.prevent="postImage" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
            <i class="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'
// import parse from 'xml-parser'
export default {
  data () {
    return {
      'postUrl': null,
      'title': null,
      'name': null

    }
  },
  mounted () {
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
      console.log(response.data.message)
      this.postUrl = response.data.message
    })
  },
  methods: {
    postImage () {
  this.$root.$firebaseRefs.post.push(
    {
      'url': this.postUrl,
      'comment': this.title,
      'info': 'Posted by ' + this.name + ' on Tuesday',
      'created_at': -1 * new Date().getTime()
    })
    .then(this.$router.push('/'))
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

    #clock{
    background-image:url('');
    background-size:cover;
    background-position: center;
    height: 380px; width: 380px;
    border: 1px solid #bbb;
}
  </style>