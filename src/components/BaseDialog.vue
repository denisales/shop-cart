<script>
export default {
  props: {
    value: {
      default: false,
      required: true,
    },
  },
  watch: {
    value(value) {
      if (value) {
        window.document.body.classList.add('no-scroll');
      } else {
        window.document.body.classList.remove('no-scroll');
      }
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div class="Dialog" v-show="value" :aria-hidden="!value">
      <div class="Overlay" @click="$emit('close')"></div>
      <transition name="slide-up">
        <div v-if="value" class="Content">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.Dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  @include flex-grid();
  @include flex-align(center, center);
  .Overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgba($color: #000, $alpha: 0.5);
  }
  .Content {
    margin: 0 20px;
    z-index: 2;
  }
}
</style>
