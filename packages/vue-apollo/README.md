# Alpaca Travel GraphQL SDK for Vue with Apollo (Composition API)

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via Vue Apollo using the Composition API.

- [SDK API Documentation](https://alpacatravel.github.io/graph-sdk/packages/vue-apollo/docs)
- [Alpaca Travel GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
- [Alternative SDK Versions](/README.md)

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

## API Documentation

The capabilities of the API are documented using typedoc.

See [API Documentation](https://alpacatravel.github.io/graph-sdk/packages/vue-apollo/docs)

#### Using graphql-codegen

You can leverage the tool `graphql-codegen` in order to generate additional
hooks and capability for your application.

Install graphql-codegen and the related libraries to your project

```shell
npm install -D @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/introspection @graphql-codegen/jsdoc @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-vue-apollo
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
