// backend/src/services/pokemonService.js
import fetch from "node-fetch";
import LRUCache from "../cache/lruCache.js";

const cache = new LRUCache(100, 15 * 60 * 1000); // max 100 entries, 15 min TTL

export async function getPokemon(name) {
  const key = name.toLowerCase();
  const cached = cache.get(key);
  if (cached) return cached;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
  if (!res.ok) throw new Error("Pokemon not found");
  const data = await res.json();

  cache.set(key, data);
  return data;
}
