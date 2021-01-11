<template>
    <div>
        <v-row v-if="!truncate || full">
            <v-col>
                <div :class="['white--text', 'text-subheading-1', {'text-center': full}]">
                    <slot></slot>
                </div>
            </v-col>
        </v-row>

        <v-row v-if="full">
            <v-card class="col-12">
                <v-card-text class="text-body-1">
                    {{text}}
                </v-card-text>
            </v-card>
        </v-row>

        <v-row v-else>
            <v-col :offset="offset">
                <div :class="['text-body-1', 'white--text',
                    {'text-truncate': truncate}, {'overflow-hide':truncate}]"
                >
                    {{text}}
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: [
        "full", "text", "truncate"
    ],
    computed: {
        offset(){
            if(this.truncate) {
                return 0
            }

            return 1
        }
    }
}
</script>