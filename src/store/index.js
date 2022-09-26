import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        information(content, value) {
            axios.get('/api/information').then((res) => {
                content.commit('INFORMATION', res.data.data[0])
            })
        },
        map(content, value) {
            axios.get('/api/map').then((res) => {
                content.commit('MAP', res.data.data[0])
            })
        }
    },
    mutations: {
        INFORMATION(state, value) {
            state.information = value
        },
        MAP(state, value) {
            value.jwd = value.jwd.split(',');
            localStorage.setItem('map', JSON.stringify(value))
            state.map = value
        }
    },
    state: {
        information: '',
        map: ''
    }
})