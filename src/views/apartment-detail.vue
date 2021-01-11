<template>
    <v-container>
        <apartment-card  v-if="apartment" v-bind="apartment" :full="true"
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
import apartments from '@/store/mock'
import ApartmentCard from "@/components/apartment-card.vue"
import UserExpansionBody from "@/components/card/user-expansion-body.vue"

export default {
    components: {
        ApartmentCard,
        UserExpansionBody
    },
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
            apartment: {},
            apartments,
            user: {
                username:"username",
                email:"email",
                phone: "phone",
            },
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