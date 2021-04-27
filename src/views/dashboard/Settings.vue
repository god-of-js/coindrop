<template>
  <div class="settings">
    <header class="pa-3 mt-3">
      <h1>Account Settings</h1>
    </header>
    <div class="settings-body mt-3 pa-4 mb-3">
      <h3>Update Profile</h3>
      <v-col cols="12" sm="12" md="5" lg="5" class="pa-0">
        <custom-avatar class="mb-3 mx-auto" v-if="false" />
        <form @submit.prevent="updateProfile">
          <custom-input
            :label="'Full Name'"
            @data="(e) => (data.fullName = e)"
          />
          <custom-input :label="'Email Address'" :disabled="true" />
          <custom-input :label="'SSN'" @data="(e) => (data.SSN = e)" />
          <custom-input
            :label="'Date Of Birth'"
            :inputType="'date'"
            @data="(e) => (data.dateOfBirth = e)"
          />
          <custom-select
            :label="'Country'"
            :options="countries"
            :objString="'country'"
            :input.sync="data.country"
          />
          <custom-select
            :label="'State'"
            :options="cities"
            :objString="''"
            :input.sync="data.state"
          />
          <custom-input :label="'Address'" @data="(e) => (data.address = e)" />
          <custom-button class="mt-4" :loading="loading">Edit Profile</custom-button>
        </form></v-col
      >
    </div>
  </div>
</template>

<script>
import CustomAvatar from "@/components/custom-components/CustomAvatar.vue";
export default {
  data: () => {
    return {
      data: {
        country: null,
        state: null,
        fullName: null,
        SSN: null,
        dateOfBirth: null,
        address: null,
      },
      loading: false
    };
  },
  computed: {
    countries() {
      return this.$store.state.app.countries;
    },
    cities() {
      const country = this.countries.find(
        (country) => country.country === this.data.country
      );
      if (country) return country.cities;
      else return ["Select country first"];
    },
  },
  mounted() {
    this.$store.dispatch("user/getUserProfile");
    this.$store.dispatch("app/getCountries");
  },
  components: {
    CustomAvatar,
  },
  methods: {
    async updateProfile() {
      this.loading = true;
      await this.$store.dispatch("user/updateUserProfile", this.data);
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.settings {
  header {
    background: $primary-white;
    @include box-shadow();
  }
  &-body {
    background: $primary-white;
    @include box-shadow();
  }
}
</style>
