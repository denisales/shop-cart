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
      sizeSelected: null,
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
        const product = { ...this.product };
        product.size = this.sizeSelected;
        await this.addToCart(product);
        this.$root.$notification.open({
          message: 'Produto adicionado a sua sacola',
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
  <div class="ProductView" data-testid="ProductView">
    <div class="ProductView__image">
      <img src="@/assets/img/thumb.jpg" :alt="product.title" />
    </div>
    <div class="ProductView__info">
      <h2 class="title">{{product.title}}</h2>
      <h3 class="desc">{{product.description}}</h3>
      <p class="style">{{product.style}}</p>

      <div class="SelectSize">
        <div v-for="(size, index) in product.availableSizes" :key="index">
          <input v-model="sizeSelected" type="radio" :value="size" :id="size" name="size" />
          <label :for="size">{{size}}</label>
        </div>
      </div>

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
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      @include viewport($xsmall) {
        font-size: 18px;
      }
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
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 2px;
      @include viewport($xsmall) {
        font-size: 26px;
      }
    }
    .installments {
      font-weight: 300;
      margin: 0 0 10px;
      font-size: 12px;
      @include viewport($xsmall) {
        font-size: 14px;
      }
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
      transition: opacity 0.3s ease;
      &:hover,
      &:focus {
        opacity: 0.6;
      }
    }
  }
}

.SelectSize {
  @include flex-grid();
  margin: 5px 0;
  position: relative;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  label {
    cursor: pointer;
    margin: 0 2px;
    border: 1px solid var(--color1);
    display: block;
    @include box(30px);
    background-color: transparent;
    font-size: 11px;
    @include flex-grid();
    @include flex-align(center, center);
    transition: all 0.2s ease;
  }
  input:checked ~ label {
    background-color: var(--color1) !important;
    color: #fff;
  }
}
</style>
