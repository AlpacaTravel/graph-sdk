import mod, { Client } from '../..';

test('export', () => {
  expect(Client).not.toBeUndefined();

  const apiKey = 'pk.123';
  mod.apiKey = apiKey;

  const client = new Client();
  expect(client.apiKey).toBe(apiKey);

  expect(typeof client.query).toBe('function');
});
