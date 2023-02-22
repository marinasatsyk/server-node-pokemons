import  express  from "express";
import PokemonModel from "../models/Pokemon.js";

const router = express.Router();

router.get('/pokemons', async(req, res) => {
    try {
        const pokemons = await PokemonModel.find({});
        res.json({pokemons})

    }catch(err){
        res.json({error: 'No dataset /pokemons'})
    }
})

router.get("/pokemons/find/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const pokemon = await PokemonModel.find({_id: id});
        res.json({pokemon})

    }catch(err){
        res.json({error: 'No dataset id'})
    }
})

router.get("/", async(req, res) =>{
    try{
        res.json({ message: 'api connected' });
    }catch(err){
        res.json({error: 'no dataset get /'})
    }
})
export default router;