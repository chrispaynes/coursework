var ForumIndex = Vue.component('forum-index', {
  template: `
  <ul>
      <li v-for="(subforum, index) in subforums"
          v-bind:subforum="subforum"
          v-bind:index="index"
          v-bind:key="subforum.id"
          class="col-xs-12"
          >
        <div class="row sf_header" v-if="index == 0">
          <div class='col-xs-12 col-md-2'>{{ subforum.subforumName }}</div>
          <div class='col-xs-12 col-md-3'>{{ subforum.subforumDescription }}</div>
          <div class='col-xs-12 col-md-2'>{{ subforum.subforumThreads }}</div>
          <div class='col-xs-12 col-md-2'>{{ subforum.subforumPosts }}</div>
          <div class='col-xs-12 col-md-3'>{{ subforum.subforumLastUpdated }}</div>
          <hr class='col-xs-12' />
        </div>
        <div class="row" v-else>
          <div class='col-xs-12 col-md-2'>
            <router-link :to="{ path: '/subforum/index/', query: { id: subforum.subforum_id_PK }}">{{ subforum.subforumName }}</router-link>
            <a v-bind:href='"data/queries/subforum/index.php?id=" + subforum.subforum_id_PK'>{{ subforum.subforumName }}</a>
          </div>
          <div class='col-xs-12 col-md-3'>{{ subforum.subforumDescription }}</div>
          <div class='col-xs-12 col-md-2'>{{ subforum.subforumThreads }}</div>
          <div class='col-xs-12 col-md-2'>{{ subforum.subforumPosts }}</div>
          <div class='col-xs-12 col-md-3'><a v-bind:href='"data/queries/most_recent_post.php?date=" + subforum.subforumLastUpdated'>{{ subforum.subforumLastUpdated }}</a></div>
          <hr class='col-xs-12' />
        </div>
      </li>
    </ul>
    `,
  props: ['subforums', 'subforum'],
  data() {
    return {subforums: []}
  },
  beforeCreate() {
    var self = this;
    axios.get('./data/queries/Forum_Index.php', {
        })
        .then(function (response) {
          self.subforums = response.data
          console.log("self.subforums", self.subforums);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
});

// v-if="index == 0"
// new Vue({
//   el: "#app",
//   data() {
//     return {subforums: []}
//   },
//   beforeCreate() {
//     var self = this;
//     axios.get('data/queries/forum_index.php', {
//         })
//         .then(function (response) {
//           self.subforums = response.data
//           console.log(self.subforums);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//   }
// })

// <template id="manage-template">
//   <div>
//     <h1>Manage Posts</h1>
//     <div class="list-group">
//       <a v-for="post in posts" href="#" class="list-group-item clearfix">
//         {{ post }}
//         <span class="pull-right">
//           <button class="btn btn-xs btn-info">
//             <span class="glyphicon glyphicon-edit"></span>
//           </button>
//           <button class="btn btn-xs btn-warning">
//             <span class="glyphicon glyphicon-trash"></span>
//           </button>
//         </span>
//       </a>
//     </div>
//   </div>
// </template>

    // <div id="forum-index" class="container">
    //     <h1>SUBFORUMS COMPONENT</h1>
    //     <div
    //         is="forum-index"
    //         v-for="(item, index) in items"
    //         v-bind:item="item"
    //         v-bind:index="index"
    //         v-bind:key="item.id">
    //     </div>
    // </div>

// var ForumIndex = new Vue({
//   router,
//   el: '#app',
//   data() {
//     return {items: []}
//   },
//   beforeCreate() {
//     var self = this;
//     axios.get('./data/queries/forum_index.php', {
//         })
//         .then(function (response) {
//           self.items = response.data
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//   },
// })

// new Vue({
//   el: '#forum-index',
//   data() {
//     return {subforums: []}
//   },
//   beforeCreate() {
//     var self = this;
//     axios.get('data/queries/forum_index.php', {
//         })
//         .then(function (response) {
//           self.subforums = response.data
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//   },
// })
