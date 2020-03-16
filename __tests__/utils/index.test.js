import { isObjectEmpty, missingKeyInObject } from '../../src/utils';

describe('isOjectEmpty', () => {
  it('should return true if given an empty object', () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  it('should return false if given a non-empty object', () => {
    expect(isObjectEmpty({ hello: 'world' })).toBe(false);
  });
});

describe('MissingKeyInObject', () => {
  const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };

  it('should return false if all keys are in the given object', () => {
    const keys = ['key1', 'key2', 'key3'];
    expect(missingKeyInObject(obj, keys)).toBe(false);
  });

  it('should return true if a key is missing in the given object', () => {
    const keys = ['key1', 'key2', 'key3', 'key4'];
    expect(missingKeyInObject(obj, keys)).toBe(true);
  });
});
