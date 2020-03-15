export const isObjectEmpty = (obj) => Object.entries(obj).length === 0;

export const missingKeyInObject = (obj, keys) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (!(keys[i] in obj)) return true;
  }
  return false;
};
