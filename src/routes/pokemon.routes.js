import { Router } from "express";
import { getPokemonById,getPokemons, addPokemon, deletePokemon, updatePokemon } from "../controller/pokemonController.js";
import { pokemonSchema } from "../schemas/pokemon.schema.js";
import { validateSchema } from "../middleware/validator.middleware.js";
const router = Router();

router.get('/pokemons', getPokemons)
router.post('/create-pokemon', validateSchema(pokemonSchema),addPokemon)
router.get('/pokemons/:id', getPokemonById)
router.delete('/pokemon/:id', deletePokemon)
router.put('/pokemon/:id',validateSchema(pokemonSchema), updatePokemon)


export default router;