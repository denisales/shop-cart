<script>
import BaseIconSpinner from '@/components/BaseIconSpinner.vue';

export default {
  components: { BaseIconSpinner },
  props: {
    loading: {
      required: false,
    },
  },
};
</script>

<template>
  <button
    class="Button"
    :class="[{'loading': loading}]"
    :disabled="loading"
    @click="$emit('click')"
  >
    <span v-if="!loading">
      <slot></slot>
    </span>
    <base-icon-spinner color="#fff" v-else />
  </button>
</template>

<style lang="scss" scoped>
.Button {
  width: 100%;
  border: 0;
  background: var(--color3);
  color: #fff;
  min-height: 50px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  display: block;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: lighten($color: #000000, $amount: 14);
  }

  &.loading {
    &:hover,
    &:focus {
       background: var(--color3);
    }
  }

  &.disabled {
    opacity: 0.5 !important;
  }
}
</style>
