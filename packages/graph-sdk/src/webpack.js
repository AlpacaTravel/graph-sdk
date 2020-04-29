import Resolver from './resolve-webpack-chunks';
import Container from './container';

const factory = () => {
  const container = new Container();

  // Resolve through a split loading mechanism
  const resolver = new Resolver();
  resolver.setContainer(container);
  container.set('resolver', resolver);

  return container;
};

export { Container, factory };
