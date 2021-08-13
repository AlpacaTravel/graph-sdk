# Alpaca Travel GraphQL SDK for React with Apollo

This package assist with a basic SDK for developing applications on top of
Alpaca Travel GraphQL API via React/Apollo.

## Installation

Via NPM:

```
npm install @apollo/client graphql @alpaca-travel/graph-sdk-react-apollo --save
```

Via Yarn:

```
yarn add @apollo/client graphql @alpaca-travel/graph-sdk-react-apollo
```

## Getting Started

You'll need to establish your client and provide it to the application.

```javascript
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // Substitute in your API Key
  uri: `https://withalpaca.com/api/graphql?accessToken=xxx`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
```

> [Getting Started with Apollo Client](https://www.apollographql.com/docs/react/)

### Using a SDK Function

The below provides an example of using the 'getItinerary' SDK query, which
is exposed as `useGetItineraryQuery`. You also have access to variations, such
as lazy loading.

```javascript
import React from 'react';
import { render } from 'react-dom';
import { useGetItineraryQuery } from '@alpaca-travel/graph-sdk-react-apollo';

function MyComponent() {
  // Leverage an SDK function as a hook
  const [data, loading, error] = useGetItineraryQuery({ id: 'itinerary/123' });

  // Loading state...
  if (loading) {
    return <>Loading...</>;
  }

  // Use Error Boundary for error handling
  if (error) {
    throw error;
  }

  // Use the data how you want
  return (
    <>
      <h3>{data.itinerary.title}</h3>
      <p>Locations: {data.itinerary.locations.totalCount}</p>
    </>
  );
}
```

### Extending using your own GraphQL Queries

You have options on how you would like extend your queries.

- Use the `useQuery` statements and review the [provided GraphQL documents](/graphql) (simple)
- Write your GraphQL documents and leverage `graphql-codegen` to generate your apollo hooks
- Fork the SDK and modify as suits (more advanced, but can simply modify graphql docs and then rerun the code generation)

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
