import pokeData from './data.js';
import { encounterPokemon } from './local-storage-utils.js';
// Lets generate three Pokemon
export function generateThreePokemon() {
    //start with raw array of pokemon data
    // Math.random() to get 3 random array indexes
    //between zero
    function getRandomIndex() {
        return Math.floor(Math.random() * pokeData.length);
    }


    let randomNumber1 = getRandomIndex();
    let randomNumber2 = getRandomIndex();
    let randomNumber3 = getRandomIndex();

    // We want to make sure that the numbers are unique

    while (
        randomNumber1 === randomNumber2
        || randomNumber2 === randomNumber3
        || randomNumber1 === randomNumber3
    ) {
        //While they are not unique, get three new random numbers
        randomNumber1 = getRandomIndex();
        randomNumber2 = getRandomIndex();
        randomNumber3 = getRandomIndex();
    }
    const poke1 = pokeData[randomNumber1];
    const poke2 = pokeData[randomNumber2];
    const poke3 = pokeData[randomNumber3];

    //increment +1 the number of pokemon encountered

    encounterPokemon(poke1);
    encounterPokemon(poke2);
    encounterPokemon(poke3);
    return [poke1, poke2, poke3];

}



 