import { GraphQLClient } from 'graphql-request';

import * as sdk from './graphql';

/** Support for environment based configuration */
const env = process.env;

/**
 * By default, the production end-point of GraphQL is used.
 * This can be customised in your build environment by
 * customising the "ALPACA_GRAPHQL_ENDPOINT" URL
 */
export const ALPACA_GRAPHQL_ENDPOINT = (() => {
  if (env.ALPACA_GRAPHQL_ENDPOINT) {
    return env.ALPACA_GRAPHQL_ENDPOINT;
  }
  return 'https://withalpaca.com/api/graphql';
})();

export class Alpaca {
  /**
   * Creates a new SDK instance with the configured SDK options
   * @param options
   * @returns
   */
  getSdk(options: SdkOptions) {
    const client: GraphQLClient = (() => {
      // If we have a client provided
      if (isSdkWithClient(options)) {
        return options.client;
      }

      // If we instantiate
      const url = (() => {
        // Obtain the endpoint through the SDK options
        const endpoint = options.endpoint || ALPACA_GRAPHQL_ENDPOINT;
        const accessToken = options.accessToken;

        // Compose the URL
        return `${endpoint}?accessToken=${accessToken}`;
      })();

      // Create the GraphQLClient
      return new GraphQLClient(url);
    })();

    // Return the SDK
    return sdk.getSdk(client, options.withWrapper);
  }
}

/**
 * Creates a Alpaca SDK based on the graphql-request client
 */
export default new Alpaca();

type Maybe<T> = T | null;

export type SdkOptions = {
  withWrapper?: sdk.SdkFunctionWrapper;
} & (SdkWithConnectionStrings | SdkWithClient);

type SdkWithConnectionStrings = {
  accessToken: string;
  endpoint?: Maybe<string>;
};

type SdkWithClient = {
  client: GraphQLClient;
};

function isSdkWithClient(opt: any): opt is SdkWithClient {
  return opt.client != null;
}
