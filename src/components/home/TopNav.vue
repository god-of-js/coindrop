<template>
  <nav id="topNav" class="d-flex align-center justify-space-between" ref="nav">
    <router-link to="/">
      <logo class="logo" />
    </router-link>

    <ul class="pa-0 ma-0 d-flex align-center" v-if="!smallDevices">
      <li><router-link to="/about" class="route-link">About</router-link></li>
      <li><router-link to="/faqs" class="route-link">FAQ's</router-link></li>
      <li>
        <router-link to="/contact" class="route-link">Contact Us</router-link>
      </li>
      <li>
        <router-link to="/dashboard"
          ><custom-button>Mine Crypto</custom-button></router-link
        >
      </li>
    </ul>
    <button v-else @click="openSideBar">
      <v-icon class="icon">mdi-menu</v-icon>
    </button>
  </nav>
</template>

<script>
import Logo from "../images/Logo";
export default {
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
    smallDevices() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  },
  components: {
    Logo
  },
  mounted() {
    window.onscroll = () => {
      window.scrollY >= 20
        ? this.$refs.nav.classList.add("fixednav")
        : this.$refs.nav.classList.remove("fixednav");
    };
  },
  methods: {
    openSideBar() {
      this.$store.commit("app/sideBarStatus", true);
      this.$store.commit("modal/setActiveModal", {
        activeModal: "",
        modalIsActive: true,
        commonData: {}
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
@import "../../assets/styles/mixins.scss";
#topNav {
  background-color: transparent;
  padding: 15px;
  padding-left: 5%;
  text-align: left;
  position: fixed;
  left: 0%;
  right: 0;
  z-index: 99;
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
      font-size: 1em;
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
  ::v-deep {
    .turn-black {
      fill: #000000 !important;
    }
  }
}
::v-deep {
  #btn {
    height: 30px;
    width: 100px;
  }
}
</style>
