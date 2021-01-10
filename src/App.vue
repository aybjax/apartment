<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-title>
          <v-app-bar-nav-icon>
            <v-icon large>
              home
            </v-icon>
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
