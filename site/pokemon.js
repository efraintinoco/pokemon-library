const main = document.querySelector("main")

function addPokemonImage(pokemon) {
    const div = document.createElement("div")
    const titleName = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`
    div.innerHTML = `
    <figure>
        <img src="${pokemon.sprites.front_default}" alt="${titleName}" />
        <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${titleName}</a></figcaption>
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