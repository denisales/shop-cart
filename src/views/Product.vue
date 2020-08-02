<script>
import { mapActions } from 'vuex';
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
    }),

    async handleAddToCart() {
      try {
        this.loading = true;
        await this.addToCart(this.product);
        this.$root.$notification.open({
          message: 'Produto adicionado ao carrinho',
          color: 'success',
        });
        this.$emit('addCartSuccess');
      } catch (error) {
        const { message } = error;
        this.$root.$notification.open({ message, color: 'error' });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div class="ProductView">
    <div class="ProductView__image">
      <img src="@/assets/img/thumb.jpg" :alt="product.title" />
    </div>
    <div class="ProductView__info">
      <h2 class="title">{{product.title}}</h2>
      <h3 class="desc">{{product.description}}</h3>
      <p class="style">{{product.style}}</p>

      <span class="price">{{product.price | currency}}</span>
      <div
        class="installments"
        v-if="product.installments"
      >até {{product.installments}}x de {{ (product.price / product.installments)| currency }}</div>
      <span class="installments" v-else>á vista</span>
      <div class="shipping" v-if="product.isFreeShipping">Frete Gratis</div>
      <base-button :loading="loading" @click="handleAddToCart">Adicionar à sacola</base-button>
      <button class="close" @click="$emit('close')">FECHAR</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ProductView {
  border-radius: 4px;
  padding: 15px 20px;
  background: #fff;
  z-index: 2;
  @include flex-grid(column, nowrap);
  @include flex-align(flex-start, center);
  max-width: 350px;
  @include viewport($medium) {
    min-width: 350px;
  }

  &__image {
    width: 180px;
    height: 230px;
    overflow: hidden;
    border-radius: 2px;
    margin: 0 0 10px;
    background: var(--color6);
    @include viewport($medium) {
      margin-right: 20px;
    }
    img {
      width: 100%;
      border: 0;
      display: block;
    }
  }

  &__info {
    @include flex-grid(column, nowrap);
    @include flex-align(flex-start, center);
    padding: 0 10px;
    width: 100%;
    .title {
      margin: 0 0 4px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    .desc {
      font-weight: 400;
      font-size: 14px;
      margin: 0 0 5px;
      text-align: center;
    }
    .style {
      font-weight: 300;
      margin: 0 0 5px;
      display: block;
      text-align: center;
    }
    .price {
      font-size: 28px;
      font-weight: bold;
      margin: 0 0 2px;
    }
    .installments {
      font-weight: 300;
      margin: 0 0 10px;
    }
    .shipping {
      font-weight: 400;
      margin: 0 0 14px;
    }
    .close {
      text-decoration: underline;
      margin: 20px 0 0;
      border: 0;
      outline: none;
      background: none;
      transition: opacity .3s ease;
      &:hover,&:focus {
        opacity: .6;
      }
    }
  }
}
</style>
