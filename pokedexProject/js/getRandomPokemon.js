async function getRandomPokemon() {
  let randomNum = -1;
  let randomNumArray = [];
  let i = 0;
  const numMax = 10;

  while (!randomNumArray.includes(randomNum) || i < 10) {
    randomNum = Math.round(Math.random() * 1010);
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    let data = await response.json();
    // console.log(data.name);
    // console.log(data.id);
    // console.log(data.sprites.other.home.front_default);

    const output = document.querySelector("#cards");
    const template = document.getElementById("template");
    const clonedTemplate = template.content.cloneNode(true);

    let card = clonedTemplate.querySelector(".card");
    let pokemonId = clonedTemplate.querySelector(".pokemonID");
    let randomPokemon = clonedTemplate.querySelector(".pokemonName");
    let pokemonImg = clonedTemplate.querySelector("img");

    card.setAttribute("id", data.id);
    pokemonId.textContent = `#${data.id}`;
    randomPokemon.textContent = data.name;
    pokemonImg.setAttribute("src", data.sprites.other.home.front_default);

    output.appendChild(clonedTemplate);

    randomNumArray.push(randomNum);
    i++;
  }
}
//console.log(randomNumArray);

export default getRandomPokemon;
