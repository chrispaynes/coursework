Vue.component('app-footer', {
  template: `
    <div class="col-xs-12">
      <hr />
      <div class="text-center pad-sm text-size-xs">
        <router-link class="pad-sm" to="/">Home</router-link>|
        <router-link class="pad-sm" to="/register">Register</router-link>|
        <router-link class="pad-sm" to="/profile">User Profile</router-link>|
        <router-link class="pad-sm" to="/thread/new">New Thread</router-link>
      <div>
    </div>
    `,
});
