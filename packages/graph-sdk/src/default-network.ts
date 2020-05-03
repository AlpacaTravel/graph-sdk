import { GraphQLClient } from 'graphql-request';
import Container from './container';
import Network from './network';
import Query from './query';

export default class DefaultNetwork implements Network {
  private container: Container;

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

  async query(options: Query) {
    const { query, variables } = options;

    const data = await this.getClient().request(query, variables);

    return data;
  }

  setContainer(container: Container) {
    this.container = container;
  }
}
