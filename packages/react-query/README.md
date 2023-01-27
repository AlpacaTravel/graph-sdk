# Alpaca Travel GraphQL SDK for React-Query

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via react-query.

- [SDK API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs)
- [Alpaca Travel GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
- [Alternative SDK Versions](/README.md)

## Installation

Via NPM:

```
npm install react-query graphql @alpaca-travel/graph-sdk-react-query --save
```

Via Yarn:

```
yarn add react-query graphql @alpaca-travel/graph-sdk-react-query
```

## Getting Started

You will need to configure your react-query `queryClient` and provide
to your application.

```javascript
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a react-query Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <h2>React Query Client Setup</h2>
    </div>
  );
}

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root'),
);
```

Note: Refer to the [Getting Started with react-query](https://react-query.tanstack.com/overview) for more help setting up your query client in your application.

## Using a SDK Function

The below provides an example of using the 'getItinerary' SDK query.

```javascript
// Itinerary.js
import React from 'react';
import { useGetItineraryQuery } from '@alpaca-travel/graph-sdk-react-query';

// Substitute your API Access Token into the URL
export const endpoint = 'https://withalpaca.com/api/graphql?accessToken=xxx';

function Itinerary() {
  // Leverage an SDK function as a hook
  const [data, loading, error] = useGetItineraryQuery({ endpoint }, { id: 'itinerary/123' });

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

See [API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs)

### Extending using your own GraphQL Queries

You have a few options in order to extend the capabilities of your
application to call beyond the SDK functions included here.

- Use the `react-query` examples to call [Alpaca GraphQL](https://github.com/AlpacaTravel/graphql-docs) (simple)
- Write your GraphQL documents and leverage `graphql-codegen` to generate your apollo hooks
- Fork the SDK and modify as suits (more advanced, but can simply modify graphql docs and then rerun the code generation)

#### Basic example with `graphql-request`

Install the package `graphql-request` in order to make simple requests.

You can review the [example](https://react-query.tanstack.com/examples/basic-graphql-request) on the `react-query` website.

```javascript
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { request } from 'graphql-request';

function useProfiles() {
  return useQuery('profiles', async () => {
    const {
      authorizedProfiles: { nodes }
    } = await request(
      endpoint,
      gql`
        query getAuthorizedProfiles() {
          authorizedProfiles(first: 10) {
            nodes {
              id
              __typename
              name
            }
          }
        }
      `
    );
    return nodes;
  });
}

function Profliles() {
  const queryClient = useQueryClient();

  const { status, data, error, isFetching } = useProfiles();

  return (
    <>
      <h3>Profiles</h3>
      <div>
      {status === 'loading' ? ('Loading...') : status === 'error' ? (<span>Error: {error.message}</span>) : (
        <ul>
          {data.map(profile => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
```

#### Using graphql-codegen

You can leverage the tool `graphql-codegen` in order to generate additional
hooks and capability for your application.

Install graphql-codegen and the related libraries to your project

```shell
npm install -D @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/introspection @graphql-codegen/jsdoc @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query
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
