<script>
import BaseDialog from '@/components/BaseDialog.vue';
import BaseSkeletonLoader from '@/components/BaseSkeletonLoader.vue';
import Product from '@/views/Product';
import productsServices from '@/services/productsServices';

export default {
  name: 'Home',
  components: {
    BaseDialog,
    Product,
    BaseSkeletonLoader,
  },
  data() {
    return {
      loading: false,
      products: [],
      product: {},
      dialog: false,
      menu: false,
    };
  },
  methods: {
    handleProduct(product) {
      this.product = product;
      this.dialog = true;
    },
    async handleProducts() {
      try {
        this.loading = true;
        const { data } = await productsServices.list();
        this.products = data.products;
      } catch (error) {
        this.$root.$notification.open({ message: 'Erro ao carregar os produtos', color: 'error' });
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.handleProducts();
  },
};
</script>

<template>
  <div>
    <section class="Container">
      <div class="Content">
        <template v-if="loading">
          <div class="Column" v-for="i in Array(8)" :key="i">
            <base-skeleton-loader width="180" height="230" />
            <base-skeleton-loader width="120" height="40" />
            <base-skeleton-loader width="100" height="20" />
          </div>
        </template>
        <template v-else>
          <div class="Column" v-for="product in products" :key="product.id">
            <div class="CardProduct" data-testid="CardProduct">
              <div class="CardProduct__thumb" @click="handleProduct(product)" data-testid="CardProductThumb">
                <img src="@/assets/img/thumb.jpg" :alt="product.title" />
              </div>
              <span class="CardProduct__title" @click="dialog = true">{{product.title}}</span>
              <span class="CardProduct__price">{{product.price | currency}}</span>
              <span
                class="CardProduct__caption"
                v-if="product.installments"
              >ou {{product.installments}} x {{ (product.price / product.installments)| currency }}</span>
              <span class="CardProduct__caption" v-else>á vista</span>
            </div>
          </div>
        </template>
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
    background: var(--color6);
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
    color: var(--color1);
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
      background: var(--color4);
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  &__price {
    font-size: 24px;
    font-weight: 800;
    color: var(--color1);
    .symbol {
      font-size: 12px;
    }
  }
  &__caption {
    color: var(--color6);
  }
}
</style>
