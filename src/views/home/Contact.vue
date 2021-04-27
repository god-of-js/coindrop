<template>
  <div class="contact text-center">
    <form @submit.prevent="sendMessage" class="pa-4 mb-4 text-left">
      <h1 class="text-center">Contact Us</h1>
      <custom-input
        :inputType="'email'"
        :requiredInput="true"
        :label="'Your email'"
      ></custom-input>
      <label for="textarea">Your message</label>
      <textarea name="" id="" cols="30" rows="10" required></textarea>
      <custom-button class="mt-4" :loading="loading"
        >Send Message</custom-button
      >
    </form>
    <b class=""><small>or</small></b>
    <br />
    <a :href="`mailto:support@${baseUrl}`">Mail Support</a>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    baseUrl() {
      return this.$store.state.app.baseUrl.toLowerCase();
    }
  },
  methods: {
    sendMessage() {
      this.$notification.success({
        message: "Success",
        description: "Support would reach out to you as soon as possible"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/sizes.scss";
.contact {
  background: $secondary-background;
  color: $primary-font-color;
  min-height: 100vh;
  height: 100%;
  padding-top: 7%;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: $gold-text;
    font-weight: bold;
    font-size: 1.5em;
    text-transform: uppercase;
  }
  form {
    margin: auto;
    width: 35%;
    background: $primary-white;
    @include box-shadow();
  }
  textarea {
    width: 100%;
    padding: 6px;
    background: $primary-white;
    border-radius: 5px;
    outline: none;
    border: 1px solid $border-color;
    box-sizing: border-box;
    font-size: 0.8em;
  }
  label {
    font-size: 0.7em;
  }
}

@media screen and (max-width: $tablet-small-width) {
  form {
    width: 45% !important;
  }
}
@media screen and (max-width: $mobile) {
  form {
    width: 80% !important;
  }
}
</style>
