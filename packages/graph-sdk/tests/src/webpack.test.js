import alpaca, { Client } from '../../src/webpack';
import fetchMock from 'fetch-mock';

describe('Webpack Module', () => {
  test('exports', async () => {
    const client = new Client();

    const network = await client.get('network');
    expect(network).not.toBeUndefined();

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
