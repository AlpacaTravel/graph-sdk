# Alpaca Travel GraphQL SDK for fetch

[![npm](https://img.shields.io/npm/v/@alpaca-travel/graph-sdk-fetch)](https://www.npmjs.com/package/@alpaca-travel/graph-sdk-fetch)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpaca-travel/graph-sdk-fetch)](https://www.npmjs.com/package/@alpaca-travel/graph-sdk-fetch)[![NPM](https://img.shields.io/npm/l/@alpaca-travel/graph-sdk-fetch)](https://www.npmjs.com/package/@alpaca-travel/graph-sdk-fetch)

A basic fetch based SDK for use in the browser.

See More:

- [SDK Documentation](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/)

## UNPKG CDN

You can use a hosted version of the SDK via unpkg.com which mirrors and hosts
the release made to NPM.

_Latest release_

```
https://unpkg.com/@alpaca-travel/graph-sdk-fetch@latest/dist/umd/graph-sdk.min.js
```

_Example pinned to version 2_

You can also target a specific version in the URL, pinning the version following
a semver style. This will ensure that breaking changes do not affect your
implementation.

```
https://unpkg.com/@alpaca-travel/graph-sdk-fetch@2/dist/umd/graph-sdk.min.js
```

## Example HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Include the script in your head -->
    <script src="https://unpkg.com/@alpaca-travel/graph-sdk-fetch@latest/dist/umd/graph-sdk.min.js"></script>
  </head>

  <body>
    <script type="text/javascript">
      // Update below
      const ACCESS_TOKEN = "UPDATE_WITH_YOUR_ACCESS_TOKEN";

      // Create the SDK
      const sdk = alpacaGraphSdk.getClientSdk({
        url: `https://withalpaca.com/api/graphql?accessToken=${ACCESS_TOKEN}`,
      });

      // Perform a SDK function
      // See the rest of the API Documentation
      // https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/
      sdk
        .getItinerary({
          id: "itinerary/0mttpRn7spYNDIV979fHbE",
        })
        .then(({ data }) => console.log(data))
        .catch(console.error);
    </script>
  </body>
</html>
```
