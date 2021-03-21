<template>
  <main class="home">
    <top-nav />
    <router-view />
  </main>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav";
export default {
  name: "Home",
  components: {
    TopNav
  }
};
</script>
