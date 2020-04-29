import Container from './container';

const factory = (options = {}) => {
  const container = new Container();

  if (options && options.resolver) {
    container.set('resolver', options.resolver);
  }

  return container;
};

export default { Container, factory };
