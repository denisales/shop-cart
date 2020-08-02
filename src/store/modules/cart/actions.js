import productsServices from '@/services/productsServices';

export default {
  async addToCart({ state, commit }, product) {
    const { size } = product;

    if (!size) throw new Error('Selecione o tamanho');

    const productExists = state.items.find((item) => (item.id === product.id) && (item.size === product.size));

    const stockResponse = await productsServices.productStockBySku(product.sku);
    const stockAmount = stockResponse.data.amount;

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) throw new Error('Quantidade fora de estoque');

    if (productExists) return commit('UPDATE_ITEM_AMOUNT', { productId: product.id, size: product.size, amount });

    const { data } = await productsServices.productById(product.id);

    const payload = {
      ...data.products,
      amount: 1,
      size,
    };
    return commit('ADD_ITEM_TO_CART', payload);
  },
};
