<template>
  <v-main>
    <v-app-bar
      color="primary"
      dense
      dark
      app
    >
      <v-toolbar-title>App name</v-toolbar-title>
    </v-app-bar>
    <router-view/>
  </v-main>
</template>

<script>

export default {
  name: 'HomeView',

  components: {
  }
}
</script>
