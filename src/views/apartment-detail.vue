<template>
    <v-container>
        <apartment-card  v-if="apartment" v-bind="apartment" full
            :getUser="getUser"
        >
            <template #expansion v-if="isAuth">
                <user-expansion-body
                    v-bind="user" :forclick="getUser"
                ></user-expansion-body>
            </template>
        </apartment-card>
    </v-container>
</template>

<script>
import ApartmentCard from "@/components/apartment-card.vue"
import UserExpansionBody from "@/components/card/user-expansion-body.vue"
import {mapGetters, mapActions} from 'vuex'

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
    computed:{
        ...mapGetters('auth', ['isAuth']),
        ...mapGetters(['apartments']),
        apartment() {
            return this.apartmentById()(this.id)
        }
    },
    methods: {
        ...mapGetters(['apartmentById']),
        ...mapActions(['getUserPromiseById']),
        getUser() {
            if(!this.toFetch) {
                return
            }

            this.getUserPromiseById(this.apartment.user_id)
                    .then(user => {
                        this.user = user
                        this.toFetch = false
                    })
                    .catch(err=> console.log(err))
                
                return 
        }
    },
    created(){
        
    },
    data() {
        return {
            user: {},
            toFetch: true,
        }
    },
    watch: {
        apartment(){
            this.apartment = this.apartmentById()(this.id)
        },
        id(newId){
            this.apartment = this.apartmentById()(newId)
            this.toFetch = true
            this.user = {}
        },
    }
}
</script>