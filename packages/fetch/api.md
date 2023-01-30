# API Documentation

Welcome to the API Documentation for the Alpaca Travel GraphQL JavaScript SDK
for use with browser based fetch.

- See [Installation and Getting Started](https://alpacatravel.github.io/graph-sdk/packages/fetch/)
  

## Collection

- **[useCreateCollectionLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useCreateCollectionLocationMutation.html)**
  Creates an collection location within the provided collection
- **[useDeleteCollectionLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useDeleteCollectionLocationMutation.html)**
  Removes a collection location from a collection
- **[useFindCollectionLocationIdsByExternalQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useFindCollectionLocationIdsByExternalQuery.html)**
  Find collection location IDs by external identifiers
- **[useFindCollectionLocationIdsByTagQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useFindCollectionLocationIdsByTagQuery.html)**
  Find collection location IDs by a specific tag
- **[useFindCollectionLocationsByExternalQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useFindCollectionLocationsByExternalQuery.html)**
  Find collection location IDs by an external ID
- **[useFindCollectionLocationsByTagQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useFindCollectionLocationsByTagQuery.html)**
  Find collection locations by a specific tag
- **[useGetCollectionLocationQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetCollectionLocationQuery.html)**
  Obtain informationa bout a collection location
- **[useGetCollectionQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetCollectionQuery.html)**
  Obtains information about a collection
- **[useListCollectionsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useListCollectionsQuery.html)**
  Obtain a listing of the collections for a profile
- **[useUpdateCollectionLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useUpdateCollectionLocationMutation.html)**
  Update the collection location

## Itinerary

- **[useCreateItineraryDirectionsMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useCreateItineraryDirectionsMutation.html)**
  Creates itinerary directions for between locations in an itinerary manually
- **[useCreateItineraryLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useCreateItineraryLocationMutation.html)**
  Creates a new Itinerary Location, which can contain place information
- **[useCreateItineraryMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useCreateItineraryMutation.html)**
  Creates a new Itinerary data structure for organising an itinerary
- **[useDeleteItineraryLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useDeleteItineraryLocationMutation.html)**
  Removes an itinerary location from an itinerary
- **[useDeleteItineraryMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useDeleteItineraryMutation.html)**
  Removes an itinerary
- **[useDisableItineraryAutoRouteMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useDisableItineraryAutoRouteMutation.html)**
  Modifies an itinerary to disable the automatic routing feature, which will turn off determining the directions between the sequence of locations that the itinerary contains
- **[useEnableItineraryAutoRouteMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useEnableItineraryAutoRouteMutation.html)**
  Modifies an itinerary to enable a feature that will automatically determine directions between a sequence of itinerary locations at the top level
- **[useFindItineraryLocationIdsByPlaceIdQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useFindItineraryLocationIdsByPlaceIdQuery.html)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[useFindItineraryLocationsByPlaceIdQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useFindItineraryLocationsByPlaceIdQuery.html)**
  Checks whether a place has been added to an itinerary, for creating a button state on an "Add to Itinerary" button
- **[useGetItineraryDirectionsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetItineraryDirectionsQuery.html)**
  Obtains an itinerary directions item
- **[useGetItineraryLocationQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetItineraryLocationQuery.html)**
  Loads information about an itinerary location
- **[useGetItineraryQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetItineraryQuery.html)**
  Loads information about an individual itinerary
- **[useListItinerariesQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useListItinerariesQuery.html)**
  Query a list of itineraries from an associated profile
- **[useListItineraryLocationsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useListItineraryLocationsQuery.html)**
  Lists in itinerary locations for a provided Itinerary
- **[useMoveItineraryLocationAfterMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useMoveItineraryLocationAfterMutation.html)**
  Moves an itinerary location after another itinerary location
- **[useMoveItineraryLocationToStartMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useMoveItineraryLocationToStartMutation.html)**
  Moves an itinerary location ahead of other itinerary locations
- **[useUpdateItineraryLocationIsOptionalMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useUpdateItineraryLocationIsOptionalMutation.html)**
  Marks an itinerary location whether it is an optional stop
- **[useUpdateItineraryLocationMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useUpdateItineraryLocationMutation.html)**
  Updates the itinerary location
- **[useUpdateItineraryMutation](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useUpdateItineraryMutation.html)**
  Updates an itinerary

## Media

- **[useGetMediaImageQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetMediaImageQuery.html)**
  Loads information about a media

## Place

- **[useAutocompleteSearchPlaceQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useAutocompleteSearchPlaceQuery.html)**
  Searches for places using Autocomplete search term
- **[useGetPlaceQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetPlaceQuery.html)**
  Gets a place based on the provided place ID
- **[useReverseSearchPlaceByPositionQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useReverseSearchPlaceByPositionQuery.html)**
  Queries a position and returns with matching places

## Profile

- **[useGetProfileQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useGetProfileQuery.html)**
  Obtains the profile by the provided ID
- **[useListAuthorizedProfilesQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useListAuthorizedProfilesQuery.html)**
  Obtains a list of the authorized profiles for the current access token

## Route

- **[useSearchRoutesBetweenPositionsQuery](https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/functions/useSearchRoutesBetweenPositionsQuery.html)**
  Searches for routes between provided positions

