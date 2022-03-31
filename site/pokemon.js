const main = document.querySelector("main")

function addPokemonImage(pokemon) {
    const div = document.createElement("div")
    div.innerHTML = `
    <figure>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${pokemon.name}</a></figcaption>
    </figure>
        `
    main.append(div)
}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        addPokemonImage(parsedResponse)
    })   