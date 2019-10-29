// 设置默认 key 前缀
const defaultPrefix = `_hhp_`;

/**
 * 父类：本地存储 DB
 */
class DB {
  constructor(storage, prefix = defaultPrefix) {
    if (storage !== localStorage || storage !== sessionStorage) {
      throw Error('It is not a localStorage or sessionStorage');
    }
    // 设置存储类型 localStorage | sessionStorage
    this.db = storage;
    // 设置存储 key 的前缀
    this.prefix = prefix;
  }

  /**
   * 设置 localStorage item
   * @param key {string} item 的 key
   * @param value {string} item 的 value
   * @return {boolean} 设置结果
   */
  set(key, value) {
    try {
      this.db.setItem(this.prefix + key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * 获取 localStorage item
   * @param key {string} item 的 key
   * @return {null|any} 获取结果
   */
  get(key) {
    try {
      return JSON.parse(this.db.getItem(this.prefix + key));
    } catch (e) {
      return null;
    }
  }

  /**
   * 删除 localStorage item
   * @param key {string} item 的 key
   */
  remove(key) {
    this.db.removeItem(this.prefix + key);
  }

  /**
   * 清空 localStorage
   */
  clear() {
    this.db.clear();
  }
}

const db = {
  // localStorage
  ls: new DB(window.localStorage),
  // sessionStorage
  ss: new DB(window.sessionStorage)
};

export default db;
