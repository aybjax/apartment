<template>
    <v-card elevation="4" outlined max-width="600px" class="pa-6 mt-16 mx-auto accent">
        <v-card-title>
            <div class="mx-auto white--text text-h4">
                {{title}}
            </div>
        </v-card-title>

        <v-card-text>
            <image-carousel :images="images"></image-carousel>

                                    <horizontal-line></horizontal-line>

            <card-or-col :full="full" :text="description" truncate>
                Описание
            </card-or-col>

                                    <horizontal-line></horizontal-line>

            <card-or-col :full="full" :text="address" :truncate="false">
                Адрес
            </card-or-col>

                                    <horizontal-line v-if="full"></horizontal-line>

            <v-row v-if="!full" class="mt-4">
                <v-btn block router :to="detailPage">
                    <div class="text-button text-center">
                        Посмотреть подробнее
                    </div>
                </v-btn>
            </v-row>

            <v-row v-else class="d-flex justify-space-between">
                    <div class="white--text text-subheading-1 text-center">
                        Цена:
                    </div>
                    <div class="white--text text-subheading-1 text-center">
                        {{price}} теңге
                    </div>
            </v-row>

                                    <horizontal-line v-if="full"></horizontal-line>

            <v-expansion-panels flat v-if="full && $slots.expansion">
                <slot name="expansion"></slot>
            </v-expansion-panels>
            
        </v-card-text>
    </v-card>
</template>

<script>
import HorizontalLine from "./card/horizontal-line.vue"
import CardOrCol from "./card/card-or-col.vue"
import ImageCarousel from "./card/image-carousel.vue"

export default {
    components: {
        HorizontalLine,
        CardOrCol,
        ImageCarousel,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
        },
        description: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        home: {
            type: String,
            required: true,
        },
        apartment: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
        },
        full: {
            type: Boolean,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    computed: {
        address(){
            if(this.full) {
                return this.street + " " + this.home + " кв " + this.apartment
            }

            return this.street + " " + this.home
        },
        detailPage(){
            return {name:'apartment-detail', params:{id: this.id}}
        }
    }
}
</script>