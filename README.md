<div align="center">
  <img alt="Developer Documentation" src="https://developer.alpacamaps.com/_media/logo.svg" height="75" width=75 />
</div>

# Alpaca GraphQL JavaScript SDK

> [Alpaca Travel](https://alpaca.travel) offers an SDK to assist developers
> with building travel applications and websites. The SDK provides some 'out of
> the box' functionality that can accelerate the adoption of developers without
> involving making GraphQL calls themselves.

Alpaca Travel offer an extensive managed GraphQL API that developers can easily
integrate into their applications and websites. The JavaScript SDK provides a
onboarding approach for developers that may want to leverage a simple SDK
oppposed to developing their own queries and mutations with GraphQL directly.

Our SDK's are based on Typescript and setup to work on basic GraphQL based
queries and mutations. We offer several versions of client in order to suit
preferences of developers.

- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)

## Capabilites of SDK

The SDK offers a set of basic capabilities for working with common use cases,
such as creating and editing itineraries or displaying collections of places.

The SDK leverages a series of [GraphQL documents](/graphql) that are built
based on the [Alpaca GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs).

The SDK leverages the Alpaca GraphQL API which operates as a SaaS platform,
offering all required services such as place provider integration, route and
directions services as well as the data management.

### Itinerary Management

Alpaca offers a way to create itineraries for users. The use cases target adding
functionality such as travel bookmarking and detailed travel itinerary creation.

- [Learn about itinerary management via GraphQL](https://github.com/AlpacaTravel/graphql-docs/tree/develop/topics/itinerary)

| SDK Function                                                                                | Description                                                                                                                                    |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [createItinerary](/graphql/create-itinerary.graphql)                                        | Creates a new itinerary                                                                                                                        |
| [updateItinerary](/graphql/update-itinerary.graphql)                                        | Updates the itinerary, supporting various user content and media                                                                               |
| [getItinerary](/graphql/get-itinerary.graphql)                                              | Retrieves the itinerary, with a total count of the number of locations added                                                                   |
| [enableItineraryAutoRoute](/graphql/enable-itinerary-auto-route.graphql)                    | Enables automatically adding directions between added locations                                                                                |
| [disableItineraryAutoRoute](/graphql/disable-itinerary-auto-route.graphql)                  | Disables automatically adding directions between added locations                                                                               |
| [findItineraryLocationByPlaceIdQuery](/graphql/find-itinerary-location-by-place-id.graphql) | Finds an itinerary location in the supplied itinerary having a matching place ID                                                               |
| [createItineraryLocation](/graphql/create-itinerary-location.graphql)                       | Adds a new stop to an itinerary                                                                                                                |
| [updateItineraryLocation](/graphql/update-itinerary-location.graphql)                       | Updates the itinerary location, supporting various user content and media                                                                      |
| [getItineraryLocation](/graphql/get-itinerary-location.graphql)                             | Retrieves the itinerary location (and associated place information if avialable)                                                               |
| [getItineraryDirections](/graphql/get-itinerary-directions.graphql)                         | Retrieves the itinerary directions between locations                                                                                           |
| [deleteItineraryLocation](/graphql/delete-itinerary-location.graphql)                       | Removes the itinerary location from the itinerary                                                                                              |
| [listItineraryLocations](/graphql/list-itinerary-locations.graphql)                         | Creates a list of the itinerary locations in sequence, exposing directions between the locations (such as distance and durations or polylines) |
| [moveItineraryLocationAfter](/graphql/move-itinerary-location-after.graphql)                | Moves the itinerary location after another location in the sequence                                                                            |
| [moveItineraryLocationToStart](/graphql/move-itinerary-location-to-start.graphql)           | Moves the itinerary location to the first position in the sequence                                                                             |
| [updateItineraryLocationIsOptional](/graphql/update-itinerary-location-is-optional.graphql) | Mark the location as 'optional' which will skip directions to this location and move on to next                                                |

The SDK provides these functions for common use cases of the GraphQL API. The
API does support more complex structuring, custom data and use cases which will
likely be beyond the scope of this SDK.

### Place Information

### Collections (Area Guides, etc)

## Requirements

The get started, you need to obtain your API Access Token. This is required
in order to make requests on the GraphQL end-point.

## SDK Client Options

Alpaca offers several versions of the JavaScript SDK to suit the preferred
development environment and various developer preferences.

| GraphQL Client                                            |                                                                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [graphql-request](packages/graphql-request) (recommended) | Minimal GraphQL client supporting Node and browsers for scripts or simple apps                       |
| [urql](packages/urql)                                     | A versatile GraphQL client for developing with React/Preact, Vue or Svelte                           |
| [react-query](packages/react-query)                       | SDK driven by performant and powerful data synchronization for react                                 |
| [react-apollo](packages/react-apollo)                     | Full featured GraphQL development client including powerful caching and state management for React   |
| [vue-apollo](packages/vue-apollo)                         | Full featured GraphQL development client including powerful caching and state management for Vue     |
| [stencil-apollo](packages/stencil-apollo)                 | Full featured GraphQL development client including powerful caching and state management for Stencil |

### Something Else?

Let us know what your preferences are and we will see if we are able to support
any other alternatives.

It is also possible to setup any supporting GraphQL client and copy the
[Alpaca SDK GraphQL Documents](/graphql) and leverage these in your
implementation.

### Licensing and Support

These libraries are licensed under MIT and are community supported.

### Extending Functionality

The SDK is driven by a number of [GraphQL documents](/graphql). You can
fork this project if you wish to extend your own queries and mutations as
documented on the [GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
and consider self-hosting for your use case or submitting a pull-request.
