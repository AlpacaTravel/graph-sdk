
# Alpaca GraphQL SDK Capabilities

> The Alpaca GraphQL SDK is driven by a number of GraphQL queries and mutations.

This location contains a number of example GraphQL documents to provide the
Alpaca JavaScript SDK with a basic set of capabilities.

## Documentation for GraphQL

We provide extensive GraphQL documentation, including covering topics,
tutorials and example applications in order to assist developers leverage the
GraphQL for their needs.

- [Read the Alpaca GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
  

### Collection

- **[create-collection-location](/graphql/collection/create-collection-location.graphql)**
  Creates an collection location within the provided collection
- **[delete-collection-location](/graphql/collection/delete-collection-location.graphql)**
  Removes a collection location from a collection
- **[find-collection-location-ids-by-external](/graphql/collection/find-collection-location-ids-by-external.graphql)**
  Find collection location IDs by external identifiers
- **[find-collection-location-ids-by-tag](/graphql/collection/find-collection-location-ids-by-tag.graphql)**
  Find collection location IDs by a specific tag
- **[find-collection-locations-by-external](/graphql/collection/find-collection-locations-by-external.graphql)**
  Find collection location IDs by an external ID
- **[find-collection-locations-by-tag](/graphql/collection/find-collection-locations-by-tag.graphql)**
  Find collection locations by a specific tag
- **[get-collection-location](/graphql/collection/get-collection-location.graphql)**
  Obtain informationa bout a collection location
- **[get-collection](/graphql/collection/get-collection.graphql)**
  Obtains information about a collection
- **[list-collections](/graphql/collection/list-collections.graphql)**
  Obtain a listing of the collections for a profile
- **[update-collection-location](/graphql/collection/update-collection-location.graphql)**
  Update the collection location

### Itinerary

- **[create-itinerary-directions](/graphql/itinerary/create-itinerary-directions.graphql)**
  Creates itinerary directions for between locations in an itinerary manually
- **[create-itinerary-location](/graphql/itinerary/create-itinerary-location.graphql)**
  Creates a new Itinerary Location, which can contain place information
- **[create-itinerary](/graphql/itinerary/create-itinerary.graphql)**
  Creates a new Itinerary data structure for organising an itinerary
- **[delete-itinerary-location](/graphql/itinerary/delete-itinerary-location.graphql)**
  Removes an itinerary location from an itinerary
- **[delete-itinerary](/graphql/itinerary/delete-itinerary.graphql)**
  Removes an itinerary
- **[disable-itinerary-auto-route](/graphql/itinerary/disable-itinerary-auto-route.graphql)**
  Modifies an itinerary to disable the automatic routing feature, which will turn off determining the directions between the sequence of locations that the itinerary contains
- **[enable-itinerary-auto-route](/graphql/itinerary/enable-itinerary-auto-route.graphql)**
  Modifies an itinerary to enable a feature that will automatically determine directions between a sequence of itinerary locations at the top level
- **[find-itinerary-location-ids-by-place-id](/graphql/itinerary/find-itinerary-location-ids-by-place-id.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[find-itinerary-locations-by-place-id](/graphql/itinerary/find-itinerary-locations-by-place-id.graphql)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[get-itinerary-directions](/graphql/itinerary/get-itinerary-directions.graphql)**
  Obtains an itinerary directions item
- **[get-itinerary-location](/graphql/itinerary/get-itinerary-location.graphql)**
  Loads information about an itinerary location
- **[get-itinerary](/graphql/itinerary/get-itinerary.graphql)**
  Loads information about an individual itinerary
- **[list-itineraries](/graphql/itinerary/list-itineraries.graphql)**
  Query a list of itineraries from an associated profile
- **[list-itinerary-locations](/graphql/itinerary/list-itinerary-locations.graphql)**
  Lists in itinerary locations for a provided Itinerary
- **[move-itinerary-location-after](/graphql/itinerary/move-itinerary-location-after.graphql)**
  Moves an itinerary location after another itinerary location
- **[move-itinerary-location-to-start](/graphql/itinerary/move-itinerary-location-to-start.graphql)**
  Moves an itinerary location ahead of other itinerary locations
- **[update-itinerary-location-is-optional](/graphql/itinerary/update-itinerary-location-is-optional.graphql)**
  Marks an itinerary location whether it is an optional stop
- **[update-itinerary-location](/graphql/itinerary/update-itinerary-location.graphql)**
  Updates the itinerary location
- **[update-itinerary](/graphql/itinerary/update-itinerary.graphql)**
  Updates an itinerary

### Media

- **[get-media-image](/graphql/media/get-media-image.graphql)**
  Loads information about a media

### Place

- **[autocomplete-search-place](/graphql/place/autocomplete-search-place.graphql)**
  Searches for places using Autocomplete search term
- **[get-place](/graphql/place/get-place.graphql)**
  Gets a place based on the provided place ID
- **[reverse-search-place-by-position](/graphql/place/reverse-search-place-by-position.graphql)**
  Queries a position and returns with matching places

### Profile

- **[get-profile](/graphql/profile/get-profile.graphql)**
  Obtains the profile by the provided ID
- **[list-authorized-profiles](/graphql/profile/list-authorized-profiles.graphql)**
  Obtains a list of the authorized profiles for the current access token

### Route

- **[search-routes-between-positions](/graphql/route/search-routes-between-positions.graphql)**
  Searches for routes between provided positions


## Contributing

If you would like to share an operation that is useful to others, please send us
a pull request with the operation created in the appropriate sub-folder. If you
need to correct a comment, please update the operations directly, and not the 
generated markdown
  