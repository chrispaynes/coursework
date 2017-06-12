Vue.component('app-header', {
    template: `
    <div id='header_component' class='container-fluid col-xs-12 margin-bottom-xl text-center'>
        <div class='row'>
            <div id='logo' class='col-xs-12 col-md-4'>
                <h1 class='text-size-lg'><span class='txt-blue'>Vue</span><span class='txt-green'>Forums</span></h1>
            </div>
            <div id='nav_component' class='col-xs-12 col-md-8 text-size-sm'>
                <div class='container-fluid'>
                    <div class='row' v-if="isLoggedOut">
                        <router-link class='col-xs-12 col-sm-3' to='/'>Home</router-link>
                        <router-link class='col-xs-12 col-sm-3' to='/profile'>View Users</router-link>
                        <router-link class='col-xs-12 col-sm-3' to='/register'>Register</router-link>
                        <router-link class='col-xs-12 col-sm-3' to='/register'>Login</router-link>
                    </div>
                    <div class='row' v-else>
                        <router-link class='col-xs-12 col-sm-2' to='/'>Home</router-link>
                        <router-link class='col-xs-12 col-sm-2' to='/profile'>User Profile</router-link>
                        <router-link class='col-xs-12 col-sm-2' to='/profile'>View Users</router-link>
                        <router-link class='col-xs-12 col-sm-2' to='/thread/new'>New Thread</router-link>
                        <a href='#' class='col-xs-12 col-sm-4' v-on:click="logout()">{{this.username}} (Logout)</a>
                    </div>
                </div>
            </div>
        </div>

        <hr class='hr-bdr-2 margin-0' />
    </div>
    `,
    data: function() {
        return { username: this.username, user_id: this.username, isLoggedOut: this.isLoggedOut };
    },
    beforeCreate: function() {
        this.isLoggedOut = true;

        if(Cookies.length > 0 && Cookies.get('username') && Cookies.get('user_id')) {
            this.username = Cookies.get('username');
            this.user_id = Cookies.get('user_id');
            this.isLoggedOut = false;
        }
    },
    methods: {
        logout: function() {
            this.username = '';
            this.user_id = '';
            this.isLoggedOut = true;
            Cookies.remove('username');
            Cookies.remove('user_id');
        },
    },
});
