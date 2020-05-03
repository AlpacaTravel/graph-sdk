# GraphQL via @alpaca-travel/graph-sdk

Alpaca offers a GraphQL API in order to query and mutate travel related content. You can use your own preferred network layer (such as relay, apollo etc) or leverage the `@alpaca-travel/graph-sdk`.

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

## Performing a GraphQL query with @alpaca-travel/graph-sdk

The `@alpaca-travel/graph-sdk` offers a simple query environment for you to perform GraphQL queries and mutations. This is effective for getting started.

Note: This does not contain any caching, and is a fetch only style library.

```javascript
// Configure your API Key and obtain a client
// Note: use window.alpaca.Client using the CDN hosted
const client = new alpaca.Client({
  apiKey: 'pk.123',
});

// Example query: Count the places within an itinerary
const query = /* GraphQL */ `
  query NumberOfPlacesInItinerary($id: ID!) {
    itinerary(id: $id) {
      root {
        placesCount: descendantsCount(type: ItineraryLocation)
      }
    }
  }
`;

const variables = {
  // Example itinerary
  id: 'itinerary/97b0cac1-52c3-11ea-96fe-067ec0c7e8f4',
};

// Perform a query
client.query({ query, variables }).then((data) => console.log('Received', data));
```

### Network Implementation

The default network client is using a lightweight fetch offered by graphql-request. It is possible for you to implement your own preferred network layer (such as a caching capable client) by assigning it to your client.

```typescript
interface Variables {
  [key: string]: any;
}

interface Query {
  query: string;
  variables: Variables;
}

interface Network {
  // Perform the query
  query(query: Query): Promise<any[]>;
  // Access to container, to obtain environment params (@apiKey etc)
  setContainer(container: Container): void;
}
```

```javascript
// Gist..
const alternativeNetwork = {
  query: ({ query, variables }) => {
    // Optional: Reference the container for the runtime configuration
    const apiKey = this.container.get('@apiKey');
    const endpoint = this.container.get('@endpoint');

    // Compose your URL and configure your client
  },

  setContainer: (container) => {
    // Receive the environment to extract out the api/endpoint
    this.container = container;
  },
};

// Specify the network
const client = new Client({
  apiKey: '...',
  network: alternativeNetwork,
});
```
