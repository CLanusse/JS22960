


// const usuario = localStorage.getItem('usuario')

// alert('Bienvenido ' + usuario)


// const numero = sessionStorage.getItem('numero')
// alert('Su número favorito es ' + numero)


// localStorage.removeItem('usuario')
// sessionStorage.clear()


// console.log( localStorage.getItem("usuario") )



// ========================

const usuario = JSON.parse( localStorage.getItem('usuario') )

alert('Bienvenido de nuevo ' + usuario.nombre + ". Usted es un gran " + usuario.rol)

// const productosFromLS = localStorage.getItem('productos')
// const productos = JSON.parse( productosFromLS )

// console.log(productosFromLS)
// console.log(productos)

const productos = JSON.parse( localStorage.getItem('productos') )


// for (const prod of productos) {
//     console.log(prod)
// }

// ==============

const carrito = JSON.parse( localStorage.getItem('compra') )

console.log("Resumen de compra:")

for (const producto of carrito) {
    console.log("Producto: " + producto.nombre)
    console.log("Precio: " + producto.precio)
    console.log("----")
}

let total = 0

carrito.forEach((prod) => {
    total += prod.precio
})

// let total = carrito.reduce( (acc, prod) => acc + prod.precio, 0 )

console.log("Total: $" + total)