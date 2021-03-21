<template>
  <nav id="topNav" class="d-flex align-center justify-space-between" ref="nav">
    <span class="nav-name" v-text="appName" />
    <ul class="pa-0 ma-0 d-flex align-center" v-if="!smallDevices">
      <li><router-link to="/about" class="route-link">About</router-link></li>
      <li><router-link to="/about" class="route-link">FAQ's</router-link></li>
      <li>
        <router-link to="/about" class="route-link">Contact Us</router-link>
      </li>
      <li>
        <router-link to="/dashboard"
          ><custom-button>Mine Crypto</custom-button></router-link
        >
      </li>
    </ul>

    <button v-if="smallDevices">
      <v-icon class="icon">mdi-menu</v-icon>
    </button>
  </nav>
</template>

<script>
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
    smallDevices() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  },
  mounted() {
    window.onscroll = () => {
      window.scrollY >= 20
        ? this.$refs.nav.classList.add("fixednav")
        : this.$refs.nav.classList.remove("fixednav");
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
#topNav {
  background-color: $primary-dark-color;
  padding: 15px;
  padding-left: 5%;
  text-align: left;
  .nav-name {
    color: $gold-text;
    font-weight: 900;
    font-size: 1.3em;
    text-transform: uppercase;
  }
  ul {
    li {
      list-style: none;
      margin: 0px 15px;
    }
    .route-link {
      font-size: 1.1em;
    }
  }
  .icon {
    color: $gold-text;
  }
}
.fixednav {
  background: $primary-white !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  height: 80px;
  @include box-shadow();
  color: #000000 !important;
}
::v-deep {
  #btn {
    height: 30px;
    width: 100px;
  }
}
</style>
