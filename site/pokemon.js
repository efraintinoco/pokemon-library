const main = document.querySelector("main")

function addPokemon(pokemon) {
    const titleName = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`;
    const div = document.createElement("div")
    div.innerHTML = `
    <figure>
        <img src="${pokemon.sprites.front_default}" alt="${titleName}" />
        <figcaption><a href="pokemon.html?pokemon=${titleName}">${titleName}</a></figcaption>
    </figure>
    
    <h2>Abilities</h2>
    
    `
    main.append(div)
}

function abilitiesPokemon(pokemon) {
    const ul = document.createElement("ul")
    ul.innerHTML = `
    <li>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${pokemon.name}</a></figcaption>
    </figure>
    
        
    `
    ul.append(div)
}



const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        addPokemon(parsedResponse)
        abilitiesPokemon(parsedResponse)

    })   