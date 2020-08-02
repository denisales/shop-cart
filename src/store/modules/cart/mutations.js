export default {
  ADD_ITEM_TO_CART(state, product) {
    state.items = [...state.items, product];
  },
  UPDATE_ITEM_AMOUNT(state, { productId, size, amount }) {
    const productIndex = state.items.findIndex((item) => (item.id === productId) && (item.size === size));

    if (productIndex > -1) {
      state.items[productIndex].amount = amount;
    }
  },
  REMOVE_ITEM_CART(state, { productId, size }) {
    const productIndex = state.items.findIndex((item) => (item.id === productId) && (item.size === size));

    if (productIndex > -1) {
      state.items.splice(productIndex, 1);
    }
  },
};
