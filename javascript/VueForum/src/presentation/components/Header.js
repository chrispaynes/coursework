Vue.component('app-header', {
    template: `
    <div id='header_component' class='container-fluid col-xs-12 margin-bottom-xl text-center'>
        <div class='row'>
            <div id='logo' class='col-xs-12 col-md-4'>
                <h1 class='text-size-lg'><span class='txt-blue'>Vue</span><span class='txt-green'>Forums</span></h1>
            </div>
            <div id='nav_component' class='col-xs-12 col-md-8 text-size-sm'>
                <div class='container-fluid'>
                    <div class='row'>
                        <router-link class='col-xs-12 col-sm-3' to='/'>Home</router-link>
                        <router-link class='col-xs-12 col-sm-3' to='/register'>Register</router-link>
                        <router-link class='col-xs-12 col-sm-3' to='/profile'>User Profile</router-link>
                        <router-link class='col-xs-12 col-sm-3' to='/thread/new'>New Thread</router-link>
                    </div>
                </div>
            </div>
        </div>
        <hr class='hr-bdr-2 margin-0' />
    </div>
    `,
});
