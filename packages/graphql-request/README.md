# Alpaca Travel GraphQL SDK for graphql-request

> This package assist with a basic SDK for developing applications on top of
> Alpaca Travel GraphQL API via graphql-request.

See [alternative SDK versions](/packages) available or review the [GraphQL documentation](https://github.com/AlpacaTravel/graphql-docs).

## Installation

Via NPM:

```
npm install graphql-request graphql graphql-tag @alpaca-travel/graph-sdk-graphql-request --save
```

Via Yarn:

```
yarn add graphql-request graphql graphql-tag @alpaca-travel/graph-sdk-graphql-request
```

## Typescript Types

The SDK includes typescript types to assist you in working with data responses.

## Getting Started

The below shows a way to create a SDK instance with a configured graphql-request
client.

```javascript
import alpaca from '@alpaca-travel/graph-sdk-graphql-request';

// Initialise the SDK
const sdk = alpaca.getSdk({
  // Include your Access Token
  accessToken: 'XXX',

  // Intercept using a wrapper..
  // withWrapper: myWrapperFunction

  // Provide your own graphql instance..
  // client: myClient,
});
```

### Example call

```javascript
// Call in an itinerary
const data = await sdk.getItinerary({ id: 'itinerary/123' });

// Console log the total count
console.log(data.itinerary.locations.totalCount);
```

## API Surface for graphql-request

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

### Extending Functionality

The SDK is driven by a number of [GraphQL documents](/graphql). You can
fork this project if you wish to extend your own queries and mutations as
documented on the [GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
and consider self-hosting for your use case or submitting a pull-request.

# Further Reading

- [Alpaca GraphQL JavaScript SDK](/README.md)
- [Alpaca GraphQL API Documentation](https://github.com/AlpacaTravel/graphql-docs)
