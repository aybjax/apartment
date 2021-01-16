import fetcher from '@/utils/fetcher'
// id: 0,
// username: '',
// firstname: '',
// lastname: '',
// email: '',
// phone:'',
// image: '',
export default {
    state(){
        return {
            users: []
        }
    },
    mutations: {
        addOne(state, user){
            state.users.push(user)
        },
        addMany(state, users){
            state.users.concat(users)
        },
        delete(state, payload){
            state = state.users.filter(user => user.id !== payload.id)
        },
    },
    actions: {
        addOne(context, user) {
            context.commit('addOne', user)
        },
        addMany(context, users) {
            context.commit('addMany', users)
        },
        delete(context, payload) {
            context.commit('delete', payload)
        },
        getUserPromiseById: (context, id) => {
            const user = context.getters.users.find(user => {
                return user.id.toString() === id.toString()
            })

            if (user) {
                return new Promise((resolve) => {
                    resolve(user)
                }) 
            }

            return fetcher(`http://localhost/api/user/${id}`, null, context.rootGetters)
                .then( response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw new Error('failed')
                })
                .then( user => {
                    context.dispatch('addOne', user)

                    return user
                })
        },
    },
    getters: {
        users(state){
            return state.users
        }
    }
}