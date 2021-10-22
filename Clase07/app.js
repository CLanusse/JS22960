


// localStorage.setItem("usuario", "Conrado")
// localStorage.setItem("usuario", "Martin")

// localStorage.setItem("dia", "martes")


// const usuario = localStorage.getItem("usuario")
// const dia = localStorage.getItem("dia")

// console.log(usuario)
// console.log(dia)


// sessionStorage.setItem("numero", 1234)

// const numero = parseInt( sessionStorage.getItem("numero") )
// // console.log( numero )
// // console.log( typeof numero )

// console.log( localStorage.getItem('inexistente') )



// ===============


// let usuario = localStorage.getItem('usuario')

// if (usuario !== null) {
//     alert("Bienvenido de vuelta " + usuario)
// } else {
//     usuario = prompt("Ingrese su nombre de usuario")
//     localStorage.setItem('usuario', usuario)
//     alert("Bienvenido " + usuario)
// }



// const numero = prompt('Ingrese su número favorito')

// sessionStorage.setItem('numero', numero)


// ===============


const usuario = {
    nombre: 'Conrado',
    rol: 'profesor',
    calidad: "10/10",
    camadas: [
        {
            id: 16485,
            status: "en curso"
        },
        {
            id: 22905,
            status: "finalizado"
        }
    ]
}

console.log( JSON.stringify(usuario))
localStorage.setItem('usuario', JSON.stringify(usuario))

// console.log( usuario.toString() )



// ===================


const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2000
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3000
    },
]


const productosJSON = JSON.stringify(productos)
// localStorage.setItem('productos', productosJSON)

localStorage.setItem('productos', JSON.stringify(productos) )

// console.log(productos)
// console.log( productosJSON )

const carrito = []


carrito.push( productos[0] )
carrito.push( productos[2] )
carrito.push( productos[1] )
carrito.push( productos[1] )


localStorage.setItem('compra', JSON.stringify(carrito))