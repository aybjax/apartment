<template>
<div>
    <v-container v-if="apartments.length > 0">
        <apartment-card v-for="apartment in apartments" :key="apartment.id"
            v-bind="apartment"
        ></apartment-card>
    </v-container>

    <v-container v-else>
        <v-alert type="error">
            No apartments available
        </v-alert>
    </v-container>
</div>
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
    watch: {
        // userId(newId){
        //     this.apartments = this.apartmentsList()(newId)
        // },
    },
    computed: {
        ...mapGetters(['apartments'])
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