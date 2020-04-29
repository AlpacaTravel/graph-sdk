import '../../dist/bundle.js';

test('export', async () => {
  const { alpaca } = window;
  expect(alpaca).not.toBeUndefined();
  expect(alpaca.Client).not.toBeUndefined();

  const apiKey = 'pk.123';
  alpaca.apiKey = apiKey;

  const client = new alpaca.Client();
  expect(client.apiKey).toBe(apiKey);
  expect(typeof client.query).toBe('function');
});
