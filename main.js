console.log("Ouiiiiiiii ça marche 😊");

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40"

fetch(url)
.then(response => response.json())
.then(pokemons => {
    console.log(pokemons);
})