<template>
    <v-col class="d-flex flex-column align-center justify-space-between">
        <div class="text-h6 mb-6">
        {{question}}
        </div>
        <v-btn color="success" large router :to="to">
        <v-icon
            left
            color="white"
        >
            {{icon}}
        </v-icon>
        <div class="white--text">
            {{text}}
        </div>
        </v-btn>
    </v-col>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        question:{
            type: String,
            required: true,
        },
        to: {
            type: Object,
            required: true,
        },
    }
}
</script>