// array numeros 

const numeros1 = [1, 2, 3, 4, 5]
const numeros2 = [6, 7, 8, 9, 10]

const numeros = numeros1.concat(numeros2)

// console.log( numeros )
// console.log( numeros.slice(0, 3) )
// console.log( numeros.slice(5) )

const texto = "Hola mundo coder! Como andan?"

// console.log(texto.length)
// console.log(texto[0])
// console.log(texto.slice(5))


// splice - modifica el array original
// (indice inicial, cantidad de elementos a eliminar, +elementos añadir)

// numeros.splice(3, 2, 50, "hola mundo", 99)
// numeros.splice(5, 0, "Hola mundo")


// indexOf()

const eliminarNumero = (num) => {
    const indice = numeros.indexOf(num)

    if (indice !== -1) {
        numeros.splice(indice, 1)
    }
}

// eliminarNumero(6)
 
// console.log(numeros)



// recorrer arrays
// for of -- forEach

// for (let numero of numeros) {
//     console.log(numero * 2)
// }

let total = 0

numeros.forEach( (numero, indice) => {
    // console.log(indice, numero)
    total += numero
} )

// console.log(total)




class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }

    cumplirAnios() {
        this.edad += 1
    }
}


const mascotas = []

mascotas.push( new Mascota('Flufy', 'perro', 6) )
mascotas.push( new Mascota('Dory', 'pez', 3) )
mascotas.push( new Mascota('Jorge', 'gato', 14) )
mascotas.push( new Mascota('Ricardo', 'gato', 11) )

// recorrer arrays -- (ejecutar metodo)

mascotas.forEach( (mascota) => {
    // console.log(mascota.nombre)
    mascota.cumplirAnios()
} )

// console.log(mascotas)

// FIND
// const resultado = mascotas.find( (mascota) => {
//         // condicion
//         return mascota.nombre === "Dory"
// } )

const resultado = mascotas.find( (mascota) => mascota.tipo === "gato" )
// const resultado = mascotas.find( (mascota) => mascota.tipo === "caballo" )
// console.log( resultado )

// filter - map - reduce - find

const arrayProductos = [
    {nombre: "Remera", precio: 1000},
    {nombre: "Remera", precio: 2000},
    {nombre: "Pantalon", precio: 1500},
    {nombre: "Pantalon", precio: 1700},
    {nombre: "Pantalon", precio: 5000},
    {nombre: "Pantalon", precio: 3000},
    {nombre: "Calzado", precio: 7000},
    {nombre: "Calzado", precio: 8000},
    {nombre: "Calzado", precio: 13000},
    {nombre: "Buzo", precio: 6000},
    {nombre: "Buzo", precio: 19000},
    {nombre: "Buzo", precio: 800},
]


// filter

// const buscar = (query) => {
//     return arrayProductos.filter( (prod) => prod.nombre === query )
// }
// const filtrado = buscar("Buzo")

// const filtrado = arrayProductos.filter( (prod) => prod.nombre === "Calzado")
// const filtrado = arrayProductos.filter( (prod) => prod.precio <= 5000)
const filtrado = arrayProductos.filter( (prod) => prod.precio <= 3000 && prod.nombre === "Pantalon")
const buscado = arrayProductos.find( (prod) => prod.precio <= 3000 && prod.nombre === "Pantalon")

// console.log( filtrado )
// console.log( buscado )

// map

// const mapeado = arrayProductos.map( (prod) => prod.nombre)

const nuevoStock = arrayProductos.map( (prod, i) => {
    return {
        id: i,
        nombre: prod.nombre,
        precio: prod.precio * 1.2
    }
})

// console.log(arrayProductos)
// console.log(nuevoStock)

// reduce
// let totalProductos = 0

// nuevoStock.forEach( (producto) => {
//     totalProductos += producto.precio
// })

// console.log(totalProductos)

// const totalProductos = nuevoStock.reduce( (acumulador, prod) => acumulador + prod.precio, 0 )

const costoEnvio = 5600

const totalProductos = nuevoStock.reduce( (acumulador, prod) => acumulador + prod.precio, costoEnvio )

// console.log( totalProductos )

// sort

// nuevoStock.sort( (a, b) => a.precio - b.precio)
// nuevoStock.sort( (a, b) => b.precio - a.precio)

const ordenado = nuevoStock.slice().sort( (a, b) => {
    if (a.nombre > b.nombre) {
        return 1
    }
    if (a.nombre < b.nombre) {
        return -1
    }
    if (a.nombre == b.nombre) {
        return 0
    }
})

console.log(nuevoStock)
console.log(ordenado)