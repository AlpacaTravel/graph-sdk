import alpaca, { Client } from '../../dist/index.es';
import fetchMock from 'fetch-mock';

describe('ES Module Export', () => {
  test('exports', () => {
    expect(Client).not.toBeUndefined();

    const apiKey = 'pk.123';
    alpaca.apiKey = apiKey;

    const client = new Client();
    expect(client.apiKey).toBe(apiKey);

    expect(typeof client.query).toBe('function');
  });

  test('Network call', async () => {
    // Configure the local environment
    const endpoint = 'http://localhost/graphql';
    const apiKey = 'pk.123';
    alpaca.apiKey = apiKey;
    alpaca.setParam('@endpoint', endpoint);

    // Add an example query
    const query = `query NumberOfPlacesInItinerary {
      itinerary(id: "itinerary/XXX") {
        root {
          placesCount: descendantsCount(type: ItineraryLocation)
        }
      }
    }`;

    // Mock the network call
    fetchMock.mock(`${endpoint}?accessToken=${apiKey}`, {
      data: [{ itinerary: { root: { placesCount: 22 } } }],
    });

    // Perform a network call using our default
    const network = await alpaca.get('network');
    const data = await network.query({ query });
    expect(data).not.toBeUndefined();
    expect(data[0].itinerary.root.placesCount).toBe(22);
  });
});
