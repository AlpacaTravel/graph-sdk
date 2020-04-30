# graph-sdk

[![Build Status](https://travis-ci.com/AlpacaTravel/graph-sdk.svg?branch=master)](https://travis-ci.com/AlpacaTravel/graph-sdk)[![Coverage Status](https://coveralls.io/repos/github/AlpacaTravel/graph-sdk/badge.svg?branch=master)](https://coveralls.io/github/AlpacaTravel/graph-sdk?branch=master)![MIT](https://img.shields.io/npm/l/@alpaca-travel/graph-sdk)

This project is in a WIP.

The Alpaca graph-sdk utilises the GraphQL API to access Alpaca resources. See the GraphQL documentation for information about queries and mutations.

## Quickstart

The get started, you need to obtain an API Key.

### Alpaca CDN

Include the JavaScript file in your `<head>` of your HTML file.

```javascript
<script src="https://cdn.alpaca.dev/@alpaca-travel/graph-sdk@latest/dist/bundle.js"></script>
```

This is served through an Amazon CloudFront CDN instance, and using the bundle version offers
code splitting to optimise network traffic. By default, we will send only the minimal code and load code/dependent services on demand as they are needed.

### Module Bundler

Install the npm Package.

```shell
npm install @alpaca-travel/graph-sdk
```

Use the package through importing/requiring.

```javascript
import alpaca from '@alpaca-travel/graph-sdk';
// or "const alpaca = require('@alpaca-travel/graph-sdk');
```

## Performing a GraphQL query

Using the SDK, first assign your global apiKey, and then create a Client. You can then perform
network GraphQL operations.

```javascript
// Configure your API Key
alpaca.apiKey = 'pk.123';

// Obtain an instance of your client
const client = new alpaca.Client();

// Perform a query
const result = await client.query({
  // Your query operation
  query: `
    {
      itinerary(id: $id) {
        root {
          placesCount: descendantsCount(type: ItineraryLocation)
        }
      }
    }
  `,
  // Your variables
  variables: {
    id: 'itinerary/XXX',
  },
});
```

### Network Implementation

The default network client is using a lightweight fetch offered by graphql-request. It is possible for you to implement your own preferred network layer (such as a caching capable client) by assigning it to your client.

```javascript
const alternativeNetwork = {
  query({ query, variables }) {
    // ...
  },
};

client.set('network', alternativeNetwork);
```
