<template>
    <v-container>
        <v-card elevation="4" outlined max-width="600px"
                class="pa-6 mt-16 mx-auto accent"
        >
            <v-card-title >
                <div class="mx-auto white--text text-h4">
                    {{ apartment.title}}
                </div>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                    >
                        <v-carousel-item
                        v-for="(href, ind, nbr) in apartment.images"
                        :key="href + ind + nbr"
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                                >
                                <v-img max-width="800"
                                    :src="href"
                                    ></v-img>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-row>

                <v-row>
                    <v-divider class="my-8 white"></v-divider>
                </v-row>

                <v-row>
                    <v-col>
                        <div class="white--text text-subheading-1 text-center">
                            Описание
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-card class="col-12">
                        <v-card-text class="text-body-1">
                                {{ apartment.description}}
                        </v-card-text>
                    </v-card>
                </v-row>

                <v-row>
                    <v-divider class="my-8 white"></v-divider>
                </v-row>

                <v-row>
                    <v-col>
                        <div class="white--text text-subheading-1 text-center">
                            Адрес:
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-card class="col-12">
                        <v-card-text class="text-body-1">
                            {{ apartment.street}} {{ apartment.home}} {{ apartment.apartment}}
                        </v-card-text>
                    </v-card>
                </v-row>

                <v-row>
                    <v-divider class="my-8 white"></v-divider>
                </v-row>

                <v-row class="d-flex justify-space-between">
                        <div class="white--text text-subheading-1 text-center">
                            Цена:
                        </div>
                        <div class="white--text text-subheading-1 text-center">
                            {{apartment.price}} теңге
                        </div>
                </v-row>

                <v-row>
                    <v-divider class="my-8 white"></v-divider>
                </v-row>

                <v-expansion-panels flat>
                    <v-expansion-panel>
                        <v-expansion-panel-content color="accent">
                            <v-row class="d-flex justify-space-between mb-3">
                                    <v-col class="col-6 col-md-8 white--text text-h6">
                                        Имя владельца:
                                    </v-col>
                                    <v-col class="col-6 col-md-4 white--text text-h6">
                                        {{username}}
                                    </v-col>
                            </v-row>
                            <v-row class="d-flex justify-space-between mb-3">
                                    <v-col class="col-6 col-md-8 white--text text-h6">
                                        Номер телефона:
                                    </v-col>
                                    <v-col class="col-6 col-md-4 white--text text-h6">
                                        {{userphone}}
                                    </v-col>
                            </v-row>
                            <v-row class="d-flex justify-space-between mb-3">
                                    <v-col class="col-6 col-md-8 white--text text-h6">
                                        Э-почта:
                                    </v-col>
                                    <v-col class="col-6 col-md-4 white--text text-h6">
                                        {{useremail}}
                                    </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                        <v-expansion-panel-header color="accent" disable-icon-rotate>
                            <v-row>
                                <v-col>
                                    <v-btn block>
                                        <div class="text-button text-center">
                                            Подробнее о хозяине
                                        </div>
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <template v-slot:actions>
                                <v-icon color="white">
                                mdi-alert-circle
                                </v-icon>
                            </template>
                        </v-expansion-panel-header>
                    </v-expansion-panel>
                </v-expansion-panels>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import {apartments} from './apartments-list'
export default {
    props: {
        id: {
            // type: Number,
            required: true,
        },
    },
    created(){
        this.initializeApartment(this.id)
    },
    data() {
        return {
            apartment: null,
            apartments,
            username:"username",
            useremail:"email",
            userphone: "phone",
        }
    },
    methods:{
        initializeApartment() {
            this.apartment = this.apartments.find(el => el.id.toString() === this.id.toString())

            if(!this.apartment) {
                this.$router.push({name: '404-not-found'})
            }
        },
    },
    watch: {
        id(newId){
            this.initializeApartment(newId)
        }
    }
}
</script>