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

  setParent(parent) {
    this.parent = parent;
  }

  get apiKey() {
    return this.getParam('@apiKey');
  }

  set apiKey(val) {
    this.setParam('@apiKey', val);
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

    const value = this[_container][key];
    if (typeof value === 'undefined' && this.parent) {
      return this.parent.get(key);
    }

    return value;
  }

  getParam(key) {
    const value = this[_container][key];
    if (typeof value === 'undefined' && this.parent) {
      return this.parent.getParam(key);
    }

    return this[_container][key];
  }

  setParam(key, value) {
    this[_container][key] = value;
  }

  getKeys() {
    return Object.keys(this[_container]);
  }
}
