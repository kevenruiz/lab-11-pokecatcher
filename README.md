## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


## Created 2 index files
1) create one file for intro page
2) create folder with a new index file, local CSS file and create the folders needed
3) copy data from Dani's repo where we are going to get the information. 
4) ACP

## Create functions that will allow you to start pulling data


```

2) button to catch the pokemon

### State
- encounters, caught for each pokemon
    - `const pokedex = []`

```js
interface PokeItem {
    id: string,
    captured: number,
    encountered: number
}

type Pokedex = Array<PokeItem>
```

- `let captures = 0`

### Events
- onClick,
    - "send selected pokemon to the pokedex"
        1) figure out which pokemon is selected
        - capturePokemon(selectedPokemon)
    - increment captures state
    - check the captures state
        - if the captures state is 10, redirect
        - otherwiser generateThreePokemon
- onLoad
    - generateThreePokemon


### Functions
- generateThreePokemon
    - start with raw array of pokemon data
    - Math.random() to get 3 random array indexes
        - make sure they're unique
            - WHILE they're not unique, get three new random numbers
    - use the three indexes to get three pokemon
    - increment the encountered property for all pokemon
            - ask: is it in the pokedex yet?
            - if not, `{ pokemon: 'ekans', captured: 0, encountered: 1 }`
            - if so, increment the encountered property
    - we'll put them in the DOM

```js
while (anyOfOurNumbersAreRepeats) {
    generateThreeNewNumbers()
}
```

- local storage utils
    - getPokedex
    - encounterPokemon
    - capturePokemon


- capturePokemon(selectedPokemon)
    1) we need to grab our pokedex from localStorage
    2) increment the captured property for just this pokemon
