import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim: true
    },
    level:{
        type:Number,
        required:true,
        min:1
    },
    type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Types',
        required:true
    },
    region:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Regions'
    }
},{
    timestamps:true
})

export default mongoose.model('Pokemons', pokemonSchema)