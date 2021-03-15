<template>
  <div class="d-flex button-navigators">
    <router-link
      :to="route.url"
      v-for="(route, index) in routeArr"
      :key="index"
    >
      <button :class="checkRoute(route.url) ? 'active' : ''">
        {{ route.name }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    routeArr: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    checkRoute(url) {
      return this.$route.path === url || this.$route.meta.parent === url;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/colors.scss";
.button-navigators {
  border-bottom: 1px solid $border-color;
  width: 100%;
}
button {
  font-size: 0.9em;
  padding: 3px 15px;
  outline: none;
  color: $text-grey;
  &.active {
    color: $gold-text;
    border-bottom: 2px solid $gold-text;
  }
}
</style>
