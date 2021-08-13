import * as graphql from '../src/index';

test('index exports', () => {
  expect(typeof graphql.useCreateItineraryLocationMutation).toBe('function');
  expect(typeof graphql.useCreateItineraryMutation).toBe('function');
  expect(typeof graphql.useDeleteItineraryLocationMutation).toBe('function');
  expect(typeof graphql.useDisableItineraryAutoRouteMutation).toBe('function');
  expect(typeof graphql.useEnableItineraryAutoRouteMutation).toBe('function');
  expect(typeof graphql.useGetItineraryDirectionsQuery).toBe('function');
  expect(typeof graphql.useGetItineraryQuery).toBe('function');
  expect(typeof graphql.useGetPlaceQuery).toBe('function');
  expect(typeof graphql.useListItineraryLocationsQuery).toBe('function');
  expect(typeof graphql.useMoveItineraryLocationAfterMutation).toBe('function');
  expect(typeof graphql.useMoveItineraryLocationToStartMutation).toBe('function');
  expect(typeof graphql.useUpdateItineraryLocationIsOptionalMutation).toBe('function');
  expect(typeof graphql.useUpdateItineraryLocationMutation).toBe('function');
  expect(typeof graphql.useUpdateItineraryMutation).toBe('function');
});
