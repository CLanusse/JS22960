// ready
// LOAD != DOMContentLoaded

// window.addEventListener('load', () => {
//     console.log("Se cargó la página")
// })

// window.addEventListener('DOMContentLoaded', () => {
//     console.log("Se cargó el DOM")
// })

// $(document).ready( () => {
//     console.log("Se cargó el DOM")

//     setTimeout(() => {
//         confirm('Quieres suscribirte al newsletter?')
//     }, 5000)
    
// })

// $(document).ready(() => {
//     $(document.body).css('opacity', '1')
// })

// $(()=>{
//     $('#loader').css({
//         opacity: '0',
//         visibility: 'hidden'
//     })
// })

// click


// $('#boton').on('click', ()=>{
//     console.log("botón clickeado")
// })

const handleClick = () => {
    $('#boton').toggleClass('backRed')
    console.log("botón clickeado")

    // llamar otra funcion
}

$('#boton').on('mouseover', () => {
    $('#boton').toggleClass('backRed')
})

$('#boton').click(handleClick)

// === ejemplo aplicado ====

const carrito = []

const productos = [
    {
        nombre: "Producto 1",
        id: 1,
        precio: 2000
    },
    {
        nombre: "Producto 2",
        id: 2,
        precio: 2000
    },
    {
        nombre: "Producto 3",
        id: 3,
        precio: 2000
    },
    {
        nombre: "Producto 4",
        id: 4,
        precio: 2000
    },
]

productos.forEach((prod) => {

    $('#contenedor').append(`
        <article class="my-3">
            <h3>${prod.nombre}</h3>
            <p>Precio: $${prod.precio}</p>
            <small>Código: ${prod.id}</small><br>
            <button id="agregar${prod.id}" class="btn btn-primary my-2">Agregar</button>
        </article>
    `)

    $(`#agregar${prod.id}`).on('click', () => {
        agregarAlCarrito(prod.id)
    })
})


const agregarAlCarrito = (id) => {
    const item = productos.find((prod) => prod.id === id)
    carrito.push(item)
    console.log(carrito)
}

