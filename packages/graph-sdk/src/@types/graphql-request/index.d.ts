declare module 'graphql-request' {
  interface Variables {
    [key: string]: any;
  }

  export class GraphQLClient {
    constructor(url: string);
    request(query: string, variables: Variables): Promise<any[]>;
  }
}
