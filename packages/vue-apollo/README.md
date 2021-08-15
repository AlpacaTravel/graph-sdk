# Alpaca Travel GraphQL SDK for Vue with Apollo (Composition API)

This package assist with a basic SDK for developing applications on top of
Alpaca Travel GraphQL API via Vue Apollo using the Composition API.

## Installation

Via NPM:

```
npm install @apollo/client graphql graphql-tag @alpaca-travel/graph-sdk-vue-apollo --save
```

Via Yarn:

```
yarn add @apollo/client graphql graphql-tag @alpaca-travel/graph-sdk-vue-apollo
```

## Getting Started

See [Installation for Vue Apollo](https://v4.apollo.vuejs.org/guide/installation.html)

## Queries

### Basic Query

```
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>{{ result.itinerary.title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useGetItineraryQuery } from "@alpaca-travel/graph-sdk-vue-apollo"

export default defineComponent({
  setup() {
    const { result, loading } = useGetItineraryQuery({ id: "itinerary/123"})
    return { result, loading }
  }
})
</script>
```

### Single Property with useResult and add an error message

The below example obtains the property of `edges` for an itinerary and
can loop through the individual locations/arrival directions or display a
loading/error message as required.

```
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="edges">
      <div v-for="edge in edges" :key="edge.location.id">
        {{ edge.location.id }} {{ edge.location.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useResult } from '@vue/apollo-composable'
import { useListItineraryLocationsQuery } from "@alpaca-travel/graph-sdk-vue-apollo"

export default defineComponent({
  setup() {
    // Alpaca SDK Call
    const { result, loading, error } = useListItineraryLocationsQuery({ id: "itinerary/123", first: 5, includeRoutePolyline: false })
    // Only select the property 'edges' for use in the template
    const edges = useResult(result, null, (data) => data.itinerary.locations.edges)
    return { edges, loading, error }
  }
})
</script>
```

## API Surface for urql

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

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
