# Alpaca Travel GraphQL SDK for fetch

A basic fetch based SDK for use in the browser.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/@alpaca-travel/graph-sdk-fetch@latest/dist/umd/graph-sdk.min.js"></script>
  </head>

  <body>
    <div id="app"></div>

    <script type="text/javascript">
      // Update below
      const ACCESS_TOKEN = "UPDATE_WITH_YOUR_ACCESS_TOKEN";

      // Create the SDK
      const sdk = alpacaGraphSdk.getClientSdk({
        url: `https://withalpaca.com/api/graphql?accessToken=${ACCESS_TOKEN}`,
      });

      // Perform a SDK function
      sdk
        .getItinerary({
          id: "itinerary/0mttpRn7spYNDIV979fHbE",
        })
        .then(({ data }) => console.log(data));
    </script>
  </body>
</html>
```
