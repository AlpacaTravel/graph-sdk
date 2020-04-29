import container, { Client } from '../..';

test('Container', async () => {
  // Build an example resolver for keyed services
  const resolver = {
    resolve: (key) => {
      return { key };
    },
  };

  container.set('resolver', resolver);
  expect(await container.get('resolver')).toBe(resolver);
  expect(await container.get('unknown')).toMatchObject({ key: 'unknown' });
  container.setParam('@foo', 'bar');
  expect(container.getParam('@foo')).toBe('bar');

  container.apiKey = 'pk.123';
  expect(container.apiKey).toBe('pk.123');
  expect(container.getParam('@apiKey')).toBe('pk.123');

  const client = new Client();
  expect(client.getParam('@apiKey')).toBe('pk.123');
});
