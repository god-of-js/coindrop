import axios from "axios";
import { CLOUDINARY_UPLOAD_URL } from "@/config/config.js";
import { imgCheck } from "@/helpers/helperFunctions.js";
export default {
  methods: {
    pickImage() {
      document.querySelector(".img").click();
    },
    checkImage() {
      const fileInput = document.querySelector(".img");
      const file = fileInput.files[0];
      if (!imgCheck(file)) {
        this.$notification.error({
          message: "Error",
          description: "Only images are accepted."
        });
        return;
      }
      this.$emit("recieveImage", file);
      this.readImage(file);
    },
    uploadImage(file) {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        console.log(file);
        formData.append(`file`, file);
        formData.append("upload_preset", "ny81cpha");
        axios
          .post(CLOUDINARY_UPLOAD_URL, formData)
          .then(response => {
            resolve(response.data.url);
          })
          .catch(err => {
            console.log(err.response);
            reject(err.response.data.error.message);
          });
      });
    },
    readImage(e) {
      const filereader = new FileReader();
      filereader.onload = evt => {
        this.$emit("photoUrl", evt.target.result);
      };
      filereader.readAsDataURL(e);
    }
  }
};
