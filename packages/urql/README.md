# Alpaca Travel GraphQL SDK for urql

This package assist with a basic SDK for developing applications on top of
Alpaca Travel GraphQL API via urql.

## Installation

Via NPM:

```
npm install urql graphql graphql-tag @alpaca-travel/graph-sdk-urql --save
```

Via Yarn:

```
yarn add urql graphql graphql-tag @alpaca-travel/graph-sdk-urql
```

## Getting Started

In order to configure your application for development with `urql`, you'll need
to refer to the
[the urql basics](https://formidable.com/open-source/urql/docs/basics/). You'll
learn how to setup urql with React/Preact, Vue, Svelte or other.

```
// Obtain your Alpaca Access Token
const alpacaAccessToken = 'pk.xxx';

// Create a urql
const client = createClient({
  url: `https://withalpaca.com/api/graphql?accessToken={alpacaAccessToken}`,
});
```

## API Surface for urql

```
// SDK Functions available from the package
import * as sdk from '@alpaca-travel/graph-sdk-urql';

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

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
