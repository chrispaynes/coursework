Vue.component('app-header', {
  template: `
    <div id='header_component' class='col-xs-12 margin-bottom-xl pad-md'>
      <div id='logo' class='col-xs-12 col-md-7'>
        <h1><span class='txt-blue'>Vue</span><span class='txt-green'>Forums</span></h1>
      </div>
      <div id='nav_component' class='col-xs-12 col-md-5 pull-right text-size-sm'>
        <router-link class='col-xs-3' to='/'>Home</router-link>
        <router-link class='col-xs-3' to='/register'>Register</router-link>
        <router-link class='col-xs-3' to='/profile'>User Profile</router-link>
        <router-link class='col-xs-3' to='/thread/new'>New Thread</router-link>
      </div>
      <hr class='hr-bdr-2 col-xs-12 margin-0' />
    </div>
    `,
});
