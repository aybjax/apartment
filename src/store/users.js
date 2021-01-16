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
        addUser(state, user){
            state.users.push(user)
        },
        addUsers(state, users){
            state.users.concat(users)
        },
        deleteUser(state, payload){
            state = state.users.filter(user => user.id !== payload.id)
        },
    },
    actions: {
        addUser(context, user) {
            context.commit('addUser', user)
        },
        addUsers(context, users) {
            context.commit('addUsers', users)
        },
        deleteUser(context, payload) {
            context.commit('deleteUser', payload)
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
                    context.dispatch('addUser', user)

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