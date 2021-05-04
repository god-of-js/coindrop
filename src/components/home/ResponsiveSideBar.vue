<template>
  <modal-wrap class="d-flex justify-end">
    <nav>
      <div class="d-flex justify-end pa-3">
        <button @click="closeModal">
          <v-icon color="rgb(220, 20, 60)">mdi-close</v-icon>
        </button>
      </div>
      <ul class="pt-4">
        <li @click="closeModal">
          <router-link to="/about" class="route-link pa-4">About</router-link>
        </li>
        <li @click="closeModal">
          <router-link to="/faqs" class="route-link pa-4">FAQ's</router-link>
        </li>
        <li @click="closeModal">
          <router-link to="/contact" class="route-link pa-4"
            >Contact Us</router-link
          >
        </li>
        <li @click="closeModal">
          <router-link class="route-link pa-4" to="/why-us">Why Us</router-link>
        </li>
        <li @click="closeModal">
          <router-link to="/privacy-policy" class="route-link pa-4"
            >Privacy Policy</router-link
          >
        </li>
        <li @click="closeModal">
          <router-link to="/dashboard" class="route-link pa-4"
            >Mine Crypto</router-link
          >
        </li>
      </ul>
    </nav>
  </modal-wrap>
</template>

<script>
import ModalWrap from "../global-modal/ModalWrap";
export default {
  data: () => {
    return {};
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    }
  },
  components: {
    ModalWrap
  },
  methods: {
    closeModal() {
      this.$store.commit("app/sideBarStatus", false);
      this.$store.commit("modal/setActiveModal", {});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
nav {
  height: 100%;
  width: 70%;
  background: $black-text;
  span {
    font-weight: bold;
    font-size: 1em;
  }
  ul {
    padding: 0px;
    margin: 15px;
  }
  li {
    list-style-type: none;
    border-bottom: 1px solid $dark-ash-text;
    .route-link {
      display: block;
      padding: 5px;
    }
    &:hover {
      background: $primary-dark-color;
    }
  }
}
</style>
