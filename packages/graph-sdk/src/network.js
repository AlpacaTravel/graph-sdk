import 'isomorphic-fetch';
import FetchQL from 'fetchql';

export default class NetworkService {
  constructor() {
    this.setContainer = this.setContainer.bind(this);
    this.getFetcher = this.getFetcher.bind(this);
    this.query = this.query.bind(this);
  }

  getFetcher() {
    const endpoint = this.container.getParam('@endpoint');
    const apiKey = this.container.getParam('@apiKey');
    const url = `${endpoint}?accessToken=${apiKey}`;

    const fetcher = new FetchQL({ url });

    return fetcher;
  }

  async query(options = {}) {
    const { query, variables, operationName } = options;

    return this.getFetcher().query({ operationName, query, variables });
  }

  setContainer(container) {
    this.container = container;
  }
}
