<template>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--8-col">
            <div class="picture">
              <img :src="post.url" />
            </div>
            <div class="info">
              <span>{{ post.info }}</span>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
            <div class="comment">
              <span>{{ post.comment }}</span>
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
              post: null
            }
          },
          mounted () {
            this.post = find(this.$root.post, (post) => post['.key'] === this.$route.params.id)
          }
        }
      </script>
      <style scoped>
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