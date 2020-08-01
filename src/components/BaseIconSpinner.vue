<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: 20,
    },
  },
};
</script>

<template>
  <svg class="Spinner" :fill="color" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 36 36">
  <path id="Icon_awesome-spinner" data-name="Icon awesome-spinner" d="M21.375,3.375A3.375,3.375,0,1,1,18,0,3.375,3.375,0,0,1,21.375,
  3.375ZM18,29.25a3.375,3.375,0,1,0,3.375,3.375A3.375,3.375,0,0,0,18,29.25ZM32.625,14.625A3.375,3.375,0,1,0,36,18,3.375,3.375,0,0,0,32.625,14.625ZM6.75,
  18a3.375,3.375,0,1,0-3.375,3.375A3.375,3.375,0,0,0,6.75,18Zm.909,6.966a3.375,3.375,0,1,0,3.375,3.375A3.375,3.375,0,0,0,7.659,24.966Zm20.683,0a3.375,3.375,
  0,1,0,3.375,3.375A3.375,3.375,0,0,0,28.341,24.966ZM7.659,4.284a3.375,3.375,0,1,0,3.375,3.375A3.375,3.375,0,0,0,7.659,4.284Z"/>
</svg>

</template>

<style lang="scss" scoped>
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

.Spinner {
  animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

</style>
