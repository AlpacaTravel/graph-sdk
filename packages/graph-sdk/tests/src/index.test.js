import { Client } from '../../src/index';
import fetchMock from 'fetch-mock';

describe('ES Module Source', () => {
  test('exports', async () => {
    expect(Client).not.toBeUndefined();

    const apiKey = 'pk.123';

    const client = new Client({
      apiKey,
    });
    expect(client.apiKey).toBe(apiKey);

    expect(typeof client.query).toBe('function');

    const api = client.get('api');
    expect(api).not.toBeUndefined();

    const empty = await client.get('undefined');
    expect(empty).toBeUndefined();
  });

  test('Network call', async () => {
    // Configure the local environment
    const endpoint = 'http://localhost/graphql';
    const apiKey = 'pk.123';

    const client = new Client();

    client.apiKey = apiKey;
    client.setParam('@endpoint', endpoint);

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
    const data = await client.query({ query });
    expect(data).not.toBeUndefined();
    expect(data[0].itinerary.root.placesCount).toBe(22);
  });
});
