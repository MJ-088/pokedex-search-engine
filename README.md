# pokedex-search-engine

This project is a **Pokédex search engine** that allows users to search for Pokémon by name and see detailed information about them.

---

## Project Structure

pokedex-search-engine/
├── backend/ # Node.js/Express backend
│ ├── package.json
│ └── src/
│ ├── index.js
│ ├── cache/
│ ├── controller/
│ ├── routes/
│ └── services/
└── frontend/ # React + Vite frontend
├── package.json
├── vite.config.js
├── index.html
└── src/
├── main.jsx
├── App.jsx
├── pages/
├── components/
└── services/

markdown
Copy code

---

## Backend

- **Port:** 4000 (can be configured in `index.js`)
- **API endpoint:** `/api/pokemon/:name`
- **Features:**
  - Fetches data from [PokéAPI](https://pokeapi.co/docs/v2)
  - Caches responses for faster repeat queries
  - Handles cache expiry and max cache entries

### Run Backend

```bash
cd backend
npm install
npm start  # Runs on port 4000
Test the API:

Root: http://localhost:4000

Pokémon: http://localhost:4000/api/pokemon/pikachu

Frontend
Port: 3003 (can be configured in vite.config.js)

Features:

Search Pokémon by name

Displays name, image, types, height, weight, base experience, abilities, stats

Colored card based on Pokémon type

Run Frontend
bash
Copy code
cd frontend
npm install
npm run dev  # Runs on port 3003
Open http://localhost:3003 in your browser.
