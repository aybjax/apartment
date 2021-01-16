import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import users from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      apartments: [],
    }
  },
  mutations: {
    add: (state, payload) => {
      state.apartments.push(payload.apartment)
    },
    addMany: (state, payload) => {
      state.apartments.push(...payload.apartments)
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
    },
    initApartments: (context) => {
      fetch('http://localhost/api/apartments')
        .then(response => {
          if(response.ok) {
            return response.json()
          }

          throw new Error(response.statusText)
        })
        .then(apartments => {
          context.commit('addMany', {apartments})

          return 'ok'
        }).catch( () => {
        })
    },
  },
  getters: {
    apartmentById: (state) => (id) => {
      return state.apartments.find(ap => ap.id.toString() === id.toString())
    },
    apartmentsOfUser: (state) => (userId) => {
      
      return state.apartments.filter(ap => ap.owner.id.toString() === userId.toString())
    },
    apartments: (state) => {
      return state.apartments
    },
  },
  modules: {
    auth,
    user,
    users,
  }
})
