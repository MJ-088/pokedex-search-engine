import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import PokemonCard from "../components/PokemonCard.jsx";
import { fetchPokemon } from "../services/pokemonApi.js";

function HomePage() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (name) => {
    try {
      const data = await fetchPokemon(name);
      setPokemon(data);
      setError("");
    } catch (err) {
      setPokemon(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Pokédex Search Engine</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default HomePage;
