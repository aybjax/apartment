<template>
    <v-card
            :height="width"
            :width="width"
            class="secondary d-flex flex-column pa-2"
        >
        <v-img :max-height="width-60" :max-width="width"
            :src="img.url"
        >
        </v-img>
        <v-card-actions class="mt-auto">
            <v-container fluid :class="['d-flex',
                                        {'justify-space-between': !!closeOverlay},
                                        {'justify-center': !closeOverlay},
                                        'pa-0']">
                <v-btn v-if="closeOverlay"
                    color="success"
                    @click="closeOverlay"
                >
                    <v-icon small left>
                        thumb_up
                    </v-icon>
                    Нравиться
                </v-btn>

                <v-btn
                    color="error"
                    @click="cancelImage"
                >
                    {{!!closeOverlay ? 'убрать' : ''}}
                    <v-icon :small="!!closeOverlay" :large="!closeOverlay"
                        :right="!!closeOverlay">
                        delete_forever
                    </v-icon>
                </v-btn>

            </v-container>
        </v-card-actions>
    </v-card>
</template>

<script>

export default {
    props: {
        img:{required: true},
        cancelImage:{required: true},
        closeOverlay:{default: null},
        width:{required: true}
    }
}
</script>