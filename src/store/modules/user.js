export default {
    namespaced: true,
    state(){
        return {
            id: 0,
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            phone:'',
            image: '',
        }
    },
    mutations: {
        setUser(state, payload){
            state.id = payload.id || -1
            state.username = payload.username || ''
            state.firstname = payload.firstname || ''
            state.lastname = payload.lastname || ''
            state.email = payload.email || ''
            state.phone = payload.phone ||''
            state.image = payload.image || ''
        },
        deleteUser(state) {
            state.id = 0
            state.username = ''
            state.firstname = ''
            state.lastname = ''
            state.email = ''
            state.phone = ''
            state.image = ''
        },
    },
    getters: {
        id(state){
            return state.id
        },
        username(state){
            return state.username
        },
        name(state){
            return state.firstname + ' ' + state.lastname
        },
        email(state){
            return state.email
        },
        phone(state){
            return state.phone
        },
        image(state){
            return state.image
        },
    },
}