// console.log('NUMBER 1');

// // ASYNC CALL
// setTimeout(() => {
//   console.log('NUMBER 2');
// }, 5000);

// setTimeout(() => {
//   console.log('NUMBER 3');
// }, 2000);

// console.log('NUMBER 4');

const getPokemon = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  const firstTwentyPokemon = data.results;
  // console.log(firstTwentyPokemon);

  // create an li for each pokemon
    // li should have the pokemon name in it
  const pokemonNameLIs = firstTwentyPokemon.map((individualPokemon) => {
    const pokemonLI = document.createElement('li');
    pokemonLI.innerText = individualPokemon.name;
    return pokemonLI;
  });

  // grab the ul
  const ul = document.querySelector('ul');

  // put all the li's into the ul
  ul.append(...pokemonNameLIs);
}

getPokemon();