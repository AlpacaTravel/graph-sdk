# graph-sdk

[![Build Status](https://travis-ci.com/AlpacaTravel/graph-sdk.svg?branch=master)](https://travis-ci.com/AlpacaTravel/graph-sdk)[![Coverage Status](https://coveralls.io/repos/github/AlpacaTravel/graph-sdk/badge.svg?branch=master)](https://coveralls.io/github/AlpacaTravel/graph-sdk?branch=master)![MIT](https://img.shields.io/npm/l/@alpaca-travel/graph-sdk)

This project is in a WIP.

The Alpaca graph-sdk utilises the GraphQL API to access Alpaca resources. See the GraphQL documentation for information about queries and mutations.

## Quickstart

The get started, you need to obtain an API Key.

### Alpaca CDN

Include the JavaScript file in your `<head>` of your HTML file. This will expose the alpaca library to the `window.alpaca` namespace.

```html
<script src="https://cdn.alpaca.dev/@alpaca-travel/graph-sdk@latest/dist/bundle.js"></script>
```

This is served through an Amazon CloudFront CDN instance, and using the bundle version offers
code splitting to optimise network traffic. By default, we will send only the minimal code and load code/dependent services on demand as they are needed.

### Module Bundler

Install the npm Package.

```shell
npm install @alpaca-travel/graph-sdk
```

Use the package through importing/requiring.

```javascript
import { Client } from '@alpaca-travel/graph-sdk';
// or "const { Client } = require('@alpaca-travel/graph-sdk');
```

## GraphQL Queries

See [GraphQL](https://github.com/AlpacaTravel/graph-sdk/tree/master/docs/graphql.md) to get started with your GraphQL queries, or alternatively if you prefer a simpler API surface, you can use [exposed API functions](https://github.com/AlpacaTravel/graph-sdk/blob/master/docs/methods.md).

## See also

- [Svelte Demo](https://github.com/AlpacaTravel/graph-sdk-svelte-demo)
