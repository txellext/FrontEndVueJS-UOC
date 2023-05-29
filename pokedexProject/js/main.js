import { getRandomPokemon } from "./getRandomPokemon.js";

//console.log("main.js working");

getRandomPokemon();

function onClickCards() {
  document
    .getElementById("button-random-pokemons")
    .addEventListener("click", getRandomPokemon);
}

onClickCards();
