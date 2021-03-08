<template>
  <div id="modal">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ModalWrap",
  components: {}
};
</script>

<style lang="scss" scoped>
#modal {
  font-size: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: rgba(55, 71, 79, 0.2);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1300;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  width: 100vw;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  will-change: opacity;
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
}
</style>
