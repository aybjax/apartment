<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-title>
          <v-app-bar-nav-icon>
            <v-btn small fab color="primary" depressed
              router :to="{name:'landing-page'}"
            >
              <v-icon large>
                home
              </v-icon>
            </v-btn>
          </v-app-bar-nav-icon>
        </v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <transition name="route" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
    
    <v-footer color="primary" class="justify-center mt-10">
      <v-spacer></v-spacer>
      <v-col
        class="text-center"
        cols="12"
      >
        <div class="white--text text-h6"> Develop with &copy;aybjax</div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
