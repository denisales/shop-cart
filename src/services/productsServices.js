import http from './http';

export default {
  list: () => http.get('products'),

  productById: (id) => http.get(`products/${id}`),

  productStockBySku: (sku) => http.get(`stock/${sku}`),
};
