<script>
import BaseCartCounter from '@/components/BaseCartCounter.vue';

export default {
  components: { BaseCartCounter },
};
</script>

<template>
  <div>
    <header class="Header">
      <button class="ButtonCart" @click="$root.$emit('openCart')">
        <base-cart-counter />
      </button>
    </header>
    <div class="Spacer"></div>
  </div>
</template>

<style lang="scss" scoped>
.Header {
  z-index: 3;
  position: fixed;
  top: 0;
  padding: 0;
  width: 100%;
  left: 0;
  height: 0;
  right: 0;
  @include custom-container();
  @include flex-grid();
  @include flex-align(flex-end);
  overflow: visible;
}
.ButtonCart {
  position: absolute;
  outline: none;
  top: 20px;
  right: 20px;
  border: 0;
  background: #fff;
  border-radius: 100%;
  padding: 6px;
  @include box(52px);
  @include flex-grid();
  @include flex-align(center, center);
  transition: all 0.3s ease;
   opacity: 0.6;
  &:hover {
    opacity: 1;
  }
}
.Spacer {
  height: 72px;
}
</style>
