# Alpaca Travel GraphQL SDK for urql

This package assist with a basic SDK for developing applications on top of
Alpaca Travel GraphQL API via urql.

## Installation

Via NPM:

```
npm install @alpaca-travel/graph-sdk-urql --save
```

Via Yarn:

```
yarn add @alpaca-travel/graph-sdk-urql
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
