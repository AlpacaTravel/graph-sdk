import { Api } from '../../src/index';

describe('mod', () => {
  test('exports', () => {
    expect(typeof Api).toBe('function');
  });
});
