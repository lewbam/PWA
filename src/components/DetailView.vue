<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div class="picture">
        <img :src="post.url" /> <!-- Bind url of post to img tag, binding allows the element to be changed dynamically -->
      </div>
      <div class="info">
        <span>{{ post.info }}</span> <!-- Assign info field data from array -->
      </div>
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <div class="comment">
        <span>{{ post.comment }}</span> <!-- Assign commment field data from array -->
      </div>
      <div class="actions">
      </div>
    </div>
  </div>
</template>
<script>
  import { find } from 'lodash'
  export default {
    data () {
      return {
        post: null // Set data variable at null
      }
    },
    mounted () { // mounted allows full access to the reactive component
      this.post = find(this.$root.post, (post) => post['.key'] === this.$route.params.id) // assign key value to post variable
    }
  }
</script>
      <style scoped> /* scoped styles only to this component */
        .info {
          text-align: right;
          padding: 5px;
          color: #555;
          font-size: 10px;
        }
        .comment {
          padding: 10px;
          color: #555;
        }
        .actions {
          text-align: center;
        }
      </style>