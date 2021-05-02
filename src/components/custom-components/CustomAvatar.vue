<template>
  <div class="custom-avatar d-flex flex-column align-center">
    <v-avatar :class="[avatar ? '' : 'icon-container', 'mb-4']" size="100">
      <img :src="avatar" v-if="avatar" />
      <v-icon v-else color="#707A8A">mdi-account</v-icon>
    </v-avatar>
    <custom-button @click="pickImage" v-if="editable">
      <span v-if="!avatar">Upload selfie image</span>
      <span v-else>Change selfie image</span>
    </custom-button>
    <input type="file" class="img" @change="checkImage" style="display: none" />
  </div>
</template>

<script>
import uploadImage from "@/mixins/uploadImage.js";
export default {
  name: "CustomAvatar",
  mixins: [uploadImage],
  props: {
    avatar: {
      type: String
    },
    editable: {
      type: Boolean,
      default: true
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
