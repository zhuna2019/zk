import Vue from 'vue'
import Vuex from 'vuex'
import variables from '@/styles/variables.scss'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        theme: variables.theme,
        openedTab: [
            {
                title: '粮情综合看版',
                name: 'home'
            }
        ],
        activeTab: ''
    },
    mutations: {
        CHANGE_SETTING: (state, { key, value }) => {
            if (state.hasOwnProperty(key)) {
                state[key] = value
            }
        },
        addTab(state, componentName) {
            state.openedTab.push(componentName)
        },
        changeTab(state, componentName) {
            state.activeTab = componentName
        },
        deductTab(state, componentName) {
            let index = state.openedTab.indexOf(componentName)
            state.openedTab.splice(index, 1)
        }
    },
    actions: {
        changeSetting({ commit }, data) {
            commit('CHANGE_SETTING', data)
        }
    }
})
export default store
