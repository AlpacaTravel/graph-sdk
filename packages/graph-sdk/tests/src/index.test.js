import mod from '../..';

test('export', () => {
  expect(typeof mod.factory).toBe('function');

  const client = mod.factory();

  expect(client).not.toBeUndefined();
});
