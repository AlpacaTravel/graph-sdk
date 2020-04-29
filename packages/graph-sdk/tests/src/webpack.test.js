import { factory } from '../../src/webpack';

test('export', async () => {
  const client = factory();

  expect(client).not.toBeUndefined();

  const dummyService = await client.get('dummy');
  expect(dummyService).not.toBeUndefined();
});
