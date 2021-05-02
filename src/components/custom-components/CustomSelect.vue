<template>
  <fieldset>
    <label for="input"> {{ label }}</label>
    <select
      name="select"
      id="select"
      :required="required"
      v-model="value"
      @change="$emit('update:input', value)"
    >
      <option
        :value="getValue(option)"
        v-for="(option, index) in options"
        :key="index"
      >
        {{ getValue(option) }}
      </option>
    </select>
  </fieldset>
</template>

<script>
import get from "lodash/get";
export default {
  name: "CustomSelect",
  props: {
    label: {
      type: String
    },
    objString: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      value: ""
    };
  },
  methods: {
    getValue(obj) {
      if (this.objString !== "") return get(obj, this.objString);
      else return obj;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";
fieldset {
  border: transparent;
  padding: 0%;
  select {
    height: 36px;
    width: 100%;
    padding-left: 6px;
    padding-right: 6px;
    background: $primary-white;
    border-radius: 5px;
    outline: none;
    border: 1px solid $border-color;
    box-sizing: border-box;
    font-size: 0.8em;
    ::placeholder {
      color: $border-color;
    }
  }
  label {
    font-size: 0.7em;
  }
}
</style>
