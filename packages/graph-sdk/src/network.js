import fetchql from 'fetchql';

export default class NetworkService {
  constructor() {
    this.setContainer = this.setContainer.bind(this);
  }

  async query(queryStr, variables = []) {}

  setContainer(container) {
    this.container = container;
  }
}
