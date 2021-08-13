# Alpaca Travel GraphQL SDK for graphql-request

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via graphql-request.

See [alternative SDK versions](/packages) available or review the [GraphQL documentation](https://github.com/AlpacaTravel/graphql-docs).

## Installation

Via NPM:

```
npm install graphql-request graphql graphql-tag @alpaca-travel/graph-sdk-graphql-request --save
```

Via Yarn:

```
yarn add graphql-request graphql graphql-tag @alpaca-travel/graph-sdk-graphql-request
```

## Typescript Types

The SDK includes typescript types to assist you in working with data responses.

## Getting Started

The below shows a way to create a SDK instance with a configured graphql-request
client.

```javascript
import alpaca from '@alpaca-travel/graph-sdk-graphql-request';

// Initialise the SDK
const sdk = alpaca.getSdk({
  // Include your Access Token
  accessToken: 'XXX',

  // Intercept using a wrapper..
  // withWrapper: myWrapperFunction

  // Provide your own graphql instance..
  // client: myClient,
});
```

### Example call

```javascript
// Call in an itinerary
const data = await sdk.getItinerary({ id: 'itinerary/123' });

// Console log the total count
console.log(data.itinerary.locations.totalCount);
```

### Extending Functionality

The SDK is driven by a number of [GraphQL documents](/graphql). You can
fork this project if you wish to extend your own queries and mutations as
documented on the [GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
and consider self-hosting for your use case or submitting a pull-request.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
