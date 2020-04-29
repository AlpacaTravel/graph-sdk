import NetworkService from './network';

export default class ResolveLocalPackages {
  async resolve(key) {
    switch (key) {
      case 'network': {
        const service = new NetworkService();
        service.setContainer(this.container);
        return service;
      }
      default:
        break;
    }

    return undefined;
  }

  setContainer(container) {
    this.container = container;
  }
}
