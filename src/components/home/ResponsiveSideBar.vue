<template>
  <nav>
    <div class="d-flex justify-space-between pa-3">
      <span v-text="appName" />
      <button @click="closeModal">
        <v-icon color="rgb(220, 20, 60)">mdi-close</v-icon>
      </button>
    </div>
    <ul class="pt-4">
      <li @click="closeModal">
        <router-link to="/about" class="route-link pa-2">About</router-link>
      </li>
      <li @click="closeModal">
        <router-link to="/faqs" class="route-link pa-2">FAQ's</router-link>
      </li>
      <li @click="closeModal">
        <router-link to="/contact" class="route-link pa-2"
          >Contact Us</router-link
        >
      </li>
      <li @click="closeModal">
        <router-link to="/dashboard" class="route-link pa-2"
          >Mine Crypto</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("app/sideBarStatus", false);
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 101;
  span {
    font-weight: bold;
    font-size: 1em;
  }
  li {
    list-style-type: none;
    .route-link {
      display: block;
    }
  }
}
</style>
