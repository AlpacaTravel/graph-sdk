# API Summary

```html
<script src="https://unpkg.com/@alpaca-travel/graph-sdk-fetch@latest/dist/umd/graph-sdk.min.js"></script>

<script type="text/javascript">
// Create the SDK
const sdk = alpacaGraphSdk.getClientSdk({
  url: 'https://withalpaca.com/api/graphql?accessToken=UPDATE_WITH_YOUR_ACCESS_TOKEN',
});
</script>
```
  

## Collection

- **[sdk.createCollectionLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Creates an collection location within the provided collection
- **[sdk.deleteCollectionLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Removes a collection location from a collection
- **[sdk.findCollectionLocationIdsByExternal(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Find collection location IDs by external identifiers
- **[sdk.findCollectionLocationIdsByTag(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Find collection location IDs by a specific tag
- **[sdk.findCollectionLocationsByExternal(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Find collection location IDs by an external ID
- **[sdk.findCollectionLocationsByTag(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Find collection locations by a specific tag
- **[sdk.getCollectionLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Obtain informationa bout a collection location
- **[sdk.getCollection(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Obtains information about a collection
- **[sdk.listCollections(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Obtain a listing of the collections for a profile
- **[sdk.updateCollectionLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Update the collection location

## Itinerary

- **[sdk.createItineraryDirections(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Creates itinerary directions for between locations in an itinerary manually
- **[sdk.createItineraryLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Creates a new Itinerary Location, which can contain place information
- **[sdk.createItinerary(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Creates a new Itinerary data structure for organising an itinerary
- **[sdk.deleteItineraryLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Removes an itinerary location from an itinerary
- **[sdk.deleteItinerary(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Removes an itinerary
- **[sdk.disableItineraryAutoRoute(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Modifies an itinerary to disable the automatic routing feature, which will turn off determining the directions between the sequence of locations that the itinerary contains
- **[sdk.enableItineraryAutoRoute(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Modifies an itinerary to enable a feature that will automatically determine directions between a sequence of itinerary locations at the top level
- **[sdk.findItineraryLocationIdsByPlaceId(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[sdk.findItineraryLocationsByPlaceId(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[sdk.getItineraryDirections(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Obtains an itinerary directions item
- **[sdk.getItineraryLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Loads information about an itinerary location
- **[sdk.getItinerary(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Loads information about an individual itinerary
- **[sdk.listItineraries(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Query a list of itineraries from an associated profile
- **[sdk.listItineraryLocations(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Lists in itinerary locations for a provided Itinerary
- **[sdk.moveItineraryLocationAfter(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Moves an itinerary location after another itinerary location
- **[sdk.moveItineraryLocationToStart(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Moves an itinerary location ahead of other itinerary locations
- **[sdk.updateItineraryLocationIsOptional(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Marks an itinerary location whether it is an optional stop
- **[sdk.updateItineraryLocation(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Updates the itinerary location
- **[sdk.updateItinerary(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Updates an itinerary

## Media

- **[sdk.getMediaImage(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Loads information about a media

## Place

- **[sdk.autocompleteSearchPlace(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Searches for places using Autocomplete search term
- **[sdk.getPlace(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Gets a place based on the provided place ID
- **[sdk.reverseSearchPlaceByPosition(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Queries a position and returns with matching places

## Profile

- **[sdk.getProfile(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Obtains the profile by the provided ID
- **[sdk.listAuthorizedProfiles(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Obtains a list of the authorized profiles for the current access token

## Route

- **[sdk.searchRoutesBetweenPositions(...)](https://alpacatravel.github.io/graph-sdk/packages/fetch/docs/modules.html#getSdk)**
  Searches for routes between provided positions

