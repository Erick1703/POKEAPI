import Pokemons from"../models/pokemon.model.js"

export const getPokemons = async(req, res)=>{
const pokemons = await Pokemons.find()
.populate('type', 'name')
.populate('region', 'name')

res.json(pokemons)

}
export const addPokemon =async (req, res)=>{
    const {name, level, type, region} = req.body;
    try{
const newPokemon = new Pokemons({
    name,
    level,
    type,
    region
})

const pokemonSave = await newPokemon.save();

res.json({
    name: pokemonSave.name,
    level: pokemonSave.level,
    type:pokemonSave.type,
    region: pokemonSave.region
  
})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
export const getPokemonById = async (req, res)=>{
    const pokemon = await Pokemons.findById(req.params.id)
    .populate('type', 'name')
.populate('region', 'name')
    if(!pokemon) return res.status(404).json({message: "Pokemon not found"})

        res.json(pokemon)
}
export const deletePokemon =async (req, res)=>{
    const pokemon = await Pokemons.findByIdAndDelete(req.params.id)
    if(!pokemon) return res.status(404).json({message: "Pokemon not found"})

        return res.sendStatus(204)
}
export const updatePokemon = async(req, res)=>{
    const pokemon = await Pokemons.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })

    if(!pokemon) return res.status(404).json({message:"Pokemon not found"})
        res.json(pokemon)
}