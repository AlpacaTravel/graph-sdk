import { getSdk, createClient } from "../src/index";

test("index creates an SDK with a configured client offering the API surface", () => {
  const impl = createClient({ url: "https://example.com " });

  const sdk = getSdk(impl);

  // Collection
  expect(typeof sdk.createCollectionLocation).toBe("function");
  expect(typeof sdk.deleteCollectionLocation).toBe("function");
  expect(typeof sdk.findCollectionLocationIdsByExternal).toBe("function");
  expect(typeof sdk.findCollectionLocationIdsByTag).toBe("function");
  expect(typeof sdk.findCollectionLocationsByExternal).toBe("function");
  expect(typeof sdk.findCollectionLocationsByTag).toBe("function");
  expect(typeof sdk.getCollection).toBe("function");
  expect(typeof sdk.listCollections).toBe("function");
  expect(typeof sdk.updateCollectionLocation).toBe("function");

  // Itinerary
  expect(typeof sdk.createItineraryDirections).toBe("function");
  expect(typeof sdk.createItineraryLocation).toBe("function");
  expect(typeof sdk.createItinerary).toBe("function");
  expect(typeof sdk.deleteItineraryLocation).toBe("function");
  expect(typeof sdk.deleteItinerary).toBe("function");
  expect(typeof sdk.disableItineraryAutoRoute).toBe("function");
  expect(typeof sdk.enableItineraryAutoRoute).toBe("function");
  expect(typeof sdk.findItineraryLocationsByPlaceId).toBe("function");
  expect(typeof sdk.findItineraryLocationIdsByPlaceId).toBe("function");
  expect(typeof sdk.getItineraryDirections).toBe("function");
  expect(typeof sdk.getItineraryLocation).toBe("function");
  expect(typeof sdk.getItinerary).toBe("function");
  expect(typeof sdk.listItineraries).toBe("function");
  expect(typeof sdk.listItineraryLocations).toBe("function");
  expect(typeof sdk.moveItineraryLocationAfter).toBe("function");
  expect(typeof sdk.moveItineraryLocationToStart).toBe("function");
  expect(typeof sdk.updateItineraryLocationIsOptional).toBe("function");
  expect(typeof sdk.updateItineraryLocation).toBe("function");
  expect(typeof sdk.updateItinerary).toBe("function");

  // Media
  expect(typeof sdk.getMediaImage).toBe("function");

  // Place
  expect(typeof sdk.autocompleteSearchPlace).toBe("function");
  expect(typeof sdk.getPlace).toBe("function");
  expect(typeof sdk.reverseSearchPlaceByPosition).toBe("function");

  // Profile
  expect(typeof sdk.getProfile).toBe("function");
  expect(typeof sdk.listAuthorizedProfiles).toBe("function");

  // Route
  expect(typeof sdk.searchRoutesBetweenPositions).toBe("function");
});
