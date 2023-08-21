import { createRouter, createWebHistory } from 'vue-router'

import Router from './Router.vue';
import Products from './Products.vue';
import Users from './Users.vue';

let routes = [
    { path: '/', component: Router },
    { path: '/products', component: Products },
    { path: '/users', component: Users },
]

let router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export { router };