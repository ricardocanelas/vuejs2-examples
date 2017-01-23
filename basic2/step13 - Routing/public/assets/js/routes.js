import VueRouter from 'vue-router';

let routes = [
    {
        path: '',
        component: require('./../views/Home'),
    },

    {
        path: '/about',
        component: require('./../views/About')
    },

    {
        path: '/contact',
        component: require('./../views/Contact')
    }
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
});