<template>
    <v-container>
        <apartment-card v-for="apartment in apartments" :key="apartment.id"
            v-bind="apartment"
        ></apartment-card>
    </v-container>
</template>


<script>
import apartments from "@/store/mock"
import ApartmentCard from "@/components/apartment-card.vue"

export default {
    components: {
       ApartmentCard,
    },
    data(){
        return {
            apartments,
        }
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