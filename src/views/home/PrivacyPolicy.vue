<template>
  <div class="privacy-policy pt-16">
    <v-col md="8" class="mx-auto" sm="11">
      <h1 class="text-center">
        {{ appName }} Privacy Policy and data management information
      </h1>
      <p>
        Using {{ appName }}'s official website
        <b
          ><a :href="`https://${baseUrl}`">{{ baseUrl }} </a></b
        >
        , you can always be sure that all data provided during the registration
        of a personal account, as well as any information that can be
        transmitted directly in the process of cooperation, is always completely
        safe and inaccessible to third parties. in other words,
        {{ appName }} would never sell your personal information to any firm for
        purpose of gaining either in services or cash. protocol.
      </p>
      <p>
        Also, for the smooth functioning of all the site systems and its
        databases and regardless of circumstances (in particular, regardless of
        DDoS attacks), the company {{ appName }} placed all the site systems and
        databases on secure hosting.
      </p>
      <p>
        We also use “cookies” (small text files sent by your computer each time
        you visit our website, unique to your {{ appName }} account or your
        browser) or similar technologies to get log data. When we use cookies or
        other similar technologies, we use session cookies (that last until you
        close your browser) or persistent cookies (that last until you or your
        browser delete them).
      </p>
      <p>
        The company warns that with the proven fact of the occurrence of
        criminal liability, we will cooperate with law enforcement agencies to
        disclose and suppress further offenses, even if this requires the
        disclosure of the personal data of this person.
      </p>
      <p>
        In all any other cases, the disclosure of personal data to third parties
        will not be provided under any circumstances.
      </p>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "PrivacyPolicy",
  computed: {
    appName() {
      return this.$store.state.app.appName;
    },
    baseUrl() {
      return this.$store.state.app.baseUrl;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.privacy-policy {
  background: $secondary-background;
  color: $primary-font-color;
  min-height: 100vh;
  height: 100%;
  h1 {
    color: $gold-text;
    font-weight: bold;
    font-size: 2em;
    text-transform: uppercase;
  }
}
</style>
