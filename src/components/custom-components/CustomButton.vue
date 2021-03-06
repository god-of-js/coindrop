<template>
  <button
    id="btn"
    :class="[inactive ? 'btn-disabled ' : '', setClass]"
    :disabled="inactive"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    inactive: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    setClass: {
      type: String,
      default: "default-button"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";

.default-button {
  width: 100%;
  padding: 10px;
  height: 40px;
  outline: none;
  background: $primary-button-color;
  color: $black-text;
  box-sizing: border-box;
  border-radius: 4px;
  border: transparent;
  font-size: 0.9em;
  font-weight: 550;
  cursor: pointer;
  &:active {
    transform: scale(1.04, 1.03);
  }
  &:hover {
    background: $primary-button-hover-color;
  }
}
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.text {
  font-size: 0.9em;
  background: transparent;
  border: transparent;
  outline: none;
  cursor: pointer;
  float: left;
}
</style>
