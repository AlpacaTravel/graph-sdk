import Container from './container';

export default class Client extends Container {
  constructor(options) {
    super();

    // Support configuration options
    if (options) {
      if (options.resolver) {
        this.set('resolver', options.resolver);
      }
      if (options.apiKey) {
        this.setParam('@apiKey', options.apiKey);
      }
      if (options.network) {
        this.set('network', options.network);
      }
    }
  }

  async query(...args) {
    const network = await this.get('network');

    return network.query(...args);
  }
}
