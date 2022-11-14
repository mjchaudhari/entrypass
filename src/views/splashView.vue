<template>
  <v-container class="fill-height">
    <v-row class="text-center ">
      <v-col
        cols="12"
        class="d-flex justify-center align-center"
      >
        Loading....
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SplashView',

  data: () => ({

  }),
  mounted () {
    this.$router.push({ name: 'Login' })
  }
}
</script>
