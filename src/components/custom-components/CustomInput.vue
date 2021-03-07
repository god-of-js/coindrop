<template>
  <div class="text-left">
    <label for="" v-if="label">{{ label }}</label>
    <input
      :type="inputType"
      :placeholder="placeholder"
      v-model="value"
      @input="$emit('data', value)"
    />
  </div>
</template>

<script>
export default {
  name: "DefaultInput",
  model: {
    prop: "value",
    event: "update"
  },
  data: () => {
    return {
      value: ""
    };
  },
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    inputType: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
label {
  font-size: 0.7em;
}
input {
  height: 36px;
  width: 100%;
  padding-left: 6px;
  background: $primary-white;
  border-radius: 5px;
  outline: none;
  border: 1px solid $border-color;
  box-sizing: border-box;
  font-size: 1em;
  ::placeholder {
    color: $border-color;
  }
}
</style>
