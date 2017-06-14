var routes = [
    { path: '/', component: ForumIndex },
    { path: '/thread/new', component: NewThread },
    { path: '/thread/', component: Thread },
    { path: '/thread/:thread', component: Thread },
    { path: '/register', component: Registration },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/users', component: UserIndex },
    { path: '*', component: { template: '<div>Not Found</div>' } },
];

var router = new VueRouter({
    routes: routes,
});

new Vue({
    routes: router,
    el: '#app',
});
