# Alpaca Travel GraphQL SDK for React + urql

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via urql.

- [SDK API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-urql/docs)
- [Alpaca Travel GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
- [Alternative SDK Versions](/README.md)

## Installation

Via NPM:

```
npm install urql graphql graphql-tag @alpaca-travel/graph-sdk-react-urql --save
```

Via Yarn:

```
yarn add urql graphql graphql-tag @alpaca-travel/graph-sdk-react-urql
```

## Getting Started

In order to configure your application for development with `urql`, you'll need
to refer to the
[the urql basics](https://formidable.com/open-source/urql/docs/basics/). You'll
learn how to setup urql with React/Preact, Vue, Svelte or other.

```javascript
// Obtain your Alpaca Access Token
const alpacaAccessToken = "pk.xxx";

// Create a urql
const client = createClient({
  url: `https://withalpaca.com/api/graphql?accessToken={alpacaAccessToken}`,
});
```

## API Documentation

The capabilities of the API are documented using typedoc.

See
[API Documentation](https://alpacatravel.github.io/graph-sdk/packages/react-urql/docs)

#### Using graphql-codegen

You can leverage the tool `graphql-codegen` in order to generate additional
hooks and capability for your application.

Install graphql-codegen and the related libraries to your project

```shell
npm install -D @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/introspection @graphql-codegen/jsdoc @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-urql
```

See the [graphql-codegen configuration](./codegen-typescript-example.yml) for an
example of the configuration used for generating out the SDK.

1. Copy the `codegen-typescript-example.yml` file as `codegen.yml` in your
   workspace
2. Create the folder in `src/graphql` and place in your graphql operations
3. Add the script `"graphql-codegen": "graphql-codegen --config codegen.yml"` to
   your package.json "scripts" section
4. Run `npm run graphql-codegen` to generate your own `src/graphql/index.ts`
   file

The benefit of using graphql-codegen is that your Typescript types will be
created, as well as providing the API surface for you to call without embedding
your GraphQL queries/mutations within the component.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
