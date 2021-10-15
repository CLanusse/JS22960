// === ARRAYS ===


let profesores = ["Conrado"]
let tutores = ["Samuel", "German", "Agostina", "Martin", "Carlos"]

let equipo = tutores.concat( profesores )

// console.log(equipo)

const numeros = [106, 21, 3, 344, 5, 36, 57, 23, 55, 22]

// console.log(numeros)
// console.log( tutores[0] )
// console.log( tutores[2] )
// console.log( tutores[10] )


const resultado = numeros[2] + numeros[5]

// console.log(resultado)

// console.log( tutores.length )


// let total = 0

// for (let i = 0; i < numeros.length; i++) {
//         total += numeros[i]
//         // console.log(total)
// }

// console.log("Resultado final: " + total)

// const tutor = prompt('Ingrese su nombre de tutor')

// for (let i = 0; i < tutores.length; i++) {
//     if (tutor === tutores[i]) {
//         alert("Bienvenido a clase, tutor " + tutores[i])
//     }
// }

// ============

// console.log( numeros.toString() )


tutores[0] = "Eva"
// tutores[4] = false

// agrego al inicio
tutores.unshift("Samuel")
// borro el primer elemento 
tutores.shift()
// agregar al final
tutores.push('Samuel')
// borrar el último elemento
tutores.pop()

tutores.push("Samuel")

// let limite = tutores.length

// for (let i = 0; i < limite; i++) {
//     if (tutores[i] === "Eva") {
//         continue
//     }
//     tutores.pop()
// }

const despedirATodos = () => {
    tutores = []
}

// console.log(tutores)
// despedirATodos()

// console.log( tutores.join(" DESPEDIDO, ") )
// console.log( "Nuestros tutores son: \n" + tutores.join("\n") + ".")


const tutoresString = "Eva, Carlos, Agostina, Martin, Samuel, German"

const tutoresComoArray = tutoresString.split(", ")
// console.log(tutoresComoArray)

//                       inclusivo   excluyente
const corte = equipo.slice(4)

// console.log( corte )



// === ARRAY DE OBJETOS === 

// const producto1 = {
//     id: 1,
//     nombre: "Producto 1",
//     precio: 1500
// }

// const producto2 = {
//     id: 2,
//     nombre: "Producto 2",
//     precio: 2500
// }

const productos2 = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        talles: ["S", "M", "L"]
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        talles: ["S", "XL"]
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        talles: ["L"]
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        talles: ["S", "M"]
    }
]

// console.log(productos2[0].talles[1])

// for (let i = 0; i < productos2.length; i++ ) {

//     console.log("Producto: " + productos2[i].nombre)
//     console.log("Talles disponibles: ")

//     for (let j = 0; j < productos2[i].talles.length; j++) {
//         console.log(productos2[i].talles[j])
//     }

// }

for (let producto of productos2) {

    console.log("Producto: " + producto.nombre)
    console.log("talles disponibles:")

    for (let talle of producto.talles) {
        console.log(talle)
    }
}


class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

// const productos = [
//     new Producto(1, "Producto 1", 1500),
//     new Producto(2, "Producto 2", 2500),
//     new Producto(3, "Producto 3", 3500),
//     new Producto(4, "Producto 4", 4500),
// ]

const productos = []

productos.push(new Producto(1, "Producto 1", 1500))
productos.push(new Producto(2, "Producto 2", 2500))
productos.push(new Producto(3, "Producto 3", 3500))
productos.push(new Producto(4, "Producto 4", 4500))


// console.log( productos[0].nombre )
// console.log( productos[1].precio)
// console.log( productos[2].id )

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i].nombre)
// }

const carrito = []

carrito.push( productos[1] )
carrito.push( productos[3] )

console.log(carrito)

let totalCarrito = 0

for (let i = 0; i < carrito.length; i++) {
    totalCarrito += carrito[i].precio
}

console.log("Total: " + totalCarrito)
