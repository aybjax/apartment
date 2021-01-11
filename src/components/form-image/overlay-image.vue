<template>
    <v-overlay
            :value="imageOverlay"
        >
        <image-card
            v-if="!!img" :img="img" :cancelImage="cancelImage"
            :closeOverlay="closeOverlay"
            :width="400"
        ></image-card>
    </v-overlay>
</template>

<script>
import ImageCard from './image-card'
export default {
    components: {
        ImageCard,
    },
    props: {
        imageOverlay:{
            required: true,
            type: Boolean,
        },
        img:{required: true},
        cancelImage:{required: true},
        closeOverlay:{required: true},
        width:{required: true}
    }
}
</script>