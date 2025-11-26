const API_URL = "http://localhost:4000/api/pokemon"; // match your backend port

export async function fetchPokemon(name) {
  const res = await fetch(`${API_URL}/${name.toLowerCase()}`);
  if (!res.ok) throw new Error("Pokemon not found");
  return res.json();
}
