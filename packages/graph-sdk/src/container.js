const _container = Symbol('container');

export default class Container {
  constructor() {
    this[_container] = {};

    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.setParam = this.setParam.bind(this);
    this.getParam = this.getParam.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  set(key, value) {
    this[_container][key] = value;
  }

  async get(key) {
    if (!this[_container][key]) {
      if (this[_container].resolver) {
        const { resolver } = this[_container];
        const service = await resolver.resolve(key);
        if (service) {
          this[_container][key] = service;
        }
      }
    }

    return this[_container][key];
  }

  getParam(key) {
    return this[_container][key];
  }

  setParam(key, value) {
    this[_container][key] = value;
  }

  getKeys() {
    return Object.keys(this[_container]);
  }
}
