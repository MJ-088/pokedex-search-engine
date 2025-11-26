// backend/src/cache/lruCache.js
class LRUCache {
  constructor(maxEntries = 50, ttl = 10 * 60 * 1000) { // ttl in ms, default 10 min
    this.maxEntries = maxEntries;
    this.ttl = ttl;
    this.cache = new Map();
  }

  get(key) {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if expired
    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return null;
    }

    // Refresh position for LRU
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }

  set(key, value) {
    if (this.cache.size >= this.maxEntries) {
      // Remove least recently used
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, { value, expiry: Date.now() + this.ttl });
  }
}

export default LRUCache;
