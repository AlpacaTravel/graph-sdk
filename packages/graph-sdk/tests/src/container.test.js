import { Container } from '../..';

test('Container', async () => {
  const container = new Container();

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
});
