Vue.component('app', {
  template: `
    <div>
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
    `,
});

var app = new Vue({
  router,
  el: '#app',
});


// <style>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style>
