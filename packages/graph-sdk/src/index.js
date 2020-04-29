import Container from './container';
import DefaultClient from './client';
import Resolver from './resolve-local-packages';
import { ALPACA_GRAPHQL_ENDPOINT } from './config';

const container = new Container();
container.setParam('@endpoint', ALPACA_GRAPHQL_ENDPOINT);

// Resolve through a local package loading
const resolver = new Resolver();
resolver.setContainer(container);
container.set('resolver', resolver);

export class Client extends DefaultClient {
  constructor(...args) {
    super(...args);
    this.setParent(container);
  }
}

export default container;
