<div align="center">
  <img alt="Developer Documentation" src="https://developer.alpacamaps.com/_media/logo.svg" height="75" width=75 />
</div>

## Alpaca Travel GraphQL JavaScript SDK

> [Alpaca Travel](https://alpaca.travel) offers an SDK to assist developers with
> building travel applications and websites. The SDK provides some 'out of the
> box' functionality that can accelerate the adoption of developers without
> involving making GraphQL calls themselves.

Alpaca Travel offer an extensive managed GraphQL API that developers can easily
integrate into their applications and websites. The JavaScript SDK provides a
onboarding approach for developers that may want to leverage a simple SDK
oppposed to developing their own queries and mutations with GraphQL directly.

Our SDK's are based on Typescript and setup to work on basic GraphQL based
queries and mutations. We offer several versions of client in order to suit
preferences of developers.

- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)

### Capabilites of SDK

The SDK offers a set of basic capabilities for working with common use cases,
such as creating and editing itineraries or displaying collections of places.

The SDK leverages a series of [GraphQL documents](/graphql) that are built based
on the
[Alpaca GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs).

The SDK leverages the Alpaca GraphQL API which operates as a SaaS platform,
offering all required services such as place provider integration, route and
directions services as well as the data management.

### SDK Client Options

GraphQL is not opinionated with the client you want to use, and as such, Alpaca
have provided a number of SDK options to suit the common development platforms
developers use.

| GraphQL Client                                      |                                                                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [fetch](packages/fetch)                             | Basic fetch SDK for minimal dependency execution in browser                                          |
| [graphql-request](packages/graphql-request)         | Minimal GraphQL client supporting Node and browsers for scripts or simple apps                       |
| [react-apollo](packages/react-apollo) (recommended) | Full featured GraphQL development client including powerful caching and state management for React   |
| [react-query](packages/react-query)                 | SDK driven by performant and powerful data synchronization for react                                 |
| [react-urql](packages/react-urql)                   | A versatile GraphQL client for developing with React/Preact, Vue or Svelte                           |
| [vue-apollo](packages/vue-apollo)                   | Full featured GraphQL development client including powerful caching and state management for Vue     |
| [stencil-apollo](packages/stencil-apollo)           | Full featured GraphQL development client including powerful caching and state management for Stencil |

#### Using Something Else?

Let us know what your preferences are and we will see if we are able to support
any other alternatives.

It is also possible to setup any supporting GraphQL client and copy the
[Alpaca SDK GraphQL Documents](/graphql) and leverage these in your
implementation.

### Licensing and Support

These libraries are licensed under MIT and are community supported.

## Legal Statement

Copyright © 2020-2022 Alpaca Travel. All right reserved.
