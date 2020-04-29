import '../../dist/bundle.js';

test('export', async () => {
  const { alpaca } = window;
  expect(alpaca).not.toBeUndefined();

  const client = alpaca.factory();

  expect(client).not.toBeUndefined();
});
