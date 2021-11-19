
const API_KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'
const contenedor = document.getElementById('lista')
// query params

// fetch -> async/await

// async function buscarImgs() { ... }

const buscarImgs = async (search, limit) => {
    contenedor.innerHTML = `<h2>Cargando...</h2>`

    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=${search}`)
    const data = await resp.json()

    const imgs = data.data
    
    contenedor.innerHTML = ''

    imgs.forEach((img) => {
        const li = document.createElement('li')
        li.className = "col-3 m-2"
        li.innerHTML = `
            <img src=${img.images.downsized_medium.url} alt="img" style="width: 100%"/>
        `

        contenedor.append(li)
    })
}

const form = document.querySelector('#form')
const input = document.querySelector('#input-busqueda')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const limit = document.querySelector('.radio:checked')

    buscarImgs(input.value, limit.value)
})





// fetch then/catch
// const buscarImgs = (search, limit) => {

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=${search}`)
    //     .then( (resp) => resp.json())
    //     .then( (data) => {
    //         console.log(data)
    
            // const imgs = data.data
            // const contenedor = document.getElementById('lista')
            // contenedor.innerHTML = ''
    
            // imgs.forEach((img) => {
            //     const li = document.createElement('li')
            //     li.className = "col-3 m-2"
            //     li.innerHTML = `
            //         <img src=${img.images.downsized_medium.url} alt="img" style="width: 100%"/>
            //     `
    
            //     contenedor.append(li)
            // })
    
//         })
// }























// const KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'

// const lista = document.getElementById('lista')
// const input = document.getElementById('input-busqueda')
// const form = document.getElementById('form')


// const llamarAPI = (busqueda, limit) => {

//     fetch(`https://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${KEY}&q=${busqueda}`)
//         .then( (res) => res.json())
//         .then( (data) => {

//             const images = data.data
//             lista.innerHTML = ''   
//             images.forEach( (img) => {
    
//                 lista.innerHTML += `
//                     <li class="card col-3">
//                         <img src=${img.images.downsized_medium.url} alt="" />
//                     </li>
//                 `
//             })
//         })
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
    
//     const limit = $('.radio:checked').val()

//     llamarAPI(input.value, limit)
// })


