import operations from './operations';

interface Query {
  query: string;
  variables?: Variables;
}

interface Variables {
  [key: string]: any;
}

interface Network {
  query(query: Query): Promise<any[]>;
}

interface Container {
  get(key: string): Promise<any>;
  getParam(key: string): any;
}

interface Client {
  query(query: Query): Promise<any[]>;
}

export interface QueryOptions {
  variables?: Variables;
}

interface ApiOptions {
  network?: Network;
  container?: Container;
  client?: Client;
}

export default class Api {
  private container: Container;
  private network: Network;
  private client: Client;

  /* Static operations Accessor */
  static get(operationKey: string): string {
    return operations[operationKey];
  }

  constructor(options?: ApiOptions) {
    if (options) {
      this.client = options.client;
      this.container = options.container;
      this.network = options.network;
    }
  }

  async query(operationKey: string, options: QueryOptions): Promise<any> {
    const operation: string = Api.get(operationKey);
    const query: Query = Object.assign({}, options, { query: operation });

    // Use the supplied client
    if (this.client) {
      return this.client.query(query);
    }

    // Find a network
    const network = await this.getNetwork();
    if (network) {
      return network.query(query);
    }

    throw new Error(
      'Missing network or client, construct with network/container or client or setContainer(container)',
    );
  }

  /* Exposed operations Functions */
  createAnonymousItinerary(options: QueryOptions): Promise<any[]> {
    return this.query('CreateAnonymousItinerary', options);
  }

  /* Accessors */
  private async getNetwork() {
    if (this.network) {
      return this.network;
    }

    if (this.container) {
      return this.container.get('network');
    }

    return null;
  }

  /* Mutators */
  setContainer(container: Container) {
    this.container = container;
  }
}
