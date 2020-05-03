import { Api } from '@alpaca-travel/graph-methods';

import DefaultNetwork from './default-network';
import Resolver from './resolver';
import Container from './container';
import Network from './network';

export default class ResolveLocalPackages implements Resolver {
  private container: Container;

  async resolve(key: string) {
    switch (key) {
      case 'network': {
        const service: Network = new DefaultNetwork();
        service.setContainer(this.container);
        return service;
      }
      case 'api': {
        const service = new Api({
          container: this.container,
        });
        return service;
      }
      default:
        break;
    }

    return undefined;
  }

  setContainer(container: Container) {
    this.container = container;
  }
}
