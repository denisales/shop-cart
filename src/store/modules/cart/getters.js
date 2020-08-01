export default {
  counter: (state) => {
    const total = state.items.reduce((ac, cu) => {
      ac += cu.amount;
      return ac;
    }, 0);
    return total;
  },

  totalValue: (state) => {
    const total = state.items.reduce((ac, cu) => {
      ac += cu.price * cu.amount;
      return ac;
    }, 0);
    return total;
  },
};
