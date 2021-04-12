import { getPokedex } from '../local-storage-utils.js';
//import { attackLevel } from '../local-storage-utils.js';

const pokedex = getPokedex();

console.log(pokedex);

var ctx = document.getElementById('myChart').getContext('2d');
//var ctx2 = document.getElementById('myChart2').getContext('2d');
//var ctx3 = document.getElementById('myChart3').getContext('2d');

const names = [];
const captured = [];
const encountered = [];
//const attack = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon Captured',
                data: captured,
                backgroundColor: 'red',
                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data: encountered,
                backgroundColor: 'blue',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

