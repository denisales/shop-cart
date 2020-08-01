<script>
import BaseCartCounter from '@/components/BaseCartCounter.vue';

export default {
  components: { BaseCartCounter },
};
</script>

<template>
  <div>
    <header class="Header">
      <div class="Header__content">
        <button class="ButtonCart" @click="$root.$emit('openCart')">
          <base-cart-counter />
        </button>
      </div>
    </header>
    <div class="Spacer"></div>
  </div>

</template>

<style lang="scss" scoped>
.Header {
  z-index: 3;
  position: fixed;
  top: 0;
  padding: 10px 0;
  width: 100%;
  left: 0;
  height: 72px;
  right: 0;
  &__content {
    @include custom-container();
    @include flex-grid();
    @include flex-align(flex-end);
  }
}
.ButtonCart {
  outline: none;
  border: 0;
  background: #fff;
  border-radius: 100%;
  padding: 6px;
  position: relative;
  @include flex-grid();
  @include flex-align(center, center);
  transition: all .3s ease;
  &:hover {
   opacity: .5;
  }
}
.Spacer {
  height: 72px;
}
</style>
