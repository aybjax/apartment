<template>
    <v-container class="mt-16">
        <v-card elevation="4" shaped outlined max-width="600px"
            class="pa-6 mx-auto"
        >
            <v-card-title class="d-flex justify-center">
                Добавляй свою квартиру и зарабатывай деньги!
            </v-card-title>
            <v-card-text>
                <v-form class="pa-10" ref="form">
                    <v-text-field
                        v-model="title"
                        :rules="notEmptyRules"
                        label="Заголовок"
                        required
                        validate-on-blur
                    ></v-text-field>
                    
                    
                    <v-file-input
                        label="File input"
                        accept="image/*"
                        @change="onFileChangeForPreview"
                        hide-input
                        prepend-icon="add"
                        v-if="imageList.length < 4"
                    ></v-file-input>

                    <v-container class="d-flex justify-space-between align-baseline my-10">
                        <v-card v-for="(img, ind) in imageList" :key="img.name + img.mod + ind"
                            color="accent"
                        >
                            <v-container class="">
                                <v-row>
                                    <v-img :src="img.url" max-width="100"></v-img>
                                </v-row>
                                <v-spacer></v-spacer>
                                <v-row>
                                    <v-btn block color="error" class="mt-2"
                                        @click="deleteImg(ind)"
                                    >
                                        <v-icon>
                                            delete
                                        </v-icon>
                                    </v-btn>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-container>

                    <v-textarea
                        v-model="description"
                        :rules="moreOrLessRules"
                        label="Описание"
                        auto-grow
                        :hint="`не более ${descriptionMaxLength} слов`"
                        validate-on-blur
                    ></v-textarea>
                    <v-text-field
                        type="number"
                        v-model="price"
                        label="Цена за месяц"
                        suffix="теңге"
                        :rules="isIntegerRules"
                        required
                        validate-on-blur
                    ></v-text-field>
                    <v-text-field
                        v-model="street"
                        :rules="notEmptyRules"
                        label="Улица"
                        required
                        validate-on-blur
                    ></v-text-field>
                    <v-text-field
                        v-model="home"
                        :rules="notEmptyRules"
                        label="Дом"
                        required
                        validate-on-blur
                    ></v-text-field>
                    <v-text-field
                        v-model="apartment"
                        :rules="notEmptyRules"
                        label="Квартира"
                        required
                        validate-on-blur
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around align-center pb-3">
                <v-btn large @click="submit">
                    <v-icon left>
                        apartment
                    </v-icon>
                    <span>
                        добавляй
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
export default {
    data(){
        return {
            title: '',
            description: '',
            descriptionMaxLength: 200,
            price: '',
            priceInt: 0,
            street: '',
            home: '',
            apartment: '',
            imageList: [],
            notEmptyRules: [
                v => !!v || "Поле обязательна для заполнения",
            ],
            moreOrLessRules: [
                v => v.split(/\s/).length <= this.descriptionMaxLength || `не более ${this.descriptionMaxLength} слов`,
                v => !!v || "Поле обязательна для заполнения",
            ],
            isIntegerRules: [
                v => !!v || "Поле обязательна для заполнения",
                v => v === parseInt(v).toString() || "Цена должно быть целым числом",
            ]
        }
    },
    methods: {
        submit(){
            if ( !(this.$refs.form.validate()) || this.imageList.length === 0 ) {
                return
            }

            this.sendData()
        },
        onFileChangeForPreview(file) {
            if(!file) {
                return
            }
            const img = {
                name: file.name,
                size: file.size,
                mod: file.lastModified,
                file,
            }

            const reader = new FileReader();

            reader.onload = () => {
                img.url = reader.result
                this.imageList.push(img)
            }

            reader.readAsDataURL(file)
        },
        deleteImg(ind) {
            this.imageList.splice(ind, 1)
        },
        sendData(){
            const form = new FormData()
            form.append('title', this.title)
            form.append('description', this.description)
            form.append('price', this.priceInt)
            form.append('street', this.street)
            form.append('home', this.home)
            form.append('apartment', this.apartment)
            this.imageList.forEach(img => {
                form.append('image', img.file)
            })
            

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