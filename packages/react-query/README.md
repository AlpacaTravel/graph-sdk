# Alpaca Travel GraphQL SDK for React-Query

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via react-query.

See alternative SDK versions available or review the GraphQL documentation.

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

## API Surface for react-query

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

See the [graphql-codegen configuration](./codegen.yml) for an example of
the configuration used for generating out the SDK.

The benefit of using graphql-codegen is that your Typescript types will be
created, as well as providing the API surface for you to call without embedding
your GraphQL queries/mutations within the component.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
