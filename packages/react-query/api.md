# API Documentation

Welcome to the API Documentation for the Alpaca Travel GraphQL JavaScript SDK
for use with React-Query.

- See [Installation and Getting Started](https://alpacatravel.github.io/graph-sdk/packages/react-query/)
  

## Collection

- **[useCreateCollectionLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useCreateCollectionLocationMutation)**
  Creates an collection location within the provided collection
- **[useDeleteCollectionLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useDeleteCollectionLocationMutation)**
  Removes a collection location from a collection
- **[useFindCollectionLocationIdsByExternalQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useFindCollectionLocationIdsByExternalQuery)**
  Find collection location IDs by external identifiers
- **[useFindCollectionLocationIdsByTagQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useFindCollectionLocationIdsByTagQuery)**
  Find collection location IDs by a specific tag
- **[useFindCollectionLocationsByExternalQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useFindCollectionLocationsByExternalQuery)**
  Find collection location IDs by an external ID
- **[useFindCollectionLocationsByTagQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useFindCollectionLocationsByTagQuery)**
  Find collection locations by a specific tag
- **[useGetCollectionLocationQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetCollectionLocationQuery)**
  Obtain informationa bout a collection location
- **[useGetCollectionQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetCollectionQuery)**
  Obtains information about a collection
- **[useListCollectionsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useListCollectionsQuery)**
  Obtain a listing of the collections for a profile
- **[useUpdateCollectionLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useUpdateCollectionLocationMutation)**
  Update the collection location

## Itinerary

- **[useCreateItineraryDirectionsMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useCreateItineraryDirectionsMutation)**
  Creates itinerary directions for between locations in an itinerary manually
- **[useCreateItineraryLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useCreateItineraryLocationMutation)**
  Creates a new Itinerary Location, which can contain place information
- **[useCreateItineraryMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useCreateItineraryMutation)**
  Creates a new Itinerary data structure for organising an itinerary
- **[useDeleteItineraryLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useDeleteItineraryLocationMutation)**
  Removes an itinerary location from an itinerary
- **[useDeleteItineraryMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useDeleteItineraryMutation)**
  Removes an itinerary
- **[useDisableItineraryAutoRouteMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useDisableItineraryAutoRouteMutation)**
  Modifies an itinerary to disable the automatic routing feature, which will turn off determining the directions between the sequence of locations that the itinerary contains
- **[useEnableItineraryAutoRouteMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useEnableItineraryAutoRouteMutation)**
  Modifies an itinerary to enable a feature that will automatically determine directions between a sequence of itinerary locations at the top level
- **[useFindItineraryLocationIdsByPlaceIdQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useFindItineraryLocationIdsByPlaceIdQuery)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[useFindItineraryLocationsByPlaceIdQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useFindItineraryLocationsByPlaceIdQuery)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[useGetItineraryDirectionsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetItineraryDirectionsQuery)**
  Obtains an itinerary directions item
- **[useGetItineraryLocationQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetItineraryLocationQuery)**
  Loads information about an itinerary location
- **[useGetItineraryQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetItineraryQuery)**
  Loads information about an individual itinerary
- **[useListItinerariesQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useListItinerariesQuery)**
  Query a list of itineraries from an associated profile
- **[useListItineraryLocationsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useListItineraryLocationsQuery)**
  Lists in itinerary locations for a provided Itinerary
- **[useMoveItineraryLocationAfterMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useMoveItineraryLocationAfterMutation)**
  Moves an itinerary location after another itinerary location
- **[useMoveItineraryLocationToStartMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useMoveItineraryLocationToStartMutation)**
  Moves an itinerary location ahead of other itinerary locations
- **[useUpdateItineraryLocationIsOptionalMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useUpdateItineraryLocationIsOptionalMutation)**
  Marks an itinerary location whether it is an optional stop
- **[useUpdateItineraryLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useUpdateItineraryLocationMutation)**
  Updates the itinerary location
- **[useUpdateItineraryMutation](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useUpdateItineraryMutation)**
  Updates an itinerary

## Media

- **[useGetMediaImageQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetMediaImageQuery)**
  Loads information about a media

## Place

- **[useAutocompleteSearchPlaceQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useAutocompleteSearchPlaceQuery)**
  Searches for places using Autocomplete search term
- **[useGetPlaceQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetPlaceQuery)**
  Gets a place based on the provided place ID
- **[useReverseSearchPlaceByPositionQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useReverseSearchPlaceByPositionQuery)**
  Queries a position and returns with matching places

## Profile

- **[useGetProfileQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useGetProfileQuery)**
  Obtains the profile by the provided ID
- **[useListAuthorizedProfilesQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useListAuthorizedProfilesQuery)**
  Obtains a list of the authorized profiles for the current access token

## Route

- **[useSearchRoutesBetweenPositionsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-query/docs/modules.html#useSearchRoutesBetweenPositionsQuery)**
  Searches for routes between provided positions

