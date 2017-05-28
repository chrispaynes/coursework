var routes = [
  { path: '/', component: ForumIndex },
  { path: '/subforum/index', component: SubforumIndex },
  { path: '/subforum/index/:id', component: SubforumIndex },
  { path: '/subforum/:thread', component: Thread },
  { path: '/register', component: Registration },
  { path: '/thread/new', component: NewThread },
  { path: '*', component: { template: '<div>Not Found</div>' } },
];

var router = new VueRouter({
  routes,
});

new Vue({
  router,
  el: '#app',
});
