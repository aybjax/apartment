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
        <v-divider class="white my-6">
        </v-divider>
        <v-row class="pa-4">
            <landing-links v-if="!isAuth" question="Уже зарегистрированы?"
              icon="login" text="Зайти" :to="{name: 'login-page'}"></landing-links>

            <landing-links v-if="!isAuth" question="Нет аккаунта?"
              icon="control_point" text="регистрироваться" :to="{name: 'register-page'}"></landing-links>
            
            <landing-links v-if="isAuth" question="Готов к поиску?"
              icon="location_city" text="Найти квартиру" :to="{name: 'apartments-list'}"></landing-links>

        </v-row>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-img
          max-height="300px"
          max-width="400px"
          :src="require('@/assets/images/landing-image.jpeg')"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LandingLinks from '@/components/app-landing/landing-links'
import {mapGetters} from 'vuex'

export default {
  name: 'app-landing',
  components: {
    LandingLinks
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
  }
}
</script>
