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

## API Documentation

The capabilities of the API are documented using typedoc.

See [API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs)

### Extending using your own GraphQL Queries

You have options on how you would like extend your queries.

- Use the `useQuery` or `useMutation` hooks review the [provided GraphQL documents](/graphql) (simple)
- Write your GraphQL documents and leverage `graphql-codegen` to generate your apollo hooks
- Fork the SDK and modify as suits (more advanced, but can simply modify graphql docs and then rerun the code generation)

#### Using Apollo `useQuery`

Apollo makes it easy for you to create your own GraphQL documents that connect
to Alpaca and then execute your queries and mutations.

```javascript
import { gql, useQuery } from '@apollo/client';

const GET_AUTHORIZED_PROFILES = gql`
  query getAuthorizedProfiles($first: Int!) {
    authorizedProfiles(first: $first) {
      nodes {
        id
        __typename
        name
      }
    }
  }
`;

function Profiles() {
  const { loading, error, data } = useQuery(GET_AUTHORIZED_PROFILES, {
    first: 10,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <ul>
      {data.authorizedProfiles.nodes.map((profile) => (
        <li key={profile.id}>{profile.name}</li>
      ))}
    </ul>
  );
}
```

- See [Apollo Queries](https://www.apollographql.com/docs/react/data/queries/)
- See [Apollo Mutations](https://www.apollographql.com/docs/react/data/mutations/)

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
