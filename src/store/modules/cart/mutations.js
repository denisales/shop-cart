export default {
  ADD_ITEM_TO_CART(state, product) {
    state.items = [...state.items, product];
  },
  UPDATE_ITEM_AMOUNT(state, { productId, amount }) {
    const productIndex = state.items.findIndex((p) => p.id === productId);

    if (productIndex > -1) {
      state.items[productIndex].amount = amount;
    }
  },
  REMOVE_ITEM_CART(state, productId) {
    const productIndex = state.items.findIndex((p) => p.id === productId);

    if (productIndex > -1) {
      state.items.splice(productIndex, 1);
    }
  },
};
