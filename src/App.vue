<template>
  <v-app>
    <v-main
      class="full-height"
    >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
<style>

  .v-card.theme--light,
  .v-application.theme--light,
  .v-card.theme--light,
  .theme--light.v-list
  {
    background-color: var(--v-background-base) !important;
  }
</style>
