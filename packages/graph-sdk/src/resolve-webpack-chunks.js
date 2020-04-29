export default class ResolveWebpackChunks {
  async resolve(key) {
    switch (key) {
      case 'dummy': {
        const { default: DummyService } = await import(
          /* webpackChunkName: "dummy" */ './dummy-service'
        );
        const service = new DummyService();
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
