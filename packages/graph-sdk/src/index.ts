import DefaultClient from './client';
import Resolver from './resolve-local-packages';
import { ALPACA_GRAPHQL_ENDPOINT } from './config';
import ClientOptions from './client-options';

export class Client extends DefaultClient {
  constructor(options: ClientOptions) {
    super(options);
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
