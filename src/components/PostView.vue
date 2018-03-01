
<template>
        <form>
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--8-col">
              <div id='clock'></div>
            </div>
            <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet" id="upload">
              <input type='file' id='getval'/>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
                <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
                <label for="username" class="mdl-textfield__label">Describe me</label>
              </div>
              <div class="actions">
                <a @click.prevent="postFood" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                  POST
                </a>
              </div>
            </div>
          </div>
        </form>
      </template>

      <script>
        export default {
              data () {
                return {
                  'postUrl': null,
                }
              },
              mounted () {
                this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
                  console.log(response.url)
                  this.postUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
                })
              },

              methods: {
                postFood () {
                this.$root.$firebaseRefs.post.push(
                    {
                    'url': this.postUrl,
                    'comment': this.title,
                    'info': 'Posted by Lewis on Tuesday',
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