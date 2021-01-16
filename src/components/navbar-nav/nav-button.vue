<template>
    <div class="d-flex align-center">
        <v-app-bar-title>
            <!-- <v-app-bar-nav-icon v-if="!name"> -->
                <v-btn v-if="!name" small fab color="primary" depressed
                    router :to="to"
                >
                    <v-icon large>
                        {{icon}}
                    </v-icon>
                </v-btn>
            <!-- </v-app-bar-nav-icon> -->
            <v-btn v-else x-large color="primary" depressed
                    router :to="to" class="d-flex justify-space-between"
                >
                <v-icon small>
                    {{icon}}
                </v-icon>
                {{name}}
            </v-btn>
        </v-app-bar-title>
    </div>
</template>

<script>
export default {
    props: {
        'icon': {
            type: String,
            required: true,
        },
        'to': {
            type: Object,
            required: false,
        },
        'name': {
            type: String,
            default: '',
        },
    }
}
</script>