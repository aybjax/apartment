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
                        v-model="firstname"
                        :rules="usernameRules"
                        label="Ваше имя"
                        required
                        validate-on-blur
                    ></v-text-field>
                    <v-text-field
                        v-model="lastname"
                        :rules="usernameRules"
                        label="Ваше фамилия"
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
                        
                        <image-card
                            v-if="!imageOverlay && !!img"
                            :img="img" :cancelImage="cancelImage"
                            :width="200"
                        ></image-card>
                    
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

        <overlay-image :img="img" :imageOverlay="imageOverlay"
            :cancelImage="cancelImage" :closeOverlay="closeOverlay"
            :width="400"
        ></overlay-image>

    </v-container>
</template>

<script>
import OverlayImage from '@/components/form-image/overlay-image.vue'
import ImageCard from '@/components/form-image/image-card.vue'

import FormMixin from '@/mixins/form'
import imageFieldMixin from '@/mixins/imageField'

export default {
    mixins: [
        FormMixin, imageFieldMixin
    ],
    components: {
        OverlayImage,
        ImageCard,
    },
    data(){
        return {
            form: null,
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            phoneInput: '',
            phone: '',
            prefix: '',
            imageList: [],
            password: '',
            password2: '',
            url: 'http://localhost/api/register',
        }
    },
    methods: {
        prepareForm() {
            this.form = new FormData()
            this.form.append('username', this.username)
            this.form.append('firstname', this.firstname)
            this.form.append('lastname', this.lastname)
            this.form.append('phone', this.phone)
            this.form.append('email', this.email)
            this.form.append('password', this.password)

            if(this.img)
            {
                this.form.append('image', this.img.file)
            }
        },
        successFnx(){
            this.$router.push({name:'login-page'})
        },
    },
}
</script>