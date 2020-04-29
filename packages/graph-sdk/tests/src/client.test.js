import Client from '../../src/client';

describe('Client', () => {
  test('Query', async () => {
    const query = {};

    const client = new Client();
    client.set('network', {
      query: (opt) => {
        expect(opt).toBe(query);
      },
    });

    await client.query(query);
  });
});
