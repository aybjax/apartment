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
                        prepend-icon="photo_library"
                        v-if="imageList.length < 4"
                        :rules="[additionalValidation]"
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
                        counter
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

        <overlay-image :img="img" :imageOverlay="imageOverlay" :width="400"
            :cancelImage="cancelImage" :closeOverlay="closeOverlay"
        ></overlay-image>
    </v-container>
</template>

<script>
import FormMixin from '@/mixins/form'
import ImageFieldMixin from '@/mixins/imageField'
import OverlayImage from '@/components/form-image/overlay-image'

export default {
    mixins: [
        FormMixin, ImageFieldMixin
    ],
    components: {
        OverlayImage
    },
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
            url: 'http://localhost/api/register-apartment',
        }
    },
    methods: {
        prepareForm(){
            this.form = new FormData()
            this.form.append('title', this.title)
            this.form.append('description', this.description)
            this.form.append('price', this.priceInt)
            this.form.append('street', this.street)
            this.form.append('home', this.home)
            this.form.append('apartment', this.apartment)
            this.imageList.forEach(img => {
                this.form.append('image[]', img.file)
            })
        },
        additionalValidation(){
            if (this.imageList.length !== 0) {
                return true
            }

            return "pick and image"
        }
    }
}
</script>