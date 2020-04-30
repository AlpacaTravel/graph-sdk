import { GraphQLClient } from 'graphql-request';

export default class NetworkService {
  constructor() {
    this.setContainer = this.setContainer.bind(this);
    this.getClient = this.getClient.bind(this);
    this.query = this.query.bind(this);
  }

  getClient() {
    const endpoint = this.container.getParam('@endpoint');
    const apiKey = this.container.getParam('@apiKey');
    const url = `${endpoint}?accessToken=${apiKey}`;

    const client = new GraphQLClient(url);

    return client;
  }

  async query(options = {}) {
    const { query, variables } = options;

    const data = await this.getClient().request({ query, variables });

    return data;
  }

  setContainer(container) {
    this.container = container;
  }
}
