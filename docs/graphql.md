# Alpaca Travel GraphQL

Alpaca offers a GraphQL API in order to query and mutate travel related content. You can use your own preferred network layer (such as relay, apollo etc) or leverage the `@alpaca-travel/graph-sdk`.

## Getting Started

GraphQL is a flexible data query language that allows you to design queries that match your use case.
Opposed to making several REST API requests, you can make a single query to obtain the data you need.

If you are new to GraphQL, the following educational resources may be helpful as a starting point.

- [Introduction to GraphQL](https://graphql.org/learn/)
- [How to GraphQL](https://www.howtographql.com/)
- [Guides and Best Practices](https://www.graphql.com/guides/)
- [GraphQL Clients](https://graphql.org/graphql-js/graphql-clients/)

### Endpoint URL

In order to interact with GraphQL, you will need to use the following root endpoint:

```
https://withalpaca.com/api/graphql?accessToken=xxx
```

When using the root endpoint, it is important to authenticate via providing your access token (which is your API Key)
as a query parameter.

#### GraphQL Playground

GraphQL offers an introspection capability with a defined schema. This helps you develop the query that suits your specific use case or technical needs
without having to go through a lot of API Documentation. Through the GraphQL Playground, you can try out your queries
and mutations directly onto the GraphQL environment.

Visit the [GraphQL Playground](https://withalpaca.com/api/graphql). Remember to add your `?accessToken=` to the URL

## Getting Started using Fetch

The Fetch API provides a JavaScript interface to making requests and reading responses. Fetch is [widely](https://caniuse.com/#feat=fetch) supported on modern browsers and provides a replacement for the older XMLHttpRequest style requests.

You can develop your query using the [GraphQL Playground](https://withalpaca.com/api/graphql) and then update your query below.

```javascript
// Using FETCH
// Update the accessToken with your API Key
fetch('https://withalpaca.com/api/graphql?accessToken=pk.xxx', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query: '{ hello }' }),
})
  .then((r) => r.json())
  .then((data) => console.log('data returned:', data));
```

## Using Apollo Client

Apollo offers a [get started guide](https://www.apollographql.com/docs/react/get-started/) that you can follow in order to integrate apollo client within your application.

Install your Apollo Client

```shell
npm add apollo-boost @apollo/react-hooks graphql
```

Create a client and provide it to the ApolloProvider

```javascript
// App.js
import React from 'react';
import { render } from 'react-dom';
import Example from './Example';

import { ApolloProvider } from '@apollo/react-hooks';

// Create a new client
// Replace your API Key instead of the xxx of the access token
const client = new ApolloClient({
  uri: 'https://withalpaca.com/api/graphql?accessToken=xxx',
});

// Add to the Apollo Provider
const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Alpaca GraphQL app 🚀</h2>
      <Example />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
```

Perform a GQL query using react hooks

```javascript
// Example.js
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Example query will obtain items from a collection from Alpaca
const COLLECTION_ITEMS = /* GraphQL */ gql`
  {
    collectionItems(
      # Obtain the first 5 records
      first: 5
      # From the supplied user collection
      collectionIds: ["collection/4m2hSusvAkPHpLb36NJ5BV"]
    ) {
      nodes {
        id
        # User Supplied Title
        title
        # User Supplied Synopsis
        synopsis
        # The preferred media to use (will pick uploaded or place)
        preferredMedia {
          # Chose a thumbnail that covers the 100x100 width/height
          thumbnail: source(bestFit: [100, 100]) {
            url
            width
            height
          }
          # Text for images
          altText
        }
      }
    }
  }
`;

function Example() {
  const { loading, error, data } = useQuery(COLLECTION_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.collectionItems.nodes(({ id, title, synopsis, preferredMedia }) => (
    <div key={id}>
      <img altText={preferredMedia.altText} url={preferredMedia.thumbnail.url} />
      <h2>{title}</h2>
      <p>{synopsis}</p>
    </div>
  ));
}

export default Example;
```

A working example is shared on the codesandbox below:

[Simple apollo and react demo](https://codesandbox.io/s/silly-ives-xky2i?file=/src/Items.js)
