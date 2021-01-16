<template>
    <v-row>
        <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        >
            <v-carousel-item
            v-for="({path}, ind, nbr) in images"
            :key="path + ind + nbr"
            >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <v-img max-width="800"
                        :src="path"
                        ></v-img>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-row>
</template>

<script>
export default {
    props: [
        'images',
    ],
}
</script>