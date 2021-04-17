<template>
  <v-app class="red">
    <router-view />
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppFooter: () => import("./components/Layout/AppFooter")
  },

  data: () => ({
    //
  })
};
</script>
