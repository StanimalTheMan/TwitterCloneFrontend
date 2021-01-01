<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <nav-bar></nav-bar>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
