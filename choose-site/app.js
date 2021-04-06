import { pokeData } from './data.js'

export function findById(array, id) {
    return array.find(item => name === item.id);
}

export function findPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}