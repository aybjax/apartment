<template>
    <v-btn color="primary" depressed @click="fnx">
        <v-icon :large="!name" :small="!!name">
            {{icon}}
        </v-icon>
        {{name}}
    </v-btn>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: '',
        },
        fnx: {
            type: Function,
            required: true,
        },
    }
}
</script>