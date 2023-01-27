# React and Apollo SDK for Alpaca Travel

![npm](https://img.shields.io/npm/v/@alpaca-travel/graph-sdk-react-apollo)![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpaca-travel/graph-sdk-react-apollo)![NPM](https://img.shields.io/npm/l/@alpaca-travel/graph-sdk-react-apollo)

The Alpaca Travel platform offers a GraphQL API that provides developers with 
easy access to itinerary content for use in interactive applications and user 
interfaces. It includes features such as itinerary management, guide and 
directory creation, location search, and place information loading to enhance 
the functionality of travel-related applications and websites.

> Simplify integration of Alpaca Travel GraphQL API into React and Apollo-based 
> projects using pre-built functionality and type-safe hooks.

The **@alpaca-travel/graph-sdk-react-apollo** package is an npm package for 
developers who are using React and Apollo GraphQL to build travel-related 
websites and applications. The package includes an SDK that utilizes Apollo 
clients to connect to the Alpaca Travel GraphQL API, providing developers with a
prebuilt set of standard functionality without the need to write their own 
GraphQL operations. 

Additionally, the package includes examples of how to use code generation to 
construct type-safe hooks based on the Alpaca Travel GraphQL schema, which can 
assist in validating operations and simplifying integration. This package may be
useful for developers who are looking to efficiently integrate the Alpaca Travel
GraphQL API into their React and Apollo-based projects.

- [SDK API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs)
- [Alpaca Travel GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
- [Alternative SDK Versions](/README.md)

## Getting Started

This SDK is for applications or websites that are built using React along with
the Apollo Client.

This guide assumes that you have you React application already installed and
running. 

## Installation

### Apollo Client

If you haven't done so already, you'll also need to install the Apollo Client.

```shell
npm install @apollo/client graphql --save
```

### Install the Alpaca Travel SDK

Via NPM:

```
npm install @alpaca-travel/graph-sdk-react-apollo --save
```

## Getting Started

You'll need to establish your client and provide it to the application.

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
```

> [Getting Started with Apollo Client](https://www.apollographql.com/docs/react/)

### Using a SDK Function

The below provides an example of using the 'getItinerary' SDK query, which
is exposed as `useGetItineraryQuery`. You also have access to variations, such
as lazy loading.

```javascript
import React from 'react';
import * as alpaca from '@alpaca-travel/graph-sdk-react-apollo';

function MyComponent() {
  // Leverage an SDK function as a hook
  const [data, loading, error] = alpaca.useGetItineraryQuery({
    variables: {
      id: 'itinerary/123',
    },
  });

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

Install graphql-codegen and the related libraries to your project

```shell
npm install -D @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/introspection @graphql-codegen/jsdoc @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```

See the [graphql-codegen configuration](./codegen-typescript-example.yml) for an example of
the configuration used for generating out the SDK.

1. Copy the `codegen-typescript-example.yml` file as `codegen.yml` in your workspace
2. Create the folder in `src/graphql` and place in your graphql operations
3. Add the script `"graphql-codegen": "graphql-codegen --config codegen.yml"` to your package.json "scripts" section
4. Run `npm run graphql-codegen` to generate your own `src/graphql/index.ts` file

The benefit of using graphql-codegen is that your Typescript types will be
created, as well as providing the API surface for you to call without embedding
your GraphQL queries/mutations within the component.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
