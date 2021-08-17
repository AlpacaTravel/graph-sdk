# API Summary

```javascript
import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@alpaca-travel/graph-sdk-graphql-request';

// Create a graphql-client
// Note: Substitute your API Access Token
const client = new GraphQLClient('https://withalpaca.com/api/graphql?accessToken=xxx');

// Initialise the SDK
const sdk = getSdk(client);
```

## Collection

- **[sdk.createCollectionLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Creates an collection location within the provided collection
- **[sdk.deleteCollectionLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Removes a collection location from a collection
- **[sdk.findCollectionLocationIdsByExternal(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Find collection location IDs by external identifiers
- **[sdk.findCollectionLocationIdsByTag(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Find collection location IDs by a specific tag
- **[sdk.findCollectionLocationsByExternal(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Find collection location IDs by an external ID
- **[sdk.findCollectionLocationsByTag(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Find collection locations by a specific tag
- **[sdk.getCollectionLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Obtain informationa bout a collection location
- **[sdk.getCollection(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Obtains information about a collection
- **[sdk.listCollections(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Obtain a listing of the collections for a profile
- **[sdk.updateCollectionLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Update the collection location

## Itinerary

- **[sdk.createItineraryDirections(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Creates itinerary directions for between locations in an itinerary manually
- **[sdk.createItineraryLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Creates a new Itinerary Location, which can contain place information
- **[sdk.createItinerary(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Creates a new Itinerary data structure for organising an itinerary
- **[sdk.deleteItineraryLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Removes an itinerary location from an itinerary
- **[sdk.deleteItinerary(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Removes an itinerary
- **[sdk.disableItineraryAutoRoute(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Modifies an itinerary to disable the automatic routing feature, which will turn off determining the directions between the sequence of locations that the itinerary contains
- **[sdk.enableItineraryAutoRoute(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Modifies an itinerary to enable a feature that will automatically determine directions between a sequence of itinerary locations at the top level
- **[sdk.findItineraryLocationIdsByPlaceId(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[sdk.findItineraryLocationsByPlaceId(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[sdk.getItineraryDirections(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Obtains an itinerary directions item
- **[sdk.getItineraryLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Loads information about an itinerary location
- **[sdk.getItinerary(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Loads information about an individual itinerary
- **[sdk.listItineraries(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Query a list of itineraries from an associated profile
- **[sdk.listItineraryLocations(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Lists in itinerary locations for a provided Itinerary
- **[sdk.moveItineraryLocationAfter(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Moves an itinerary location after another itinerary location
- **[sdk.moveItineraryLocationToStart(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Moves an itinerary location ahead of other itinerary locations
- **[sdk.updateItineraryLocationIsOptional(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Marks an itinerary location whether it is an optional stop
- **[sdk.updateItineraryLocation(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Updates the itinerary location
- **[sdk.updateItinerary(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Updates an itinerary

## Media

- **[sdk.getMediaImage(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Loads information about a media

## Place

- **[sdk.autocompleteSearchPlace(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Searches for places using Autocomplete search term
- **[sdk.getPlace(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Gets a place based on the provided place ID
- **[sdk.reverseSearchPlaceByPosition(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Queries a position and returns with matching places

## Profile

- **[sdk.getProfile(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Obtains the profile by the provided ID
- **[sdk.listAuthorizedProfiles(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Obtains a list of the authorized profiles for the current access token

## Route

- **[sdk.searchRoutesBetweenPositions(...)](/packages/graphql-codegen/docs/modules.html#getSdk)**
  Searches for routes between provided positions
