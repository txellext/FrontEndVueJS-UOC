import { getRandomPokemon } from "./getRandomPokemon.js";
import { darkLightMode } from "./darkLight.js";

//console.log("main.js working");

darkLightMode();

getRandomPokemon();

function onClickButtonRandom() {
  document
    .getElementById("button-random-pokemons")
    .addEventListener("click", getRandomPokemon);
}

onClickButtonRandom();

// function onClickSearch() {
//   getRandomPokemon
//   document
//   .getElementById("pokemon-name");
//   .addEventListener("click", )
// }