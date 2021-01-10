<template>
    <v-container class="mt-16">
        <v-card elevation="4" shaped outlined max-width="800px"
                class="pa-6 mx-auto accent">
            <v-card-title >
                <div class="mx-auto white--text text-h4">
                    {{apartments[0].title}}
                </div>
            </v-card-title>
            
        </v-card>
    </v-container>
</template>


<script>
const apartments = [
    {
        title: 'title1',
        images: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.82IF_H5GwzuSS3dfslXBvQHaDH%26pid%3DApi&f=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eApH4qt14tLPes-6s4wL2AHaE7%26pid%3DApi&f=1",
        ],
        description: 'description1',
        price: 1,
        street: 'street1',
        home: 'home1',
        apartment: 'apartment1',
        owner: {
            name: 'owner1',
        },
    },
    {
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
    }
}
</script>