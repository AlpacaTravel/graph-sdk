export default class Container {
  private parent: Container;
  private store: { [key: string]: any };

  constructor() {
    this.store = {};

    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.setParam = this.setParam.bind(this);
    this.getParam = this.getParam.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  setParent(parent: Container) {
    this.parent = parent;
  }

  get apiKey(): string {
    return this.getParam('@apiKey');
  }

  set apiKey(val: string) {
    this.setParam('@apiKey', val);
  }

  set(key: string, value: any) {
    this.store[key] = value;
  }

  async get(key: string): Promise<any> {
    if (!this.store[key]) {
      if (this.store.resolver) {
        const { resolver } = this.store;
        const service = await resolver.resolve(key);
        if (service) {
          this.store[key] = service;
        }
      }
    }

    const value: any = this.store[key];
    if (typeof value === 'undefined' && this.parent) {
      return this.parent.get(key);
    }

    return value;
  }

  getParam(key: string): any {
    const value = this.store[key];
    if (typeof value === 'undefined' && this.parent) {
      return this.parent.getParam(key);
    }

    return this.store[key];
  }

  setParam(key: string, value: any) {
    this.store[key] = value;
  }

  getKeys(): string[] {
    return Object.keys(this.store);
  }
}
