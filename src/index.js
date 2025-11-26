import express from "express";
import cors from "cors";
import path from "path";
import pokemonRoutes from "./routes/pokemonRoutes.js";

const app = express();
const __dirname = path.resolve();

// Use port from environment variable or default to 4000
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Root route
app.get("/", (req, res) => {
    res.send(`Pokédex backend is running on port ${PORT}. Use /api/pokemon/:name to fetch data.`);
});

// API routes
app.use("/api", pokemonRoutes);

// Start server
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
