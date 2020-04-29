import Resolver from './resolve-webpack-chunks';
import Container from './container';
import DefaultClient from './client';
import { ALPACA_GRAPHQL_ENDPOINT } from './config';

const container = new Container();
container.setParam('@endpoint', ALPACA_GRAPHQL_ENDPOINT);

// Resolve through a split loading mechanism
const resolver = new Resolver();
resolver.setContainer(container);
container.set('resolver', resolver);

export class Client extends DefaultClient {
  constructor(...args) {
    super(...args);
    this.setParent(container);
  }
}

// Pull off the default export
container.Client = Client;

export default container;
