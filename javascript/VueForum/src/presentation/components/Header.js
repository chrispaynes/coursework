Vue.component('app-header', {
  template: `
    <div class="col-xs-12 bdr">
      <h2>HEADER COMPONENT</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/profile">User Profile</router-link>
      <router-link to="/subforum">Subforums</router-link>
      <router-link to="/thread/new">New Thread</router-link>
    </div>
    `,
});
