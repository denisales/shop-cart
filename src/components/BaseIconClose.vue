<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: 14,
    },
  },
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="`${size}px`"
    :height="`${size}px`"
  >
    <path
      :fill="color"
      d="M14.008,11.906 L11.906,14.008 L7.000,9.103 L2.094,14.008 L-0.009,11.906 L4.897,7.000 L-0.009,2.094 L2.094,-0.008 L7.000,4.897 L11.906,-0.008 L14.008,2.094 L9.103,7.000 L14.008,11.906 Z"
    />
  </svg>
</template>
