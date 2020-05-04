# API (graph-methods)

The graph-sdk leverages the Alpaca GraphQL end-point. Developers can learn graphql easily and unlock all the capability of the Alpaca API through executing operations like query/mutations.

We have also created a library `@alpaca-travel/graph-methods` that is accessible via the default client. These contain a number of common API calls that developers can use to get started without necessarily jumping into understanding the GraphQL queries.

This API surface is accessible via the `client.get('api')` method.

```javascript
import { Client } from '@alpaca-travel/graph-sdk;

// Create a client configured with your API Key
const client = new Client({
  apiKey: 'pk.XXX', // Your API Key
});

// Perform API calls...
try {
  // Access the API from the client
  const api = await client.get('api');

  // Create an itinerary...
  const itinerary = api.createAnonymousItinerary();
} catch (e) {
  console.error('Encountered an error', e);
}
```

See: [Getting Started](https://github.com/AlpacaTravel/graph-sdk) in order to install and configure

## Reference

### createAnonymousItinerary()

Creates an itinerary that is anonymous.

Note: You can intercept and maintain references to created itineraries, or alternatively you can use the Alpaca Webhooks which allow you to capture events and process them on your server end-point.

## See Also

- [Example GraphQL Operations](https://github.com/AlpacaTravel/graph-sdk/blob/master/packages/graph-methods/src/operations.ts)
- [GraphQL](https://github.com/AlpacaTravel/graph-sdk/blob/master/docs/graphql.md)
