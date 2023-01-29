# React and Apollo SDK for Alpaca Travel

![npm](https://img.shields.io/npm/v/@alpaca-travel/graph-sdk-react-apollo)![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpaca-travel/graph-sdk-react-apollo)![NPM](https://img.shields.io/npm/l/@alpaca-travel/graph-sdk-react-apollo)![npm type definitions](https://img.shields.io/npm/types/@alpaca-travel/graph-sdk-react-apollo)

The Alpaca Travel platform offers a GraphQL API that provides developers with
easy access to itinerary content for use in interactive applications and user
interfaces. It includes features such as itinerary management, guide and
directory creation, location search, and place information loading to enhance
the functionality of travel-related applications and websites.

> Simplify integration of Alpaca Travel GraphQL API into React and Apollo-based
> projects using pre-built functionality and type-safe hooks.

The
**[@alpaca-travel/graph-sdk-react-apollo](https://www.npmjs.com/package/@alpaca-travel/graph-sdk-react-apollo)**
package is an npm package for developers who are using React and Apollo GraphQL
to build travel-related websites and applications. The package includes an SDK
that utilizes Apollo clients to connect to the Alpaca Travel GraphQL API,
providing developers with a prebuilt set of standard functionality without the
need to write their own GraphQL operations.

Additionally, the package includes examples of how to use code generation to
construct type-safe hooks based on the Alpaca Travel GraphQL schema, which can
assist in validating operations and simplifying integration. This package may be
useful for developers who are looking to efficiently integrate the Alpaca Travel
GraphQL API into their React and Apollo-based projects.

- [NPM Package](https://www.npmjs.com/package/@alpaca-travel/graph-sdk-react-apollo)
- [SDK API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs)
- [Alpaca Travel GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
- [Alternative SDK Versions](/README.md)

## Setup

This SDK is for applications or websites that are built using React along with
the Apollo Client.

This guide assumes that you have you React application already installed and
running.

- Create a production website with [Next.js](https://nextjs.org/), or
- Create a new React project locally with
  [Create React App](https://reactjs.org/docs/create-a-new-react-app.html), or
- Create a new React sandbox on [CodeSandbox](https://codesandbox.io/)

## Install dependencies

### Apollo Client

If you haven't done so already, you'll also need to install the Apollo Client.

Apollo Client requires two top-level dependencies of `@apollo/client` and
`graphql`.

```shell
npm install @apollo/client graphql --save
```

For this you can use an install like below, or refer to the
[Apollo Client](https://www.apollographql.com/docs/react/) documentation.

### Alpaca Travel React/Apollo SDK

Intalling the Alpaca Travel SDK requires one top-level dependency added to the
project.

```shell
npm install @alpaca-travel/graph-sdk-react-apollo --save
```

This single package exposes a number of React hooks and GraphQL documents
providing the basis of the Alpaca Travel SDK.

## Initialize the ApolloClient

You'll need to establish your client and provide it to the application.

Create a module called `client.js` and add the following Apollo Client
configuration:

```javascript
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { typePolicies } from "@alpaca-travel/graph-sdk-react-apollo";

// Recommend this is an environment variable
const ACCESS_TOKEN = "ADD_YOUR_TOKEN_HERE";

// Create a new Apollo Client
const client = new ApolloClient({
  // Substitute in your API Key
  uri: `https://withalpaca.com/api/graphql?accessToken=${ACCESS_TOKEN}`,
  cache: new InMemoryCache({ typePolicies }),
});
```

- `uri` specifies apollo to connect to the Alpaca Travel GraphQL endpoint
- `cache` is an instance of `InMemoryCache`, which Apollo client uses to cache
  results after fetching them.

Remember to update the code with your Access Token.

Pass the InMemoryCache instance the value of `typePolicies` exported from the
SDK, which helps configure the cache to understand how to handle SDK
functionality, such as relay style cursor pagination.

See More:

- Alpaca Travel GraphQL API
  [Token Authorization](https://github.com/AlpacaTravel/graphql-docs/tree/master/topics/graphql/Token%20Authorization)
- Alpaca Travel GraphQL API
  [Apollo Client](https://github.com/AlpacaTravel/graphql-docs/tree/master/topics/javascript/react/Apollo%20Client)
  Topic

## Connect your client to React

In your application component, you can provide the Apollo Client to wrap your
application using the `ApolloProvider`.

We suggest putting the `ApolloProvider` somewhere high in your app, above any
component that might need to use the SDK.

```javascript
import React from "react";
import { ApolloProvider } from "@apollo/client";

// Import the client from above
import client from "./client";

function App() {
  return (
    <ApolloProvider client={client}>
      <h2>My first Apollo app 🚀</h2>
    </ApolloProvider>
  );
}

export default App;
```

## Fetch data with the SDK

The below provides an example of using the 'getItinerary' SDK query, which is
exposed as `useGetItineraryQuery`. You also have access to variations, such as
lazy loading.

```javascript
// Import the SDK function
import * as alpaca from "@alpaca-travel/graph-sdk-react-apollo";

function MyComponent() {
  // Leverage an SDK function as a hook
  const [data, loading, error] = alpaca.useGetItineraryQuery({
    variables: {
      id: "itinerary/123",
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

## Setup Code Example Reference

You can refer to this
[CodeSandbox example](https://codesandbox.io/s/alpaca-travel-typescript-sdk-react-apollo-e958zh?file=/src/App.tsx)
which shows a React v18 application using Apollo to query the Alpaca Travel API
via the SDK.

## SDK API Documentation

The capabilities of the API are documented using typedoc.

See
[API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs)

## Extending the SDK Functionality

You have options on how you would like extend your queries.

- Use the Apollo `useQuery` or `useMutation` from Apollo Client and refer to the
  [Alpaca Travel GraphQL documentation](https://github.com/AlpacaTravel/graphql-docs)
  for example operations
- Write your GraphQL documents and leverage `graphql-codegen` to generate your
  apollo hooks

As an alternative option, you can review this package for a reference of
implementating your own SDK modifications.

### Using Apollo `useQuery`

Apollo makes it easy for you to create your own GraphQL documents that connect
to Alpaca and then execute your queries and mutations.

```javascript
import { gql, useQuery } from "@apollo/client";

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
- See
  [Apollo Mutations](https://www.apollographql.com/docs/react/data/mutations/)

### Using `graphql-codegen` in your project

You can leverage the tool `graphql-codegen` in order to generate additional
hooks and capability for your application.

This has the benefit of validating your GraphQL operations against the Alpaca
Travel GraphQL schema, and can generate associated types that can help
development.

Install graphql-codegen and the related libraries to your project (Assumes
typescript):

```shell
npm install -D @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/introspection @graphql-codegen/jsdoc @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```

See the
[graphql-codegen configuration](/packages/react-apollo/codegen-typescript-example.yml)
for an example of the configuration used for generating out the SDK.

1. Copy the `codegen-typescript-example.yml` file as `codegen.yml` in your
   workspace
2. Create the folder in `src/graphql` and place in your graphql operations
3. Add the script `"graphql-codegen": "graphql-codegen --config codegen.yml"` to
   your package.json "scripts" section
4. Run `npm run graphql-codegen` to generate your own `src/graphql/index.ts`
   file

The benefit of using graphql-codegen is that your Typescript types will be
created, as well as providing the API surface for you to call without embedding
your GraphQL queries/mutations within the component.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
