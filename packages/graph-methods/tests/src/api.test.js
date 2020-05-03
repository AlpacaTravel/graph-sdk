import Api from '../../src/api';

describe('Api', () => {
  test('Constructor', () => {
    // Constructor
    const api = new Api();
    expect(api).not.toBeUndefined();

    // Static Accessor
    expect(typeof Api.get).toBe('function');
    const query = Api.get('CreateAnonymousItinerary');
    expect(typeof query).toBe('string');
  });

  test('Client capable operation', async () => {
    const client = {
      query: jest.fn(async () => {
        return [{ createItinerary: { itinerary: { id: 'itinerary/123' } } }];
      }),
    };

    const api = new Api({ client });

    const variables = {
      foo: 'bar',
    };

    await api.query('CreateAnonymousItinerary', { variables });
    expect(client.query.mock.calls.length).toBe(1);
    expect(typeof client.query.mock.calls[0][0].query).toBe('string');
    expect(/mutation/.test(client.query.mock.calls[0][0].query)).toBe(true);
    expect(client.query.mock.calls[0][0].variables).toMatchObject({
      foo: 'bar',
    });
  });

  test('Network referencable', async () => {
    const mockNetwork = {
      query: () => 'foo',
    };
    const mockContainer = {
      get: (key) => {
        if (key === 'network') {
          return mockNetwork;
        }
      },
    };
    const networkConstructor = new Api({ network: mockNetwork });
    expect(await networkConstructor.getNetwork()).toBe(mockNetwork);

    const containerConstructor = new Api({ container: mockContainer });
    expect(await containerConstructor.getNetwork()).toBe(mockNetwork);

    const deferContainer = new Api();
    deferContainer.setContainer(mockContainer);
    expect(await deferContainer.getNetwork()).toBe(mockNetwork);

    expect(await containerConstructor.query('CreateAnonymousItinerary')).toBe('foo');

    const check = async () => {
      const api = new Api({});
      await api.query('CreateAnonymousItinerary');
    };

    expect(check()).rejects.toEqual(
      new Error(
        'Missing network or client, construct with network/container or client or setContainer(container)',
      ),
    );
  });

  test('createAnonymousItinerary', async () => {
    const client = {
      query: jest.fn(async () => {
        return [{ createItinerary: { itinerary: { id: 'itinerary/123' } } }];
      }),
    };

    const api = new Api({ client });

    await api.createAnonymousItinerary();

    expect(client.query.mock.calls.length).toBe(1);
    expect(typeof client.query.mock.calls[0][0].query).toBe('string');
    expect(/mutation/.test(client.query.mock.calls[0][0].query)).toBe(true);
  });
});
