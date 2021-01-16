<template>
    <v-app-bar app
      color="primary"
      dark
    >
        <nav-button icon="home" :to="{name:'landing-page'}"></nav-button>
        
        <div><nav-button icon="location_city" :to="{name:'apartments-list'}" exact-path
            name="apartments"></nav-button></div>
        
        <div><nav-button v-if="isAuth" router :to="{name: 'create-apartment'}"
            icon="add" name="apartment"
        ></nav-button></div>

        <v-spacer></v-spacer>

        <!-- <nav-button v-if="isAuth" icon="location_city"
            :to="{name:'apartments-list', query:{id: authUserId}}"
            name="apartments"></nav-button> -->
        

        <div><nav-button v-if="!isAuth" icon="login" :to="{name:'login-page'}"
            name="login"></nav-button></div>
        
        <div><nav-button v-if="!isAuth" icon="person_add" :to="{name:'register-page'}"
            name="register"></nav-button></div>
        
        <div v-if="isAuth && !!name">Привет, {{name}}</div>
        <nav-button-bare v-if="isAuth" icon="exit_to_app" :fnx="deleteAuth"></nav-button-bare>
        


    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavButton from './navbar-nav/nav-button'
import NavButtonBare from './navbar-nav/nav-button-bare'

export default {
    components: {
        NavButton,
        NavButtonBare
    },
    computed: {
        ...mapGetters('auth', ['isAuth']),
        ...mapGetters('user', ['name'])
    },
    methods: {
        ...mapActions('auth', ['deleteAuth']),
    },
}
</script>