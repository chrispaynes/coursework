var ForumIndex = Vue.component('forum-index', {
  template: `
    <ul class="col-xs-12 pad-md">
      <li>
        <div class="row txt-green bold">
          <div class='col-xs-12 col-md-4'>Topic</div>
          <div class='col-xs-12 col-md-2'>Author</div>
          <div class='col-xs-12 col-md-4'>Last Updated</div>
        </div>
        <hr/>
      </li>
      <li v-for="(p, index) in posts"
          v-bind:subforum="p"
          v-bind:index="index"
          v-bind:key="p.id"
          class="col-xs-12"
          >
        <div class="row">
          <div class='col-xs-12 col-md-4'>
            #{{ index + 1 }}.
            <router-link :to="{ path: '/thread/', query: { thread: p.post_thread_id }}" class='postlink'><strong>{{ p.thread_name }}</strong></router-link>
          </div>
          <div class='col-xs-12 col-md-2'>{{ p.author_username }}</div>
          <div class='col-xs-12 col-md-4'>{{ p.post_last_updated }}</div>
        </div>
        <hr/>
      </li>
    </ul>
    `,
  props: ['posts'],
  data: function() {
    return { posts: [], most_recent_post: [] };
  },
  beforeCreate: function() {
    var self = this;
    axios.get('./data/queries/Post.php', {
    })
        .then(function(response) {
          self.posts = response.data.filter(function(p) {return p.post_is_reply == "false";});
        })
        .catch(function(error) {
          console.log(error);
        });
  },
});
