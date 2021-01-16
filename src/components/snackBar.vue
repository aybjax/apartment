<template>
    <v-snackbar v-model="show">
        {{title}}
        <template v-slot:action="{ attrs }">
            <v-btn
                color="pink"
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
        title: {
            type: String,
            required: true,
        },
        route: {
            default: null
        },
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
                   if( this.route ) {
                        this.$router.push(this.route)
                   }
                }, 1000)
            }
        }
       
    }
}
</script>