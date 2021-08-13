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

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
