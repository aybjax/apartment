import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import apartments from './mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      apartments: apartments,
    }
  },
  mutations: {
    add: (state, payload) => {
      state.apartments.push(payload.apartment)
    },
  },
  actions: {
    add: (context, payload) => {
      context.commit('add', payload)
    },
  },
  gettters: {
    apartmentById: (state) => (id) => {
      return state.apartments.find(ap => ap.id === id)
    },
  },
  modules: {
    auth,
    user,
  }
})
