<template>
    <v-expansion-panel>
        <v-expansion-panel-content color="accent">
            <v-row class="d-flex justify-space-between mb-3">
                    <v-col class="col-6 col-md-8 white--text text-h6">
                        Имя владельца:
                    </v-col>
                    <v-col class="col-6 col-md-4 white--text text-h6">
                        {{username}}
                    </v-col>
            </v-row>
            <v-row class="d-flex justify-space-between mb-3">
                    <v-col class="col-6 col-md-8 white--text text-h6">
                        Номер телефона:
                    </v-col>
                    <v-col class="col-6 col-md-4 white--text text-h6">
                        {{phone}}
                    </v-col>
            </v-row>
            <v-row class="d-flex justify-space-between mb-3">
                    <v-col class="col-6 col-md-8 white--text text-h6">
                        Э-почта:
                    </v-col>
                    <v-col class="col-6 col-md-4 white--text text-h6">
                        {{email}}
                    </v-col>
            </v-row>
        </v-expansion-panel-content>
        <v-expansion-panel-header color="accent" disable-icon-rotate @click="forclick">
            <v-row>
                <v-col>
                    <v-btn block>
                        <div class="text-button text-center">
                            Подробнее о хозяине
                        </div>
                    </v-btn>
                </v-col>
            </v-row>
            <template v-slot:actions>
                <v-icon color="white">
                mdi-alert-circle
                </v-icon>
            </template>
        </v-expansion-panel-header>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        username: String,
        phone: String,
        email: String,
        forclick: {
            type: Function,
            default: ()=>{}
        }
    },
}
</script>