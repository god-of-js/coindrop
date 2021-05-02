<template>
  <div class="settings">
    <header class="pa-3 mt-3">
      <h1>Verify Account</h1>
    </header>
    <div class="settings-body mt-3 pa-4 mb-3">
      <h3>Update Profile</h3>
      <v-col cols="12" sm="12" md="5" lg="5" class="pa-0">
        <custom-avatar
          class="mb-3 mx-auto"
          @recieveImage="e => (data.avatar = e)"
          @photoUrl="e => (avatarUrl = e)"
          :avatar="avatar"
        />
        <form @submit.prevent="updateProfile">
          <custom-input
            :label="'Full Name'"
            :placeholder="user.fullName"
            @data="e => (data.fullName = e)"
          />
          <custom-input
            :label="'Email Address'"
            :disabled="true"
            :placeholder="user.email"
          />
          <custom-input
            :label="'SSN'"
            @data="e => (data.SSN = e)"
            :placeholder="user.ssn"
          />
          <custom-input
            :label="'Date Of Birth'"
            :inputType="'date'"
            @data="e => (data.dateOfBirth = e)"
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
          <custom-input
            :label="'Address'"
            @data="e => (data.address = e)"
            :placeholder="user.address"
          />
          <custom-button class="mt-4" :loading="loading"
            >Verify Account</custom-button
          >
        </form></v-col
      >
    </div>
  </div>
</template>

<script>
import uploadImage from "@/mixins/uploadImage.js";
import CustomAvatar from "@/components/custom-components/CustomAvatar.vue";
export default {
  mixins: [uploadImage],
  data: () => {
    return {
      data: {
        country: null,
        state: null,
        fullName: null,
        SSN: null,
        dateOfBirth: null,
        address: null,
        avatar: null
      },
      loading: false,
      avatarUrl: null
    };
  },
  computed: {
    countries() {
      return this.$store.state.app.countries;
    },
    cities() {
      const country = this.countries.find(
        country => country.country === this.data.country
      );
      if (country) return country.cities;
      else return ["Select country first"];
    },
    user() {
      return this.$store.state.user.user;
    },
    avatar() {
      return this.avatarUrl || this.user.avatar;
    }
  },
  mounted() {
    this.$store.dispatch("user/getUserProfile");
    this.$store.dispatch("app/getCountries");
  },
  components: {
    CustomAvatar
  },
  methods: {
    async updateProfile() {
      try {
        this.loading = true;
        if (!this.data.avatar && !this.user.avatar)
          throw new Error("Provide a selfie image of yourself.");
        if (!this.data.dateOfBirth && !this.user.dateOfBirth)
          throw new Error("Provide your date of birth.");
        if (!this.data.fullName && !this.user.fullName)
          throw new Error("Provide your full name.");
        if (!this.data.country && !this.user.country)
          throw new Error("Provide your full name.");
        if (!this.data.state && !this.user.state)
          throw new Error("Provide your state of origin.");
        if (!this.data.address && !this.user.address)
          throw new Error("Provide your state of origin.");
        if (this.data.avatar) {
          this.data.avatar = await this.uploadImage(this.data.avatar);
        }
        console.log(this.data);
        await this.$store.dispatch("user/updateUserProfile", this.data);
        this.loading = false;
      } catch (err) {
        this.$notification.error({
          message: "Error",
          description: err.message
        });
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
@import "@/assets/styles/mixins.scss";
.settings {
  &-body,
  header {
    background: $primary-white;
    @include box-shadow();
  }
}
</style>
