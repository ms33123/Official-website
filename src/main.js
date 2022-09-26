import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'
import nanoid from 'nanoid'
import Mixin from './assets/js/BaseApi'
import VueAMap from 'vue-amap';
import store from './store/index'
import App from './App.vue'

Vue.mixin(Mixin)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAMap)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://43.143.75.247:5000'
axios.defaults.headers.post['Authorization'] = window.sessionStorage.getItem('token')
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

VueAMap.initAMapApiLoader({
    key: '8b96a2355749277530401ac50276e5bb',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

new Vue({
    render: h => h(App),
    router: router,
    store
}).$mount('#app')