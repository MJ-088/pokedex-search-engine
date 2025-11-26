import React from "react";

const typeColors = {
  fire: "#FDDFDF",
  water: "#DEF3FD",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  ice: "#D0F0FD",
  dragon: "#97b3e6",
  dark: "#705848",
  fairy: "#fceaff",
  normal: "#F5F5F5",
  poison: "#98d7a5",
  flying: "#F5F5F5",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  bug: "#f8d5a3",
  ghost: "#705898",
  steel: "#b7b7ce",
  psychic: "#eaeda1"
};

function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div style={{
      marginTop: "20px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: typeColors[pokemon.types[0].type.name] || "#f0f0f0",
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
    }}>
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Base experience:</strong> {pokemon.base_experience}</p>
      <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
      <p><strong>Stats:</strong></p>
      <ul>
        {pokemon.stats.map(s => (
          <li key={s.stat.name}>{s.stat.name}: {s.base_stat}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;
