var Post = Vue.component('post', {
    template: `
        <div id='post_component' class="row sf_header" v-if="index == 0">
            <div class='col-xs-12 col-md-2'>{{ item.subforumName }}</div>
            <div class='col-xs-12 col-md-3'>{{ item.subforumDescription }}</div>
            <div class='col-xs-12 col-md-2'>{{ item.subforumThreads }}</div>
            <div class='col-xs-12 col-md-2'>{{ item.subforumPosts }}</div>
            <div class='col-xs-12 col-md-3'>{{ item.subforumLastUpdated }}</div>
            <hr />
        </div>
        <div class="row" v-else>
            <div class='col-xs-12 col-md-2'><a href={{href}}>{{ item.subforumName }}</a></div>
            <div class='col-xs-12 col-md-3'>{{ item.subforumDescription }}</div>
            <div class='col-xs-12 col-md-2'>{{ item.subforumThreads }}</div>
            <div class='col-xs-12 col-md-2'>{{ item.subforumPosts }}</div>
            <div class='col-xs-12 col-md-3'><a href="#">{{ item.subforumLastUpdated }}</a></div>
            <hr />
        </div>
    `,
    props: ['item', 'header', 'index', 'href'],
    data: function() {
        return {items: [], headers: []};
    },
    beforeCreate: function() {
        var self = this;

        axios.get('data/queries/forum_index.php', {})
        .then(function (response) {
            self.headers = Object.keys(response.data[0]);
            self.items = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
});
