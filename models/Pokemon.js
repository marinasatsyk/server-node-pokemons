import mongoose, { model, Schema} from "mongoose";

//transformer user  en pokemon

export const PokemonSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    cp: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
        
    types:{
        type: Array,
        required: true
    },
    created :{
        type: Date
    }

});

const PokemonModel = model('pokemons', PokemonSchema);
export default PokemonModel;