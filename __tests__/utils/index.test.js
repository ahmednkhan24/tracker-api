import { isObjectEmpty, missingKeyInObject } from '../../src/utils';

describe('isOjectEmpty', () => {
  it('should return true if given an empty object', () => {
    expect(isObjectEmpty({})).toBe(true);
  });
});
