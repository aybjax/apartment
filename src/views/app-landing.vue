<template>
  <v-container class="secondary white--text my-16">
    <v-row>
      <v-col class="mt-10 d-flex justify-center">
        <div class="text-h4">
          Найди свою квартиру в любимым городе
        </div>
      </v-col>
    </v-row>
    <v-row class="my-4 pa-4">
      <v-col class="">
        <v-row class="pa-4">
            <div class="text-body-1 text-justify">
              Зарегистрируйся в один клик и найди подходящую квартиру.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi, fugit tenetur magni reprehenderit saepe incidunt cum labore fuga suscipit corrupti rem. Sit ad sint dolorum quasi libero nihil omnis.
            </div>
        </v-row>
        <v-row class="pa-4">
            <v-col class="d-flex justify-center">
              <v-btn color="success" large>
                <v-icon
                  left
                  color="white"
                >
                  login
                </v-icon>
                <div class="white--text">
                  Login
                </div>
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center">
              <v-btn color="success" large>
                <span right class="white--text">
                  Register
                </span>
                <v-icon
                  right
                  color="white"
                >
                  control_point
                </v-icon>
              </v-btn>
            </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-img
          max-height="250px"
          max-width="300px"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
    </v-row>
        <!-- <v-card>
          <v-card-content>
              
          </v-card-content>
        </v-card> -->
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'app-landing',
  components: {
  }
}
</script>
