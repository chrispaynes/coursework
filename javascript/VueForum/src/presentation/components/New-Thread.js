var NewThread = Vue.component('new-thread-form', {
    template: `
        <div id='new_thread_component' class='col-xs-12'>
            <form action='data/commands/NewThread.php' method='POST'>
            <h1 class='text-center margin-bottom-lg'>Start A New Thread</h1>
                <div class='form-group col-sm-12'>
                    <label class='col-xs-12 col-sm-2 txt-green'>Thread Title</label>
                    <input class='col-xs-12 col-sm-10' type='text' name='title' placeholder='' required></textarea>
                </div>
                <div class='form-group col-sm-12'>
                    <label class='col-xs-12 col-sm-2 txt-green'>Thread Message</label>
                    <textarea rows='12' class='col-xs-12 col-sm-10' type='text' name='body' placeholder='' required></textarea>
                </div>
                <input class='hidden' type='text' name='username' v-bind:value='this.username' required></textarea>
                <input class='hidden' type='text' name='user_id' v-bind:value='this.user_id' required></textarea>
                <input class='hidden' type='text' name='timestamp' v-bind:value='new Date()' required></textarea>
                <div class='form-group col-sm-12 text-center'>
                    <input class='btn btn-success' type='submit' name='new_thread' value='Submit Thread'>
                </div>
            </form>
        </div>
    `,
    data: function() {
        return { username: this.username, user_id: this.user_id };
    },
    beforeCreate: function() {
        var self = this;

        if(Cookies.length > 0 && Cookies.get('username') && Cookies.get('user_id')) {
            self.username = Cookies.get('username');
            self.user_id = Cookies.get('user_id');
        }
    },
});
