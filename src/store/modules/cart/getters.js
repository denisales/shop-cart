export default {
  counter: (state) => state.items.length,

  totalValue: (state) => {
    const total = state.items.reduce((ac, cu) => {
      ac += cu.price * cu.amount;
      return ac;
    }, 0);
    return total;
  },
};
