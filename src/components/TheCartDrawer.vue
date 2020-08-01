<script>
import BaseCartCounter from '@/components/BaseCartCounter.vue';
import BaseListItemProduct from '@/components/BaseListItemProduct.vue';
import BaseIconArrowRight from '@/components/BaseIconArrowRight.vue';
import BaseButton from '@/components/BaseButton.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  components: {
    BaseCartCounter,
    BaseListItemProduct,
    BaseIconArrowRight,
    BaseButton,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.cart.items,
    }),
    ...mapGetters({
      totalValue: 'cart/totalValue',
    }),
  },
  methods: {
    ...mapMutations({
      removeItemCart: 'cart/REMOVE_ITEM_CART',
    }),

    handleShow() {
      this.show = true;
    },
  },
  watch: {
    show(value) {
      if (value) {
        window.document.body.classList.add('no-scroll');
      } else {
        window.document.body.classList.remove('no-scroll');
      }
    },
  },
  created() {
    this.$root.$on('openCart', this.handleShow);
  },
};
</script>

<template>
  <div class="CartDrawer" :aria-hidden="!show">
    <transition name="fade">
      <div class="overlay" v-show="show" @click="show = !show"></div>
    </transition>
    <aside class="CartDrawer__aside" :class="{'open': show}" :aria-hidden="!show">
        <button @click="show = !show" class="CartDrawer__aside__close">
        <base-Icon-arrow-right color="#fff" />
      </button>
      <div class="CartDrawer__aside__header">
        <base-cart-counter color="#fff" />
        <h2 class="CartDrawer__aside__header__title">sacola</h2>
      </div>
      <template v-if="!products.length">
        <div class="EmptyCart">
          <span class="message">O seu carrinho está vazio</span>
          <base-button @click="show = !show">Voltar as compras</base-button>
        </div>
      </template>
      <template v-else>
        <div class="ListProduct">
          <base-list-item-product
            v-for="product in products"
            :key="product.id"
            :title="product.title"
            size="G"
            :styled="product.style"
            :amount="product.amount"
            :price="product.price"
            :currencyFormat="product.currencyFormat"
            @remove="removeItemCart(product.id)"
          />
        </div>
        <div class="CartDrawer__aside__checkout">
          <div class="total">
            <span class="text">SUBTOTAL</span>
            <div class="price">
              <span>{{totalValue | currency}}</span>
              <span class="caption">ou em até 10 X {{ totalValue / 10 | currency}}</span>
            </div>
          </div>
          <base-button>Comprar</base-button>
        </div>
      </template>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.EmptyCart {
  margin: 40px 0;
  .message {
    font-size: 22px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 60px;
    display: block;
    text-align: center;
  }
}
.CartDrawer {
  position: fixed;
  height: 0;
  width: 0;
  z-index: 999;

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: rgba($color: #000, $alpha: 0.5);
    z-index: 1;
  }

  &__aside {
    overflow-y: scroll;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #3e3e3e;
    padding: 20px;
    box-shadow: -3px 0px 16px rgba(0, 0, 0, 0.5);
    transform: translateX(110%);
    transition: all 0.2s ease;
    z-index: 80;
    @include viewport(medium) {
      max-width: 512px;
    }

    &.open {
      transform: translateX(0%);
    }

    &__close {
      position: absolute;
      top: 20px;
      left: 20px;
      background: none;
      border: 0;
      outline: none;
      margin: 0;
      padding: 0;
      transition: opacity 0.2s ease;
      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }

    &__header {
      @include flex-grid();
      @include flex-align(center, center);
      padding: 10px 0 30px;

      &__title {
        margin: 0;
        margin-left: 20px;
        font-size: 24px;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
      }
    }

    &__checkout {
      padding: 30px 20px;
      width: 100%;
      .total {
        @include flex-grid();
        @include flex-align(space-between, center);
        margin-bottom: 30px;

        .text {
          text-transform: uppercase;
          font-size: 14px;
          color: #fff;
          opacity: 0.6;
        }
        .price {
          color: #dfbd00;
          font-weight: bold;
          font-size: 24px;
          @include flex-align(flex-start, flex-end);
          @include flex-grid(column);

          .caption {
            font-weight: normal;
            text-transform: uppercase;
            opacity: 0.4;
            font-size: 12px;
            color: #ffffff;
          }
        }
      }
    }
  }
}
.ListProduct {
  margin: 0 -20px;
}
</style>
