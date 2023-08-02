import { decodeString, encodeString } from '../utils/helpers';
let STORAGE = localStorage;

const storage = {
  get(key) {
    const item = STORAGE.getItem(key);
    return item ? JSON.parse(decodeString(item)) : null;
  },
  set(key, value) {
    STORAGE.setItem(key, encodeString(JSON.stringify(value)));
  },
  remove(key) {
    STORAGE.removeItem(key);
  },
  clear() {
    STORAGE.clear();
  },
};

export default storage;
