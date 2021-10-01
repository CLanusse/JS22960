// CLASE 2

// let numero = 120
// const profesor = "Conrado Lanusse"

// console.log(profesor)
// alert(numero * numero)



// let numero = 20

// if (numero == 20) {
//     // operacion
//     console.log("Se cumple la condición")
// }
// console.log( numero == 200 )

// ==============

// const profe = prompt('Ingrese su nombre')

// if (profe == 'Conrado') {

//     alert('Bienvenido profesor, sos el mejor')

// } else {

//     alert('Usted no es el profesor. Impostor!')
    
// }



// const edad = parseInt( prompt('Ingrese su edad') )

// console.log( 5 < edad  && edad < 100)

// if (edad < 18) {
//     alert('Usted es menor de edad. No puede comprar cerveza')
// } else if (edad >= 100) {
//     alert('Usted no está vivo')
// } else {
//     alert('Usted sí puede comprar cerveza')
// }



// let nombre = prompt('Ingrese su nombre').toLowerCase()

// // nombre = nombre.toLowerCase()

// if (nombre == "conrado") {
//     alert('Bienvenido profesor')
// } else if (nombre == "martin") {
//     alert('Bienvenido tutor Martin!')
// } else if (nombre == "carlos") {
//     alert('Bienvenido tutor Carlos!')
// } else {
//     alert('Bienvenido/a estudiante ' + nombre)
// }


// ==================

// const password = 123456
// const usuario = prompt('Ingrese su usuario').toLowerCase()

// if (usuario == "conrado") {

//     const pass = parseInt( prompt('Ingrese la clave') )

//     if (pass == password) {
//         alert('Logeado correctamente. Bienvenido')
//     } else {
//         alert('Password incorrect. Pruebe nuevamente')
//     }

// } else {
//     alert("Usuario incorrecto. Pruebe nuevamente")
// }

// ======================

// const pass = parseInt(prompt('Ingrese el pass'))

// if (1234 === pass) {
//     alert('Se cumplio')
// } else {
//     alert('No se cumplió')
// }

// if (pass !== 123456) {
//     alert('La contraseña no es válida')
// } else {
//     alert('Bienvenido')
// }

// =================

// if (!false) {
//     alert('true')
// } else {
//     alert('false')
// }


// let ingreso

// console.log(typeof ingreso)

// if (!ingreso) {
//     alert('Usted no ingresó nada')
// }


// valores falsy:
// false
// null
// undefined
// 0
// ""


// =========================


// let edad = parseInt(prompt('ingrese su edad'))
// let nombre = prompt('Ingrese su nombre')

// if ((edad >= 18 && edad <= 60) || nombre === "Conrado") {
//     alert('Usted puede pasar')
// } else {
//     alert('Usted no puede pasar')
// }


const password = 123456

const usuario = prompt('Ingrese su usuario').toLowerCase()
const pass = parseInt( prompt('Ingrese la clave') )

if (usuario === "conrado" && pass === password) {
    alert("Bienvenido.")
} else {
    alert("Datos incorrectos. Pruebe nuevamente")
}


