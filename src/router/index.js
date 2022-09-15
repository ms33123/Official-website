import VueRouter from 'vue-router'

import index from '../pages/Index'
import Home from '../pages/Home'
import Admin from '../components/Admin'
import Jbsz from '../pages/admin/jbsz'
import Map from '../pages/admin/map'
import About from '../pages/admin/about'
import ProductList from '../pages/admin/ProductList'
import Carousel from '../pages/admin/Carousel.vue'


import Index from '../components/Index'
import sy from '../pages/Sy'
import gywm from '../pages/gywm/gywm'
import lxwm from '../pages/lxwm/lxwm'
import cpzs from '../pages/cpzs/cpzs'
import store from '@/store'

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: index,
        children: [{
            path: '',
            component: sy
        }, {
            path: "sy",
            component: sy
        }, {
            path: 'gywm',
            component: gywm
        }, {
            path: 'lxwm',
            component: lxwm
        }, {
            name: 'cpzs',
            path: 'cpzs/:id',
            component: cpzs
        }]
    }, {
        path: '/index',
        redirect: '/'
    }, {
        path: '/admin',
        component: Admin
    }, {
        name: 'Index',
        path: '/home',
        component: Index,
        beforeEnter: (to, from, next) => {
            if (to.fullPath == '/admin') {
                next()
            } else {
                if (window.sessionStorage.getItem('token')) {
                    //判断是否已经登陆
                    if (window.sessionStorage.getItem('nanoid')) {
                        if (window.localStorage.getItem('nanoid') == window.sessionStorage.getItem('nanoid')) {
                            next()
                        } else {
                            next({ path: '/admin' })
                        }
                    } else {
                        if (window.sessionStorage.getItem('token') != store.state.token) {
                            next({ path: '/admin' })
                        } else {
                            next()
                        }
                    }
                } else {
                    next({ path: '/admin' })
                }
            }
        },
        children: [{
            path: '',
            component: Home
        }, {
            path: 'jbsz',
            component: Jbsz
        }, {
            path: 'map',
            component: Map
        }, {
            path: 'about',
            component: About,
        }, {
            path: 'cplb',
            component: ProductList
        }, {
            path: 'carousel',
            component: Carousel
        }]
    }, ]
})