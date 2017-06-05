Vue.component('app-footer', {
  template: `
    <div id='footer_component' class='col-xs-12 margin-top-xl'>
      <hr class='hr-bdr-4 margin-bottom-0' />
      <div class='text-center pad-sm text-size-xs row'>
        <router-link class='col-md-offset-2 col-md-2 txt-green' to='/'>Home</router-link>
        <router-link class='col-md-2 txt-green' to='/register'>Register</router-link>
        <router-link class='col-md-2 txt-green' to='/profile'>User Profile</router-link>
        <router-link class='col-md-2 txt-green' to='/thread/new'>New Thread</router-link>
      <div>
    </div>
    `,
});
