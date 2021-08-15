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

## API Surface for React Apollo

```
// SDK Functions available from the package
import * as sdk from '@alpaca-travel/graph-sdk-react-apollo';

// sdk.useCreateItineraryQuery(...)
```

| SDK Function                                                                                           | Description                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [useCreateItineraryQuery](/graphql/create-itinerary.graphql)                                           | Creates a new itinerary                                                                                                                        |
| [useUpdateItineraryMutation](/graphql/update-itinerary.graphql)                                        | Updates the itinerary, supporting various user content and media                                                                               |
| [useGetItineraryQuery](/graphql/get-itinerary.graphql)                                                 | Retrieves the itinerary, with a total count of the number of locations added                                                                   |
| [useEnableItineraryAutoRouteMutation](/graphql/enable-itinerary-auto-route.graphql)                    | Enables automatically adding directions between added locations                                                                                |
| [useDisableItineraryAutoRouteMutation](/graphql/disable-itinerary-auto-route.graphql)                  | Disables automatically adding directions between added locations                                                                               |
| [useFindItineraryLocationByPlaceIdQuery](/graphql/find-itinerary-location-by-place-id.graphql)         | Finds an itinerary location in the supplied itinerary having a matching place ID                                                               |
| [useCreateItineraryLocationMutation](/graphql/create-itinerary-location.graphql)                       | Adds a new stop to an itinerary                                                                                                                |
| [useUpdateItineraryLocationMutation](/graphql/update-itinerary-location.graphql)                       | Updates the itinerary location, supporting various user content and media                                                                      |
| [useGetItineraryLocationQuery](/graphql/get-itinerary-location.graphql)                                | Retrieves the itinerary location (and associated place information if avialable)                                                               |
| [useGetItineraryDirectionsQuery](/graphql/get-itinerary-directions.graphql)                            | Retrieves the itinerary directions between locations                                                                                           |
| [useDeleteItineraryLocationMutation](/graphql/delete-itinerary-location.graphql)                       | Removes the itinerary location from the itinerary                                                                                              |
| [useListItineraryLocationsQuery](/graphql/list-itinerary-locations.graphql)                            | Creates a list of the itinerary locations in sequence, exposing directions between the locations (such as distance and durations or polylines) |
| [useMoveItineraryLocationAfterMutation](/graphql/move-itinerary-location-after.graphql)                | Moves the itinerary location after another location in the sequence                                                                            |
| [useMoveItineraryLocationToStartMutation](/graphql/move-itinerary-location-to-start.graphql)           | Moves the itinerary location to the first position in the sequence                                                                             |
| [useUpdateItineraryLocationIsOptionalMutation](/graphql/update-itinerary-location-is-optional.graphql) | Mark the location as 'optional' which will skip directions to this location and move on to next                                                |

### Extending using your own GraphQL Queries

You have options on how you would like extend your queries.

- Use the `useQuery` statements and review the [provided GraphQL documents](/graphql) (simple)
- Write your GraphQL documents and leverage `graphql-codegen` to generate your apollo hooks
- Fork the SDK and modify as suits (more advanced, but can simply modify graphql docs and then rerun the code generation)

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
