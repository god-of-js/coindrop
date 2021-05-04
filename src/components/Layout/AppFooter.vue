<template>
  <footer class="d-flex pa-5">
    <v-row class="pa-0 ma-0">
      <v-col md="3" sm="12">
        <router-link to="/">
          <h1 v-text="appName" class="app-name pa-0 ma-0"
        /></router-link>
        <span class="copyright"
          >&copy; 2018 - {{ checkYear() }} {{ baseUrl }}. All rights
          reserved.</span
        >
        <div class="copy-content pt-5">
          <a :href="`mailto:${support}`">{{ support }}</a>
        </div>
      </v-col>
      <v-col md="2" sm="12" class="services">
        <b>Services</b>
        <ul>
          <li>SafeMoon Pool</li>
        </ul>
      </v-col>
      <v-col md="2" sm="12" class="company">
        <b>Company</b>
        <ul>
          <li>
            <router-link to="/about" id="link">About</router-link>
          </li>
          <li>
            <router-link to="/why-us" id="link">Why Us</router-link>
          </li>
          <li>
            <router-link to="/privacy-policy" id="link"
              >Privacy Policy</router-link
            >
          </li>
          <!-- <li>
            <router-link to="/terms" id="link"
              >Terms and conditions</router-link
            >
          </li> -->
        </ul>
      </v-col>
      <v-col md="2" sm="6" class="contact">
        <b>Contact</b>
        <ul>
          <li>
            <router-link to="/contact" id="link">Contact</router-link>
          </li>
          <!-- <li>
            <router-link to="/faqs" id="link">Contact sales</router-link>
          </li> -->
          <li>
            <router-link to="/faqs" id="link">FAQ's</router-link>
          </li>
        </ul>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
import copyMixin from "@/mixins/copyToClipboard.js";
export default {
  name: "AppFooter",
  mixins: [copyMixin],
  data: () => {
    return {
      support: "support@coindrop.live"
    };
  },
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
    baseUrl() {
      return this.$store.state.app.baseUrl;
    }
  },
  methods: {
    checkYear() {
      const date = new Date();
      return date.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
footer {
  background: $primary-dark-color;
  min-height: 40vh;
  margin-bottom: 0;
  .app-name {
    color: $gold-text;
  }
  .copyright {
    color: $border-color;
    font-size: 0.8em;
  }
  .copy-content {
    color: $border-color;
    font-size: 1em;
    #copy-item {
      border: 2px solid $border-color;
      padding: 3px 6px;
      border-radius: 5px;
    }
    button {
      font-size: 1.5em;
      outline: none;
    }
  }
  b {
    color: $gold-text;
    font-size: 1em;
  }
  ul {
    padding: 0px;
    margin: 0px;
    li {
      list-style: none;
      color: $dark-ash-text;
      font-size: 0.9em;
      margin: 7px 0px;
      #link {
        color: $dark-ash-text;
      }
    }
  }
}
</style>
