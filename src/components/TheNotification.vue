<script>
/**
 * Example use:
 *   this.$root.$notification.open({ message: 'Teste', color: 'error' });
 */
export default {
  data() {
    return {
      show: false,
      interval: 2000,
      idTimeout: null,
      options: {
        color: 'error',
        message: '',
      },
    };
  },
  methods: {
    async open(options) {
      if (this.show) {
        await new Promise((resolve) => {
          this.handleForceClose();
          setTimeout(() => resolve(), 300);
        });
      }
      this.show = true;
      this.idTimeout = setTimeout(this.close, this.interval);
      this.options = { ...options };
    },
    close() {
      this.show = false;
      this.idTimeout = null;
    },
    handleForceClose() {
      clearInterval(this.idTimeout);
      this.close();
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div class="Notification" :class="options.color" v-show="show">
      <span class="Notification__message">{{options.message}}</span>
      <button class="Notification__button" @click="handleForceClose">Fechar</button>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.Notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 300px;
  @include flex-grid(row, nowrap);
  @include flex-align(space-between, center);
  border-radius: 4px;
  color: #fff;
  z-index: 9999;
  margin: 10px;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);

  &__message {
    padding: 14px;
  }

  &__button {
    background: none;
    outline: none;
    border: 0;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 5px;
    transition: all .2s ease;
    &:hover, &:focus {
      opacity: .8;
    }
  }
}
</style>
