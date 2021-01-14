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
      counter: 0,
    }
  },
  mutations: {
    add: (state, payload) => {
      state.apartments.push(payload.apartment)
    },
    remove: (state, payload) => {
      state.apartments = state.apartments.filter(el => el.id !== payload.id)
    },
  },
  actions: {
    add: (context, payload) => {
      context.commit('add', payload)
    },
    remove: (context, payload) => {
      context.commit('remove', payload)
    }
  },
  getters: {
    apartmentById: (state) => (id) => {
      console.log(state)
      return state.apartments.find(ap => ap.id.toString() === id.toString())
    },
    apartments: (state) => (userId) => {
      if(userId) {
        return state.apartments.filter(ap => ap.owner.id.toString() === userId.toString())
      }

      return state.apartments
    },
  },
  modules: {
    auth,
    user,
  }
})
