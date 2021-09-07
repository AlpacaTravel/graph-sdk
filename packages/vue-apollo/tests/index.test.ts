import * as graphql from '../src/index';

test('index exports', () => {
  // Collection
  expect(typeof graphql.useCreateCollectionLocationMutation).toBe('function');
  expect(typeof graphql.useDeleteCollectionLocationMutation).toBe('function');
  expect(typeof graphql.useFindCollectionLocationIdsByExternalQuery).toBe('function');
  expect(typeof graphql.useFindCollectionLocationIdsByTagQuery).toBe('function');
  expect(typeof graphql.useFindCollectionLocationsByExternalQuery).toBe('function');
  expect(typeof graphql.useFindCollectionLocationsByTagQuery).toBe('function');
  expect(typeof graphql.useGetCollectionQuery).toBe('function');
  expect(typeof graphql.useListCollectionsQuery).toBe('function');
  expect(typeof graphql.useUpdateCollectionLocationMutation).toBe('function');

  // Itinerary
  expect(typeof graphql.useCreateItineraryDirectionsMutation).toBe('function');
  expect(typeof graphql.useCreateItineraryLocationMutation).toBe('function');
  expect(typeof graphql.useCreateItineraryMutation).toBe('function');
  expect(typeof graphql.useDeleteItineraryLocationMutation).toBe('function');
  expect(typeof graphql.useDeleteItineraryMutation).toBe('function');
  expect(typeof graphql.useDisableItineraryAutoRouteMutation).toBe('function');
  expect(typeof graphql.useEnableItineraryAutoRouteMutation).toBe('function');
  expect(typeof graphql.useFindItineraryLocationsByPlaceIdQuery).toBe('function');
  expect(typeof graphql.useFindItineraryLocationIdsByPlaceIdQuery).toBe('function');
  expect(typeof graphql.useGetItineraryDirectionsQuery).toBe('function');
  expect(typeof graphql.useGetItineraryLocationQuery).toBe('function');
  expect(typeof graphql.useGetItineraryQuery).toBe('function');
  expect(typeof graphql.useListItinerariesQuery).toBe('function');
  expect(typeof graphql.useListItineraryLocationsQuery).toBe('function');
  expect(typeof graphql.useMoveItineraryLocationAfterMutation).toBe('function');
  expect(typeof graphql.useMoveItineraryLocationToStartMutation).toBe('function');
  expect(typeof graphql.useUpdateItineraryLocationIsOptionalMutation).toBe('function');
  expect(typeof graphql.useUpdateItineraryLocationMutation).toBe('function');
  expect(typeof graphql.useUpdateItineraryMutation).toBe('function');

  // Media
  expect(typeof graphql.useGetMediaImageQuery).toBe('function');

  // Place
  expect(typeof graphql.useAutocompleteSearchPlaceQuery).toBe('function');
  expect(typeof graphql.useGetPlaceQuery).toBe('function');
  expect(typeof graphql.useReverseSearchPlaceByPositionQuery).toBe('function');

  // Profile
  expect(typeof graphql.useGetProfileQuery).toBe('function');
  expect(typeof graphql.useListAuthorizedProfilesQuery).toBe('function');

  // Route
  expect(typeof graphql.useSearchRoutesBetweenPositionsQuery).toBe('function');
});
