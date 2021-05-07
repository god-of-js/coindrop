<template>
  <div
    class="upload__box d-flex align-center flex-column justify-center pa-8"
    @click="pickImage"
    @dragover.prevent
    @drop.prevent="droppedFile($event)"
  >
    <p class="font_md__sm green__text font__bold text-center" img-name>
      Select Image
    </p>
    <div class="font__x__sm grey__text text-center" change>
      or drop image here
    </div>
    <input type="file" class="img" @change="checkImage" style="display: none" />
  </div>
</template>
<script>
import uploadImage from "@/mixins/uploadImage.js";
export default {
  name: "CustomImageUpload",
  mixins: [uploadImage]
};
</script>

<style lang="scss" scoped></style>
