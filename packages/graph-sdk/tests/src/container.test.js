import Container from '../../src/container';

describe('Container', () => {
  test('Uses resolver for dependency lookup', async () => {
    const container = new Container();

    // Build an example resolver for keyed services
    const resolver = {
      resolve: (key) => {
        return { key };
      },
    };

    // Add in resolver tests
    container.set('resolver', resolver);
    expect(await container.get('resolver')).toBe(resolver);
    expect(await container.get('unknown')).toMatchObject({ key: 'unknown' });
    container.setParam('@foo', 'bar');
    expect(container.getParam('@foo')).toBe('bar');
  });

  test('Accessor/mutator for the apiKey', () => {
    const container = new Container();

    // Test accessor/mutators
    container.apiKey = 'pk.123';
    expect(container.apiKey).toBe('pk.123');
    expect(container.getParam('@apiKey')).toBe('pk.123');

    const container2 = new Container();
    container2.setParent(container);
    expect(container2.getParam('@apiKey')).toBe('pk.123');
    expect(container2.apiKey).toBe('pk.123');
  });

  test('getKeys', () => {
    const container = new Container();
    container.setParam('@foo', 'bar');
    container.set('foo', { foo: 'bar' });
    expect(container.getKeys()).toMatchObject(['@foo', 'foo']);
  });
});
