import express from "express";
import { fetchPokemon } from "../controller/pokemonController.js"; // matches export name

const router = express.Router();

router.get("/pokemon/:name", fetchPokemon);

export default router;
