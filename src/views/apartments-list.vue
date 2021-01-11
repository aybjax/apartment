<template>
    <v-container>
        <v-card elevation="4" outlined max-width="600px"
                class="pa-6 mt-16 mx-auto accent"
            v-for="apartment in apartments" :key="apartment.id"
        >
            <v-card-title >
                <div class="mx-auto white--text text-h4">
                    {{apartment.title}}
                </div>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                    >
                        <v-carousel-item
                        v-for="(href, ind, nbr) in apartment.images"
                        :key="href + ind + nbr"
                        >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                                >
                                <v-img max-width="800"
                                    :src="href"
                                    ></v-img>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-row>

                <v-row>
                    <v-divider class="my-8 white"></v-divider>
                </v-row>

                <v-row>
                    <div class="overflow-hide text-body-1 white--text text-truncate">
                        {{apartment.description}}
                    </div>
                </v-row>

                <v-row>
                    <v-divider class="my-8 white"></v-divider>
                </v-row>

                <v-row>
                    <v-col>
                        <div class="white--text text-subheading-1">
                            Адрес:
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col offset="1">
                        <div class="white--text text-body-1">
                            {{apartment.street}} {{apartment.home}}
                        </div>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn block router :to="{name:'apartment-detail', params:{id:apartment.id}}">
                            <div class="text-button">
                                Посмотреть подробнее
                            </div>
                        </v-btn>
                    </v-col>
                </v-row>
                
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script>
const apartments = [
    {
        id: 1,
        title: 'title1',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 ',
        price: 1,
        street: 'street1',
        home: 'home1',
        apartment: 'apartment1',
        owner: {
            name: 'owner1',
        },
    },
    {
        id: 2,
        title: 'title2',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description2',
        price: 2,
        street: 'street2',
        home: 'home2',
        apartment: 'apartment2',
        owner: {
            name: 'owner2',
        },
    },
    {
        id: 3,
        title: 'title3',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description3',
        price: 3,
        street: 'street3',
        home: 'home3',
        apartment: 'apartment3',
        owner: {
            name: 'owner3',
        },
    },
    {
        id: 4,
        title: 'title4',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description4',
        price: 4,
        street: 'street4',
        home: 'home4',
        apartment: 'apartment4',
        owner: {
            name: 'owner4',
        },
    },
    {
        id: 5,
        title: 'title5',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description5',
        price: 5,
        street: 'street5',
        home: 'home5',
        apartment: 'apartment5',
        owner: {
            name: 'owner5',
        },
    },
    {
        id: 6,
        title: 'title6',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description6',
        price: 6,
        street: 'street6',
        home: 'home6',
        apartment: 'apartment6',
        owner: {
            name: 'owner6',
        },
    },
]

export default {
    data(){
        return {
            apartments,
        }
    },
}

export {apartments}
</script>

<style scoped>
div.overflow-hide {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>