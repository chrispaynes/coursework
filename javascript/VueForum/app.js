Vue.component('app', {
  template: `
    <div class='pad-bottom-md'>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
    `,
});

var app = new Vue({
  router: router,
  el: '#app',
});
