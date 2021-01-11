<template>
    <v-container class="mt-16">
        <v-card elevation="4" shaped outlined max-width="600px"
            class="pa-6 mx-auto"
        >
            <v-card-title class="d-flex justify-center">
                Зарегистрируйся!
            </v-card-title>

            <v-card-text>
                <v-form class="pa-10" ref="form">
                    <v-text-field
                        v-model="username"
                        :rules="usernameRules"
                        label="Выберите имя пользователя"
                        required
                        validate-on-blur
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Введите e-mail адрес"
                        required
                        validate-on-blur
                    ></v-text-field>
                    
                    <v-text-field
                        v-model="phoneInput"
                        hint="8-777-889-66-01"
                        placeholder="77-889-66-01"
                        :prefix="prefix"
                        @focus="prefix='8-7'"
                        @blur="prefix = phoneInput ? '8-7' : ''"
                        :rules="phoneRules"
                        label="Введите номер сотового телефона"
                        required
                        validate-on-blur
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Введите пароль"
                        type="password"
                        required
                        validate-on-blur
                    ></v-text-field>
                    
                    <v-text-field
                        v-model="password2"
                        :rules="passwordRules2"
                        label="Повторите пароль"
                        type="password"
                        required
                        validate-on-blur
                    ></v-text-field>
                    
                    <v-container fluid class="d-flex">
                        <v-file-input
                            label="File input"
                            accept="image/*"
                            @change="onFileChangeForPreview"
                            prepend-icon="add_a_photo"
                            hide-input
                        ></v-file-input>

                        <v-card
                            height="200"
                            width="200"
                            class="secondary d-flex flex-column pa-2"
                            v-if="!imageOverlay && !!img"
                        >
                            <v-img max-height="140" max-width="200"
                                :src="img.url"
                            >
                            </v-img>
                            <v-card-actions class="mt-auto">
                                <v-container fluid class="d-flex justify-center pa-0">
                                    <v-btn
                                        color="error"
                                        @click="cancelImage"
                                    >
                                        <v-icon large>
                                            delete_forever
                                        </v-icon>
                                    </v-btn>

                                </v-container>
                            </v-card-actions>
                        </v-card>
                        </v-container>

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


        <v-overlay
            :value="imageOverlay"
        >
            <v-card
                height="400"
                width="400"
                class="secondary d-flex flex-column pa-2"
                v-if="!!img"
            >
                <v-img max-height="340" max-width="400"
                    :src="img.url"
                >
                </v-img>
                <v-card-actions class="mt-auto">
                    <v-container fluid class="d-flex justify-space-between pa-0">
                        <v-btn
                            color="success"
                            @click="imageOverlay = false"
                        >
                            <v-icon small left>
                                thumb_up
                            </v-icon>
                            Нравиться
                        </v-btn>

                        <v-btn
                            color="error"
                            @click="cancelImage"
                        >
                            убрать
                            <v-icon small right>
                                delete_forever
                            </v-icon>
                        </v-btn>

                    </v-container>
                </v-card-actions>
            </v-card>
        </v-overlay>

    </v-container>
</template>

<script>
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/
const emailCheck = (email) => (
    emailRegex.test(email) 
    || "Введите правильный e-mail"
)

const phoneRegex = /^[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/

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
            imageOverlay: false,

            valid: false,
            username: '',
            email: '',
            phoneInput: '',
            phoneNbr: '',
            prefix: '',
            img: null,
            password: '',
            password2: '',
            usernameRules: [
                v => !!v || "Поле не должно быть пустым!",
            ],
            emailRules: [
                v => !!v || "Введите e-mail!",
                emailCheck,
            ],
            phoneRules: [
                (phoneInput) => {
                    const isValid = phoneRegex.test(phoneInput) 

                    if(isValid) {
                        this.phoneNbr = "8-7" + phoneInput
                        return true
                    }

                    this.phoneNbr = ""

                    return "Введите номер сотового как указано на примере"
                }
            ],
            passwordRules: [
                ...passwordCheck,
            ],
            passwordRules2: [
                ...passwordCheck,
                v => v === this.password || "Пароли должны быть одинакое",
            ],
        }
    },
    methods: {
        submit(){
            if ( !(this.$refs.form.validate()) ) {
                return
            }

            this.sendData()
        },
        onFileChangeForPreview(file) {
            if(!file) {
                return
            }
            this.img = {
                name: file.name,
                size: file.size,
                mod: file.lastModified,
                file,
            }

            const reader = new FileReader();

            reader.onload = () => {
                this.img.url = reader.result
                this.imageOverlay = true
            }

            reader.readAsDataURL(file)
        },
        cancelImage(){
            this.imageOverlay = false
            this.img = null
        },
        sendData(){
            console.log(`${this.username}: ${this.phoneNbr} and ${this.email} and ${this.password}`)
            const form = new FormData()
            form.append('username', this.username)
            form.append('phone', this.phoneNbr)
            form.append('email', this.email)
            form.append('password', this.password)
            
            if(this.img)
            {
                form.append('image', this.img.file)
            }

            fetch('http://localhost:3000', {
                method: 'POST',
                body: form
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
</script>