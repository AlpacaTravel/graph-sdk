interface Query {
  query: string;
  variables: Variables;
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
