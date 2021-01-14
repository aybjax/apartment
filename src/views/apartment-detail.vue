<template>
    <v-container>
        <apartment-card  v-if="apartment" v-bind="apartment" full
        >
            <template #expansion>
                <user-expansion-body
                    v-bind="user"
                ></user-expansion-body>
            </template>
        </apartment-card>
    </v-container>
</template>

<script>
import ApartmentCard from "@/components/apartment-card.vue"
import UserExpansionBody from "@/components/card/user-expansion-body.vue"
import {mapGetters} from 'vuex'

export default {
    components: {
        ApartmentCard,
        UserExpansionBody
    },
    props: {
        id: {
            required: true,
        },
    },
    methods: {
        ...mapGetters(['apartmentById'])
    },
    created(){
        this.apartment = this.apartmentById()(this.id)
    },
    data() {
        return {
            apartment: {},
        }
    },
    watch: {
        id(newId){
            this.apartment = this.apartmentById()(newId)
        }
    }
}
</script>