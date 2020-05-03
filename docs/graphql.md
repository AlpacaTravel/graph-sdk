# GraphQL

Alpaca offers a GraphQL API in order to query and mutate travel related content.

## Getting Started

### Endpoint URL

The pre-release API end-points are listed below. These are not to be used for production.

```
https://xsc9966js2.execute-api.ap-southeast-2.amazonaws.com/dev/graphql?accessToken=XXX
```

For most GraphQL Clients, you can configure this URL into your client and get going.

### Authentication

The Alpaca API uses offers authentication through the use of the Access Token query parameter `?accessToken=`.

You will need to register for the API Keys to use as your access tokens. Alpaca offers 2 API key types; private and public. Public can be used as a READ ONLY scope, while the private API Keys must be protected as they provide access to WRITE.

## GraphQL Client Setup

You can use any GraphQL Client. You can use the following for details about getting your GraphQL Client setup.

### Alpaca Graph SDK (graph-sdk)

You can make basic GraphQL queries from the Alpaca GraphSDK. You can include the graph-sdk via the Alpaca CDN or via npm.

[See graph-sdk documentation](https://github.com/AlpacaTravel/graph-sdk)

```javascript
import { Client } from '@alpaca-travel/graph-sdk';

const client = new Client({
  apiKey: '...', // Substitute your API Key
});

const query = /* GraphQL */ `query { ... }`;

client.query({ query }).then((data) => console.log('GraphQL returned', data));
```
