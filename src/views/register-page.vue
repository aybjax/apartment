<template>
    <v-container class="mt-16">
        <v-card elevation="4" shaped outlined max-width="600px"
            class="pa-6 mx-auto"
        >
            <v-card-title class="d-flex justify-center">
                Зарегистрируйся!
            </v-card-title>

            <v-card-text>
                <v-form v-model="valid" class="pa-10" ref="form">
                    <v-text-field
                        v-model="username"
                        :rules="usernameRules"
                        label="Выберите имя пользователя"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Введите e-mail адрес"
                        required
                    ></v-text-field>
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
                        регистрироваться
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
    </v-container>
</template>

<script>
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
const emailCheck = (email) => (
    emailRegex.test(email) 
    || "Введите правильный e-mail"
)

const passwordCheck = [
    pswd => !!pswd || "Введите пароль!",
    pswd => /[a-z]/.test(pswd) || "Пароль должен содержать минимум одну строчную латинскую букву",
    pswd => /[A-Z]/.test(pswd) || "Пароль должен содержать минимум одну заглавную латинскую букву",
    pswd => /[0-9]/.test(pswd) || "Пароль должен содержать минимум одну цифру",
    pswd => pswd.length >= 6 || "Пароль должен содержать не меньше 6 букв",
]

export default {
    data(){
        return {
            valid: false,
            username: '',
            email: '',
            password: '',
            usernameRules: [
                v => !!v || "Поле не должно быть пустым!",
            ],
            emailRules: [
                v => !!v || "Введите e-mail!",
                emailCheck,
            ],
            passwordRules: [
                ...passwordCheck,
            ]
        }
    },
    methods: {
        submit(){
            if ( !(this.$refs.form.validate()) ) {
                return
            }

            console.log(`${this.username}: ${this.email} and ${this.password}`)
        }
    }
}
</script>