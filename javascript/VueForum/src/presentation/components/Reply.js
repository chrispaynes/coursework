var Reply = Vue.component('reply-form', {
    template: `
        <div id='reply_component' class="col-xs-12 text-center pad-vert-md">
            <form action='register.php' method="POST">
                <div class="form-group col-xs-12 margin-bottom-md">
                    <label class="col-sm-12 margin-bottom-sm txt-green reply_label">Reply</label>
                    <textarea rows="12" class="col-xs-12" type="text" name="uname" placeholder="" required />
                </div>
            </form>
            <div class='col-xs-12'>
                <button class='btn btn-primary margin-horiz-xs' v-on:click="reply()">Reply</button>
                <button class='btn btn-success margin-horiz-xs' v-on:click="newThread()">Start New Thread</button>
            </div>
            <hr />
        </div>
    `,
    data: function() {
        return {items: []};
    },
    // define methods under the `methods` object
    methods: {
        reply: function() {
        },
        newThread: function() {
            router.push({ path: '/thread/new'});
        },
    }
});
