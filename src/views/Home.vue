<script>
import BaseDialog from '@/components/BaseDialog.vue';
import Product from '@/views/Product';
import productsServices from '@/services/productsServices';

export default {
  name: 'Home',
  components: {
    BaseDialog,
    Product,
  },
  data() {
    return {
      loading: false,
      products: [],
      product: null,
      dialog: false,
      menu: false,
    };
  },
  methods: {
    handleProduct(product) {
      this.product = product;
      this.dialog = true;
    },
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await productsServices.list();
      this.products = data.products;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<template>
  <div>
    <section class="Container">
      <div class="Content">
        <div class="Column" v-for="product in products" :key="product.id">
          <div class="CardProduct">
            <div class="CardProduct__thumb" @click="handleProduct(product)">
              <img src="@/assets/img/thumb.jpg" alt />
            </div>
            <span class="CardProduct__title" @click="dialog = true">{{product.title}}</span>
            <span class="CardProduct__price">{{product.price | currency}}</span>
            <span class="CardProduct__caption" v-if="product.installments">ou {{product.installments}} x {{product.currencyFormat}} {{ (product.price / product.installments)| currency }}</span>
            <span class="CardProduct__caption" v-else>á vista</span>
          </div>
        </div>
      </div>
    </section>

    <base-dialog v-model="dialog" @close="dialog = false">
      <product :product="product" @addCartSuccess="dialog = false" @close="dialog = false" />
    </base-dialog>
  </div>
</template>

<style lang="scss" scoped>
.Container {
  @include custom-container();
}

.Content {
  @include flex-grid();
  padding: 0 0;
}

.Column {
  padding: 20px;
  @include flex-grid();
  @include flex-align(center);
  @include flex-cell(12);
  @include flex-cell(6, smedium);
  @include flex-cell(4, medium);
  @include flex-cell(3, slarge);
}

.CardProduct {
  border-radius: 4px;
  padding: 10px;
  width: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    .CardProduct__thumb {
      img {
        transform: scale(1.05);
      }
    }
  }
  &__thumb {
    cursor: pointer;
    width: 180px;
    height: 230px;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 2px;
    img {
      width: 100%;
      transition: all 0.3s ease;
      display: block;
      border: 0;
    }
  }
  &__title {
    cursor: pointer;
    font-size: 14px;
    color: #313135;
    text-align: center;
    margin: 0 0 4px;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 20px;
      display: block;
      background: #dfbd00;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  &__price {
    font-size: 24px;
    font-weight: 800;
    color: #313135;
    .symbol {
      font-size: 12px;
    }
  }
  &__caption {
    color: #999999;
  }
}
</style>