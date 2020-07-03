import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manager = r => require.ensure([], () => r(require('@/page/manager')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

const routers = [
    /*
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    */
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/manager',
        component: manager,
        name: '',
        children: [{
            path: '',
            component: home,
            meta: [],
        }
        ]
    }
]
export default new Router({
    routes: routers
})
