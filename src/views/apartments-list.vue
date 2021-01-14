<template>
    <v-container>
        <apartment-card v-for="apartment in apartments" :key="apartment.id"
            v-bind="apartment"
        ></apartment-card>
    </v-container>
</template>
<script>
import ApartmentCard from "@/components/apartment-card.vue"
import {mapGetters} from 'vuex'

export default {
    components: {
       ApartmentCard,
    },
    props: {
        userId: {
            default: null,
        }
    },
    data(){
        return {
            apartments: [],
        }
    },
    methods: {
        ...mapGetters({
            apartmentsList: 'apartments',
        })
    },
    created(){
        this.apartments = this.apartmentsList()(this.userId)
    },
    watch: {
        userId(newId){
            this.apartments = this.apartmentsList()(newId)
        },
    },
}

</script>

<style scoped>
div.overflow-hide {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>