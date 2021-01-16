<template>
    <v-snackbar v-model="show" :color="snackColor">
        {{snackTitle}}
        <template v-slot:action="{ attrs }">
            <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="close"
            >
                <v-icon large>close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        snackTitle: {
            type: String,
            required: true,
        },
        snackRoute: {
            default: null
        },
        snackRouteMethod: {
            default: 'replace'
        },
        snackColor: {
            type: String,
            default: 'deep-purple accent-4'
        }
    },
    emits: ['close-snackbar'],
    methods: {
        close(){
            this.$emit('close-snackbar')
        },
    },
    watch: {
        show(val) {
             if(val === true) {
                const to = setTimeout(()=>{
                    this.$emit('close-snackbar')
                    clearTimeout(to)
                   if( this.snackRoute ) {
                        this.$router[this.snackRouteMethod](this.snackRoute)
                   }
                }, 1000)
            }
        }
       
    }
}
</script>