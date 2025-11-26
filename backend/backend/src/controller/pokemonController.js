import { getPokemon } from "../services/pokemonService.js";

export async function fetchPokemon(req, res) {
    const { name } = req.params;
    try {
        const data = await getPokemon(name); // call getPokemon from service
        res.json(data);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}
