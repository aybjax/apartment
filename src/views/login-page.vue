<template>
    <v-container class="mt-16">
        <v-card elevation="4" shaped outlined max-width="600px"
            class="pa-6 mx-auto"
        >
            <v-card-title class="d-flex justify-center">
                Зайдите на сайт
            </v-card-title>

            <v-card-text>
                <v-form class="pa-10" ref="form">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Введите e-mail адрес"
                        required
                    ></v-text-field>
                    <!-- :counter=10 -->
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Введите пароль"
                        type="password"
                        required
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around align-center pb-3">
                <v-btn large @click="submit">
                    <v-icon left>
                        login
                    </v-icon>
                    <span>
                        зайти
                    </span>
                </v-btn>
                <v-btn large @click="$router.go(-1)">
                    <v-icon left>
                        west
                    </v-icon>
                    <span>
                        назад
                    </span>
                </v-btn>
            </v-card-actions>
        </v-card>
        <snack-bar :title='title' :show="showSnackbar"
            @close-snackbar="showSnackbar = false" :route="route"
        ></snack-bar>
    </v-container>
</template>

<script>
import FormMixin from '@/mixins/form'
import { mapActions, mapGetters } from 'vuex'
import SnackBar from '@/components/snackBar'


export default {
    components: {
        SnackBar,
    },
    mixins: [
        FormMixin,
    ],
    data(){
        return {
            form: null,
            email: '',
            password: '',
            url: 'http://localhost/api/login',
            showSnackbar: false,
            route: null,
            title: '',
        }
    },
    computed: {
        ...mapGetters('user', ['name']),
        ...mapGetters('auth', ['token', 'isAuth']),
    },
    methods: {
        ...mapActions([
            'auth/setAuth',
        ]),
        prepareForm(){
            this.form = JSON.stringify({
                    email: this.email,
                    password: this.password,
                })
            this.headers['Content-Type'] = 'application/json'
        },
        sendData(){
            this.prepareForm()

            this['auth/setAuth']({
                body: this.form,
                headers: this.headers,
            })
            .then(msg => {
                this.showSnackbar = true
                if(msg === 'ok'){
                    this.title = 'logged in successfully'
                    this.route = {name:'apartments-list'}
                    
                    return 
                }

                this.title = 'login failed'
            })
            .catch( () => {
                this.showSnackbar = true
                this.title = 'error occurred'
            })
        },
    }
}
</script>