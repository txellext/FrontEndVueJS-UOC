function getRandomPokemon() {
  let randomNum = -1;
  let randomNumArray = [];
  let i = 0;
  const numMax = 10;
  const output = document.querySelector("#cards");
  output.innerHTML = "";

  while (!randomNumArray.includes(randomNum) || i < numMax) {
    randomNum = Math.round(Math.random() * 1010);

    fetchApi(randomNum);

    randomNumArray.push(randomNum);

    i++;
  }
  //console.log(randomNumArray);
}

async function fetchApi(randomNum) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
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
  let pokemonAtac = clonedTemplate.querySelector(".atac");
  let pokemonDefensa = clonedTemplate.querySelector(".defensa");
  let pokemonTipus = clonedTemplate.querySelector(".tipus");
  let pokemonImg = clonedTemplate.querySelector(".img1");
  let pokemonImgBack = clonedTemplate.querySelector(".img2");
  
  card.setAttribute("id", data.id);
  pokemonId.textContent = `#${data.id}`;
  randomPokemon.textContent = data.name;
  pokemonAtac.textContent = `attack: ${data.stats[1].base_stat}`;
  pokemonDefensa.textContent = `defense: ${data.stats[2].base_stat}`;
  // pokemonTipus.textContent = data.name;
  pokemonImg.setAttribute("src", data.sprites.other.home.front_default);
  pokemonImgBack.setAttribute("src", data.sprites.back_default);

  output.appendChild(clonedTemplate);
}

export { getRandomPokemon };
