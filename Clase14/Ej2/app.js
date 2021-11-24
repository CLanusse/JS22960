// pokeapi

let id = 1

// fetch

const llamarAPI = (query) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then( (resp) => resp.json() )
        .then( (data) => {
    
            const {name, sprites:{front_default:img}, id:pokemonID} = data

            id = pokemonID
    
            $('#pokemon').html(`
                <h2>${name}</h2>
                <img src=${img} alt=${name} />
            `)
        })
}

llamarAPI(id)

$('#busqueda').on('submit', (e) => {
    e.preventDefault()

    const busqueda = $('#input').val()
    llamarAPI(busqueda)
})


$('#siguiente').click(() => {
    id++
    llamarAPI(id)
})

$('#anterior').click(() => {
    if (id > 1) {
        id--
        llamarAPI(id)
    }
})




 // jQuery
// const llamarAPI = () => {

    // $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (resp) => {

    //     console.log(resp)

        // $('#pokemon').html(`
        //     <h2>${resp.name}</h2>
        //     <img src=${resp.sprites.front_default} alt=${resp.name} />
        // `)
    // })
// }
// llamarAPI()
