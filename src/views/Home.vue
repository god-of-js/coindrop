<template>
  <main class="home">
    <top-nav />
    <responsive-side-bar v-if="sideBarStatus" />
    <router-view />
  </main>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav";
import ResponsiveSideBar from "../components/home/ResponsiveSideBar.vue";
export default {
  name: "Home",
  components: {
    TopNav,
    ResponsiveSideBar
  },
  computed: {
    sideBarStatus() {
      return this.$store.state.app.sidebar;
    }
  }
};
</script>
