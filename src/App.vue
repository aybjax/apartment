<template>
  <v-app>
    <header-navbar></header-navbar>
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
import HeaderNavbar from '@/components/header-navbar'


export default {
  name: 'App',

  components: {
    HeaderNavbar,
  },

  data: () => ({
    
  }),
};
</script>
