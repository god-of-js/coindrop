<template>
  <input
    class="pa-3"
    v-on="$listeners"
    @input="$emit('update', $event.target.value)"
  />
</template>

<script>
export default {
  name: "DefaultInput",
  model: {
    prop: "value",
    event: "update"
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
input {
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  outline: none;
  border: 1px solid $border-color;
  font-size: 0.7em;
  ::placeholder {
    color: $border-color;
  }
}
</style>
