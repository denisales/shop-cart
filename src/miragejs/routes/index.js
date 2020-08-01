/* eslint-disable import/no-extraneous-dependencies */
import { Response } from 'miragejs';

export default function routes() {
  this.namespace = 'api/v1';

  this.resource('products');

  this.get('stock/:sku', (schema, request) => {
    const { sku } = request.params;
    const stock = schema.db.stock.findBy({ sku });

    return stock;
  });
}
