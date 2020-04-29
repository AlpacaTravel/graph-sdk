import Container from './container';

export default class Client extends Container {
  constructor(options) {
    super();

    if (options && options.resolver) {
      this.set('resolver', options.resolver);
    }
  }

  async query(...args) {
    const network = await this.get('network');

    return network.query(...args);
  }
}
