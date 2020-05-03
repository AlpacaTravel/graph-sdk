import Container from './container';
import ClientOptions from './client-options';
import Query from './query';

export default class Client extends Container {
  constructor(options: ClientOptions) {
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

  async query(options: Query) {
    const network = await this.get('network');

    return network.query(options);
  }
}
