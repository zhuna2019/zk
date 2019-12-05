import Vue from 'vue'
import Vuex from "vuex"
import variables from '@/styles/variables.scss'
Vue.user(Vuex)
export default new Vuex.Store({
    state: {
        theme: variables.theme,
    },
    mutations: {
        CHANGE_SETTING: (state, { key, value }) => {
            if (state.hasOwnProperty(key)) {
                state[key] = value
            }
        }
    },
    actions: {
        changeSetting({ commit }, data) {
            commit('CHANGE_SETTING', data)
        }
    }
})