/* eslint-disable import/no-extraneous-dependencies */
import { Server } from 'miragejs';
import factories from './factories/index';
import fixtures from './fixtures';
import routes from './routes';
import models from './models';
import seeds from './seeds';

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    environment,
    factories,
    fixtures,
    models,
    routes,
    seeds,
  });
}
