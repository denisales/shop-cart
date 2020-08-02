<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: 10,
    },
    height: {
      type: [String, Number],
      default: 20,
    },
  },
  computed: {
    style() {
      return `width: ${this.width}px; height: ${this.height}px;`;
    },
  },
};
</script>

<template>
  <div class="Loader">
    <div class="Loader__progress" :style="style"></div>
  </div>
</template>

<style scoped lang="scss">
@keyframes placeHolderShimmer {
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 100em 0;
  }
}

.Loader {
  width: 100%;
  @include flex-grid(row, nowrap);
  @include flex-align(center);
  &__progress {
    margin: 5px;
  min-height: 10px;
  min-width: 20px;
  display: block;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 70%, #eeeeee 75%);
  animation: placeHolderShimmer 4s forwards infinite linear;
  }
}
</style>
