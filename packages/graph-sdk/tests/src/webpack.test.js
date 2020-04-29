import { Client } from '../../src/webpack';

test('export', async () => {
  const client = new Client();

  const network = await client.get('network');
  expect(network).not.toBeUndefined();

  expect(typeof client.query).toBe('function');
});
