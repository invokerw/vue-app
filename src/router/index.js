import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

//解决 eleui 路由重复问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manager = r => require.ensure([], () => r(require('@/page/manager')), 'manager');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const test = r => require.ensure([], () => r(require('@/page/test')), 'test');
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
        }
        ]
    },
    {
        path: '/test',
        component: test,
        name: 'test'
    },
    {
        path: '/home',
        component: home,
        name: 'home'
    }
]
export default new Router({
    routes: routers
})
