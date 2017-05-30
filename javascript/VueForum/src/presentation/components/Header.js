Vue.component('app-header', {
  template: `
    <div class='margin-bottom-lg pad-md row'>
      <div class="col-xs-2">
        <h1><span class='txt-blue'>Vue</span><span class='txt-green'>Forums</span></h1>
      </div>
      <div class="pull-right pad-sm text-size-sm">
        <router-link class="pad-sm" to="/">Home</router-link>
        <router-link class="pad-sm" to="/register">Register</router-link>
        <router-link class="pad-sm" to="/profile">User Profile</router-link>
        <router-link class="pad-sm" to="/thread/new">New Thread</router-link>
      <div>
    </div>
    `,
});
