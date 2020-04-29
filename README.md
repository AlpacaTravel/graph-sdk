# graph-sdk

[![Build Status](https://travis-ci.com/AlpacaTravel/graph-sdk.svg?branch=master)](https://travis-ci.com/AlpacaTravel/graph-sdk)[![Coverage Status](https://coveralls.io/repos/github/AlpacaTravel/graph-sdk/badge.svg?branch=master)](https://coveralls.io/github/AlpacaTravel/graph-sdk?branch=master)![MIT](https://img.shields.io/npm/l/@alpaca-travel/graph-sdk)

This project is in a WIP.

The Alpaca graph-sdk utilises the GraphQL API to access Alpaca resources. See the GraphQL documentation for information about queries and mutations.

## Quickstart

The get started, you need to obtain an API Key.

### Alpaca CDN

Include the JavaScript file in your `<head>` of your HTML file.

```javascript
<script src="https://cdn.alpaca.dev/@alpaca-travel/graph-sdk@latest/dist/bundle.js"></script>
```

This is served through an Amazon CloudFront instance, and using the bundle version offers
code splitting to optimise network traffic.

### Module Bundler

Install the npm Package.

```shell
npm install @alpaca-travel/graph-sdk
```

Use the package through importing/requiring.

```
import alpaca from '@alpaca-travel/graph-sdk';
// or "const alpaca = require('@alpaca-travel/graph-sdk');
```
