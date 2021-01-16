export default {
    namespaced: true,
    state(){
        return {
            expires_in: 0,
            access_token: '',
        }
    },
    getters: {
        token(state){
            return state.access_token
        },
        isAuth(state){
            return state.access_token && state.expires_in
                    && state.expires_in > Date.now()
        },
    },
    mutations: {
        setAuth(state,payload) {
            state.expires_in = payload.expires_in*1000 + Date.now()
            state.access_token = payload.access_token
        },
        deleteAuth(state) {
            state.expires_in = 0
            state.access_token = ''
        },
    },
    actions: {
        setAuth(context, payload) {
            // set auth
            context.commit('setAuth', payload.token_info)
            //set user
            context.commit('user/setUser', payload.user_info, {root: true})
        },
        deleteAuth(context) {
            context.commit('deleteAuth')
            context.commit('user/deleteUser', null, {root: true})
        },
    },
}