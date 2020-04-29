export default class ResolveWebpackChunks {
  async resolve(key) {
    switch (key) {
      case 'network': {
        const { default: NetworkService } = await import(
          /* webpackChunkName: "network" */ './network'
        );
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
