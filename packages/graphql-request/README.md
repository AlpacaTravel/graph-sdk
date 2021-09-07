# Alpaca Travel GraphQL SDK for graphql-request

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via graphql-request.

- [SDK API Documentation](https://alpacatravel.github.io/graph-sdk/packages/graphql-request/docs)
- [Alpaca Travel GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
- [Alternative SDK Versions](/README.md)

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
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@alpaca-travel/graph-sdk-graphql-request';

// Create a graphql-client
// Note: Substitute your API Access Token
const client = new GraphQLClient(`https://withalpaca.com/api/graphql?accessToken=xxx`);

// Initialise the SDK
const sdk = getSdk(client);
```

### Example call

```javascript
// Call in an itinerary
const data = await sdk.getItinerary({ id: 'itinerary/123' });

// Console log the total count
console.log(data.itinerary.locations.totalCount);
```

## API Documentation

See [API Docs](https://alpacatravel.github.io/graph-sdk/packages/graphql-request/docs)

### Extending Functionality

The SDK is driven by a number of [GraphQL documents](/graphql). You can
fork this project if you wish to extend your own queries and mutations as
documented on the [GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
and consider self-hosting for your use case or submitting a pull-request.

#### GraphQL Calls via graphql-request

You can craft your own GraphQL queries following the documentation available
for [Alpaca GraphQL](https://github.com/AlpacaTravel/graphql-docs).

Using graphql-request, you can make your requests as needed;

```javascript
/**
 * Make a GraphQL request using the graphql-request client outside of the SDK
 * capabilities. Needed if you want to extend the SDK capabilities or perform
 * a specific GraphQL call.
 */

const query = gql`
  # My custom Alpaca GraphQL call
  query getAuthorizedProfiles {
    query
    authorizedProfiles(first: 1) {
      nodes {
        id
        name
      }
    }
  }
`;
// Perform a query
client.request(query).then((data) => console.log(data));
```

#### Using graphql-codegen

You can leverage the tool `graphql-codegen` in order to generate additional
hooks and capability for your application.

See the [graphql-codegen configuration](./codegen.yml) for an example of
the configuration used for generating out the SDK.

The benefit of using graphql-codegen is that your Typescript types will be
created, as well as providing the API surface for you to call without embedding
your GraphQL queries/mutations within the component.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
