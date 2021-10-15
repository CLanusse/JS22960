
// const nombre = "Samuel Tocaimaza"
// const edad = 16 * 2
// const trabajo = "tutor"
// const estadoCivil = "disponible"

const texto = "Hola"


const tutor = {
    nombre: "Samuel",
    edad: 30,
    rol: "tutor",
    casado: false
}

const tutor2 = {
    nombre: "Martin",
    edad: 38,
    rol: "tutor",
    mascota: {
        nombre: "Jorge",
        edad: 4
    }
}

console.log(tutor2.mascota.nombre)

// const tutor3 = {
//     nombre: tutor.nombre,
//     edad: tutor.edad
// }
// tutor3.nombre = "Soledad"

// console.log(tutor)
// console.log(tutor3)

tutor.nombre = "Carlos"
tutor.edad = 27

tutor["rol"] = "coordinador"

tutor.curso = "JS"

tutor2["curso"] = "JS"

// console.log(tutor)
// console.log(tutor2)

// console.log(tutor.curso)
// console.log(tutor.edad)

// console.log(tutor.nombre, tutor.edad, tutor.rol )

// console.log( tutor2["rol"] )
// console.log( tutor2["casado"] )




// === CONSTRUCTORES ===

// const producto = {
//     nombre: "Remera 1",
//     precio: 1200,
//     desc: "Una remera hermosa"
// }


function Producto(nombre, precio, desc, stock) {
    
    this.nombre = nombre
    this.precio = precio
    this.desc = desc
    this.stock = stock
    
    this.restarStock = () => {
        this.stock--
    }

    this.agregarStock = (cantidad) => {
        this.stock += cantidad
        // this.stock = stock +cantidad
    }
}



// const prod = {
//     // producto()
//     // this == prod
//     // prod.nombre = nombre 
//     // prod.precio = precio
// }

const producto1 = new Producto("Remera 1", 1200, "Una remera increíble", 20)
const producto2 = new Producto("Zapatillas 1", 5500, "Zapas re buenas", 20)

producto1.restarStock()
producto2.restarStock()

producto1.agregarStock(40)

// console.log(producto1.nombre.toUpperCase())
// console.log(producto2)


// === CLASES ===




class Mascota {
    // constructor --> propiedades
    constructor (nombre, edad, tipo) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
    }
    
    // metodos
    cumplirAnios() {
        this.edad++
    }

    hablar() {
        console.log(this.nombre + " dice hola!")
    }
}


const mascota1 = new Mascota("Zuri", 1, "cobayo")
const mascota2 = new Mascota("Pepe", 5, "perro")

mascota1.cumplirAnios()
mascota1.hablar()
mascota2.hablar()

console.log(mascota2.edad)

mascota1.color = "marroncito"

// Object.prototype.gritar = () => {
//     console.log("ARRRGH")
// }

// mascota1.gritar()

// producto1.gritar()
// tutor2.gritar()

// console.log(producto1)
// console.log(mascota1)