<script>
import BaseIconClose from '@/components/BaseIconClose.vue';

export default {
  components: { BaseIconClose },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    styled: {
      type: String,
      required: true,
    },
    amount: {
      type: [Number, String],
      required: true,
    },
    currencyFormat: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleMouseEnter(e) {
      const listItem = e.target.parentElement;
      listItem.classList.add('delete');
    },
    handleMouseLeave(e) {
      const listItem = e.target.parentElement;
      listItem.classList.remove('delete');
    },
  },
};
</script>

<template>
  <div class="ListItemProduct">
    <button @click="$emit('remove')" class="button-delete" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <base-icon-close />
    </button>
    <div class="content">
      <div class="ListItemProduct__thumb">
        <img src="@/assets/img/thumb-mini.jpg" alt />
      </div>
      <div class="ListItemProduct__desc">
        <h3 class="ListItemProduct__desc__title">{{title}}</h3>
        <span class="ListItemProduct__desc__info">{{size}} | {{styled}}</span>
        <span class="ListItemProduct__desc__info">Quantidade: {{amount}}</span>
      </div>
      <span class="ListItemProduct__price">{{price * amount | currency}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .ListItemProduct {
    position: relative;
    padding: 0 20px;

    .content {
      border-top: 1px solid var(--color3);
      position: relative;
      padding: 20px 0;
      @include flex-grid();
      @include flex-align(flex-start, center);
    }

    &::after {
      content: "";
      background: rgba(0, 0, 0, 0);
    }

    &.delete {
      &::after {
        content: "";
        transition: background 0.3s ease;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: 0;
        right: 0;
        z-index: 1;
      }

      .ListItemProduct__desc__title {
        text-decoration: line-through;
        text-decoration-color: #fff;
      }
      .ListItemProduct__desc__info {
        text-decoration: line-through;
        text-decoration-color: var(--color6);
      }
      .ListItemProduct__price {
        text-decoration: line-through;
        text-decoration-color: var(--color4);
      }
    }

    .button-delete {
      padding: 4px;
      position: absolute;
      top: 10px;
      right: 20px;
      background: transparent;
      border: 0;
      z-index: 2;
      outline: none;
      &:hover {
        svg {
          transition: all 0.3s ease;
          fill: #fff !important;
        }
      }
    }

    &:last-of-type {
      .content {
        border-bottom: 1px solid var(--color3);
      }
    }
    &__thumb {
      margin-right: 20px;
      img {
        display: block;
        border: 0;
      }
    }
    &__desc {
      color: #fff;
      flex: 1;
      &__title {
        margin: 0 0 4px;
        font-size: 14px;
      }
      &__info {
        display: block;
        font-size: 12px;
        color: var(--color6);;
      }
    }
    &__price {
      align-self: flex-end;
      color: var(--color4);
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
