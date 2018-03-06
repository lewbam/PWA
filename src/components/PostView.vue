

<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.postUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postImage" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import parse from 'xml-parser'
export default {
  data () {
    return {
      'postUrl': null
    }
  },
  mounted () {
    this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
      this.postUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
    })
  },
  methods: {
    postImage () {
  this.$root.$firebaseRefs.post.push(
    {
      'url': this.postUrl,
      'comment': this.title,
      'info': 'Posted by Charles on Tuesday',
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