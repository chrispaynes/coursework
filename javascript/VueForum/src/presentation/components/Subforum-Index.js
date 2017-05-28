var SubforumIndex = Vue.component('subforum-index', {
  template: `
  <div>
    <ul>
      <li v-for="(t, index) in threads"
          v-bind:t="t"
          v-bind:index="index"
          v-bind:key="t.id"
          class="col-xs-12"
          >
            <div class="row sf_header" v-if="index == 0">
              <div class='col-xs-12 col-md-2'>{{ t.thread_title }}</div>
              <div class='col-xs-12 col-md-2'>{{ t.thread_author }}</div>
              <div class='col-xs-12 col-md-1'>{{ t.thread_total_replies }}</div>
              <div class='col-xs-12 col-md-3'>{{ t.thread_creation_date }}</div>
              <div class='col-xs-12 col-md-3'>{{ t.thread_last_reply_timestamp }}</div>
              <hr class='col-xs-12' />
            </div>
            <div class="row" v-else>
              <div class='col-xs-12 col-md-2'>{{ t.thread_title }}</div>
              <div class='col-xs-12 col-md-2'>{{ t.thread_author }}</div>
              <div class='col-xs-12 col-md-1'>{{ t.thread_total_replies }}</div>
              <div class='col-xs-12 col-md-3'>{{ t.thread_creation_date }}</div>
              <div class='col-xs-12 col-md-3'>{{ t.thread_last_reply_timestamp }}</div>
              <hr class='col-xs-12' />
            </div>
        </li>
    </ul>
  </div>
    `,
  data() {
    return { threads: [] };
  },
  beforeCreate() {
    var self = this;
    axios.get('./data/queries/subforum/index.php?', {
      params: {
        id: this.$route.query.id,
      },
    })
    .then((response) => {
      self.threads = response.data;
      console.log('THREADS', self.threads);
    })
    .catch((error) => {
      console.log(error);
    });
  },
});
