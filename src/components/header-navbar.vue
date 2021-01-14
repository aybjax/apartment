<template>
    <v-app-bar
      color="primary"
      dark
    >
        <nav-button icon="home" :to="{name:'landing-page'}"></nav-button>
        
        <nav-button icon="location_city" :to="{name:'apartments-list'}"
            name="apartments"></nav-button>

        <nav-button v-if="isAuth" icon="location_city" :to="{name:'apartments-list'}"
            name="apartments"></nav-button>

        <v-spacer></v-spacer>

        <nav-button v-if="!isAuth" icon="login" :to="{name:'login-page'}"
            name="login"></nav-button>
        
        <nav-button v-if="!isAuth" icon="person_add" :to="{name:'register-page'}"
            name="register"></nav-button>
        
        <nav-button-bare v-else icon="exit_to_app" :fnx="deleteAuth"
        ></nav-button-bare>
        


    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavButton from './navbar-nav/nav-button'
import NavButtonBare from './navbar-nav/nav-button-bare'

export default {
    components: {
        NavButton,
        NavButtonBare,
    },
    computed: {
        ...mapGetters('auth', ['isAuth']),
    },
    methods: {
        ...mapActions('auth', ['deleteAuth']),
    },
}
</script>