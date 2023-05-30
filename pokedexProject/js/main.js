import { getRandomPokemon } from "./getRandomPokemon.js";
import { darkLightMode } from "./darkLight.js";

//console.log("main.js working");

darkLightMode();

getRandomPokemon();

function onClickCards() {
  document
    .getElementById("button-random-pokemons")
    .addEventListener("click", getRandomPokemon);
}

onClickCards();
