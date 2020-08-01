import Home from '@/views/Home.vue';
// import Product from '@/views/Product.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/product/:sku',
  //   name: 'Product',
  //   components: {
  //     default: Home,
  //     product: Product,
  //   },
  // },
];

export default routes;
