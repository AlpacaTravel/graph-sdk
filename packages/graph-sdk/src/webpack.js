import Resolver from './resolve-webpack-chunks';
import Container from './container';
import DefaultClient from './client';

const container = new Container();

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
