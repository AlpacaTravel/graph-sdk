import alpaca from '../src/index';

test('index exports', () => {
  expect(typeof alpaca.getSdk).toBe('function');
});

test('index creates an SDK with a configured client offering the API surface', () => {
  const sdk = alpaca.getSdk({ accessToken: 'example' });

  expect(typeof sdk.createItinerary).toBe('function');
  expect(typeof sdk.createItineraryLocation).toBe('function');
  expect(typeof sdk.deleteItineraryLocation).toBe('function');
  expect(typeof sdk.disableItineraryAutoRoute).toBe('function');
  expect(typeof sdk.enableItineraryAutoRoute).toBe('function');
  expect(typeof sdk.getItineraryDirections).toBe('function');
  expect(typeof sdk.getItinerary).toBe('function');
  expect(typeof sdk.getPlace).toBe('function');
  expect(typeof sdk.listItineraryLocations).toBe('function');
  expect(typeof sdk.moveItineraryLocationAfter).toBe('function');
  expect(typeof sdk.moveItineraryLocationToStart).toBe('function');
  expect(typeof sdk.updateItineraryLocation).toBe('function');
  expect(typeof sdk.updateItinerary).toBe('function');
});
