var routes = [
  { path: '/', component: ForumIndex },
  { path: '/thread/new', component: NewThread },
  { path: '/thread/', component: Thread },
  { path: '/thread/:thread', component: Thread },
  { path: '/register', component: Registration },
  { path: '*', component: { template: '<div>Not Found</div>' } },
];

var router = new VueRouter({
  routes: routes,
});

new Vue({
  routes: router,
  el: '#app',
});
