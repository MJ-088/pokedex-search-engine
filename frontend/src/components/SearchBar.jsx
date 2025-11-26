import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  const handleClick = () => {
    if (name.trim() !== "") {
      onSearch(name);
      setName("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && name.trim() !== "") {
      onSearch(name);
      setName("");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Pokémon name"
        style={{ padding: "5px", fontSize: "16px" }}
        onKeyDown={handleEnter}
      />
      <button
        onClick={handleClick}
        style={{ padding: "6px 12px", marginLeft: "10px", fontSize: "16px" }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
