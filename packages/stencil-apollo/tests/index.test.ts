import * as graphql from '../src/index';

test('index exports', () => {
  // Collection
  expect(typeof graphql.CreateCollectionLocationComponent).toBe('function');
  expect(typeof graphql.DeleteCollectionLocationComponent).toBe('function');
  expect(typeof graphql.FindCollectionLocationIdsByExternalComponent).toBe('function');
  expect(typeof graphql.FindCollectionLocationIdsByTagComponent).toBe('function');
  expect(typeof graphql.FindCollectionLocationsByExternalComponent).toBe('function');
  expect(typeof graphql.FindCollectionLocationsByTagComponent).toBe('function');
  expect(typeof graphql.GetCollectionComponent).toBe('function');
  expect(typeof graphql.ListCollectionsComponent).toBe('function');
  expect(typeof graphql.UpdateCollectionLocationComponent).toBe('function');

  // Itinerary
  expect(typeof graphql.CreateItineraryDirectionsComponent).toBe('function');
  expect(typeof graphql.CreateItineraryLocationComponent).toBe('function');
  expect(typeof graphql.CreateItineraryComponent).toBe('function');
  expect(typeof graphql.DeleteItineraryLocationComponent).toBe('function');
  expect(typeof graphql.DeleteItineraryComponent).toBe('function');
  expect(typeof graphql.DisableItineraryAutoRouteComponent).toBe('function');
  expect(typeof graphql.EnableItineraryAutoRouteComponent).toBe('function');
  expect(typeof graphql.FindItineraryLocationsByPlaceIdComponent).toBe('function');
  expect(typeof graphql.FindItineraryLocationIdsByPlaceIdComponent).toBe('function');
  expect(typeof graphql.GetItineraryDirectionsComponent).toBe('function');
  expect(typeof graphql.GetItineraryLocationComponent).toBe('function');
  expect(typeof graphql.GetItineraryComponent).toBe('function');
  expect(typeof graphql.ListItinerariesComponent).toBe('function');
  expect(typeof graphql.ListItineraryLocationsComponent).toBe('function');
  expect(typeof graphql.MoveItineraryLocationAfterComponent).toBe('function');
  expect(typeof graphql.MoveItineraryLocationToStartComponent).toBe('function');
  expect(typeof graphql.UpdateItineraryLocationIsOptionalComponent).toBe('function');
  expect(typeof graphql.UpdateItineraryLocationComponent).toBe('function');
  expect(typeof graphql.UpdateItineraryComponent).toBe('function');

  // Media
  expect(typeof graphql.GetMediaImageComponent).toBe('function');

  // Place
  expect(typeof graphql.AutocompleteSearchPlaceComponent).toBe('function');
  expect(typeof graphql.GetPlaceComponent).toBe('function');
  expect(typeof graphql.ReverseSearchPlaceByPositionComponent).toBe('function');

  // Profile
  expect(typeof graphql.GetProfileComponent).toBe('function');
  expect(typeof graphql.ListAuthorizedProfilesComponent).toBe('function');

  // Route
  expect(typeof graphql.SearchRoutesBetweenPositionsComponent).toBe('function');
});
