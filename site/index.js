const url = "https://pokeapi.co/api/v2/pokemon?limit=50"

function addPokemonImage(url) {
    const img = document.createElement("img")
    img.src = url
    main.append(img)
}

fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(results => results.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        responses.forEach(response => {
            addPokemonImage(response.sprites.front_default)
        })
    })
