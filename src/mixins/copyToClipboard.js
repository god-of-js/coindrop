export default {
  methods: {
    initiateCopy() {
      var copyText = document.getElementById("copy-item");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      this.copyToClipboard(copyText.value);
    },
    copyToClipboard(text) {
      if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
      ) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          this.$notification.success({
            message: "Success",
            description: "Copied successfully."
          });
        } catch (ex) {
          this.$notification.success({
            message: "Error",
            description: "An error occured. copy manually."
          });
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    }
  }
};
