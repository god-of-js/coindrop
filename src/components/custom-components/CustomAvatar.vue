<template>
  <div class="custom-avatar d-flex flex-column align-center">
    <v-avatar :class="[avatar ? '': 'icon-container', 'mb-4']">
      <img src="" alt="" v-if="avatar"/>
      <v-icon v-else color="#707A8A">mdi-account</v-icon>
    </v-avatar>
    <!-- <br> -->
    <custom-button>Change Profile Photo</custom-button>
  </div>
</template>

<script>
export default {
  name: "CustomAvatar",
  props: {
      avatar: {
          type: String
      }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
.custom-avatar {
    width: fit-content;
}
::v-deep {
    #btn {
        width: fit-content;
    }
}
.icon-container {
    border: 1px solid $text-grey;
}
</style>