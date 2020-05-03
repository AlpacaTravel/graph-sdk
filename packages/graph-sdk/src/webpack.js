import Resolver from './resolve-webpack-chunks';
import DefaultClient from './client';
import { ALPACA_GRAPHQL_ENDPOINT } from './config';

export class Client extends DefaultClient {
  constructor(...args) {
    super(...args);
    if (!this.getParam('@endpoint')) {
      this.setParam('@endpoint', ALPACA_GRAPHQL_ENDPOINT);
    }
    if (this.getKeys().indexOf('resolver') === -1) {
      // Resolve through a local package loading
      const resolver = new Resolver();
      resolver.setContainer(this);
      this.set('resolver', resolver);
    }
  }
}

export default {
  Client,
};
