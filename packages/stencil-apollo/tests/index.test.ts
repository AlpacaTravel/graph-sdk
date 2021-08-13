import * as graphql from '../src/index';

test('index exports', () => {
  expect(typeof graphql.FindItineraryLocationByPlaceIdComponent).toBe('function');
  expect(typeof graphql.CreateItineraryDirectionsComponent).toBe('function');
  expect(typeof graphql.CreateItineraryLocationComponent).toBe('function');
  expect(typeof graphql.CreateItineraryComponent).toBe('function');
  expect(typeof graphql.DeleteItineraryLocationComponent).toBe('function');
  expect(typeof graphql.DisableItineraryAutoRouteComponent).toBe('function');
  expect(typeof graphql.EnableItineraryAutoRouteComponent).toBe('function');
  expect(typeof graphql.GetItineraryDirectionsComponent).toBe('function');
  expect(typeof graphql.GetItineraryComponent).toBe('function');
  expect(typeof graphql.GetPlaceComponent).toBe('function');
  expect(typeof graphql.ListItineraryLocationsComponent).toBe('function');
  expect(typeof graphql.MoveItineraryLocationAfterComponent).toBe('function');
  expect(typeof graphql.MoveItineraryLocationToStartComponent).toBe('function');
  expect(typeof graphql.UpdateItineraryLocationIsOptionalComponent).toBe('function');
  expect(typeof graphql.UpdateItineraryLocationComponent).toBe('function');
  expect(typeof graphql.UpdateItineraryComponent).toBe('function');
});
