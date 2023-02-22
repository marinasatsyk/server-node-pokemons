import mongoose from "mongoose";
import dotenv from "dotenv";
import PokemonModel from "./models/Pokemon.js";
import {pokemons} from './mocks/mock-pokemons.js';


dotenv.config();

const {
    APP_LOCALHOST: hostname,
    APP_PORT: port, //8000
    MONGODB_ADDRESS,
    APP_COLLECTION_MONGOOSE
} = process.env;


mongoose.set('strictQuery', false);

// mongoose.connect( `${MONGODB_ADDRESS}/${APP_COLLECTION_MONGOOSE}`);
mongoose.connect( `${MONGODB_ADDRESS}`);

export const init = async () => {
    try{
        await PokemonModel.deleteMany();
        const res = await PokemonModel.insertMany(pokemons)
    }
    catch(err){
        console.log(err);

    }finally {
        mongoose.connection.close()
    }
}

init().then(console.log);