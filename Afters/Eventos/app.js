

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const botonVaciar = document.getElementById('vaciar-carrito')

const carrito = []

botonVaciar.addEventListener('click', () => {
    // carrito = [] // si tengo carrito como LET
    carrito.length = 0
    actualizarCarrito()
})

const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ""

    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)
    
        // const boton = document.getElementById(`agregar${producto.id}`)
        // boton.addEventListener('click', () => {
        //     agregarAlCarrito(producto.id)
        // })
    } )
}

mostrarProductos(stockProductos)


const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find( (prod) => prod.id === prodId)
    carrito.push(item)

    actualizarCarrito()
    console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find( (prod) => prod.id === prodId )
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach( (prod) => {
        const div = document.createElement('div')
        div.className = "productoEnCarrito"
        div.innerHTML = `
                    <p>${prod.nombre}</p>
                    <p>Precio: $${prod.precio}</p>
                    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

// === FILTROS ===

const filtroTalle = document.getElementById('filtroTalle')

const filtrarProductos = () => {
    const value = filtroTalle.value

    if (value === "all") {
        mostrarProductos(stockProductos)
    } else {
        const filtrado = stockProductos.filter((prod) => prod.talle === value)
        mostrarProductos(filtrado)
    }

}



filtroTalle.addEventListener('change', () => {
    filtrarProductos()
})