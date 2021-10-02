

// const mensaje = "hola@mundo.com"

// const regExp = /\w+@\w+.com/

// console.log( regExp.test(mensaje) )


// estructura IF

// const edad = Number(prompt('Ingrese su edad'))


// if (edad) {
//     console.log(edad)
// } else {
//     console.log("Valor falsy: ", edad)
// }

// == falsy  ==
// false
// 0
// ""
// null
// undefined
// NaN

// EJEMPLO 1

// const numero = Number(prompt('Ingrese un número'))

// console.log(numero)
// console.log(typeof numero)
// console.log( isNaN(numero) )

// if ( !isNaN(numero) ) {

//     if(numero === 1000) {
//         console.log("El número es exactamente mil!")
//     } else if (numero > 1000) {
//         console.log('El número es mayor que mil')
//     } else {
//         console.log('El número es menor que mil')
//     }

// } else {
//     alert('No ingresaste un número!')
// }

// forma inversa

// if ( isNaN(numero) ) {
//     alert('No ingresaste un número!')

// } else {

//     if(numero === 1000) {
//         console.log("El número es exactamente mil!")
//     } else if (numero > 1000) {
//         console.log('El número es mayor que mil')
//     } else {
//         console.log('El número es menor que mil')
//     }
// }


// EJEMPLO 2

// const saludo = prompt('Ingrese un saludo').toLowerCase().trim()

// if (saludo === "hola") {

//     alert('Hola a vos también!')

// } else {

//     alert('No me saludaste =( ')

// }

// ejemplo con regExp


// if (/hola/.test(saludo)) {
//     alert('Hola a vos también')
// } else {
//     alert('No me saludaste')
// }



// indices - SLICE

let mensaje = "Hola mundo Coder!"
mensaje = mensaje.toLowerCase()
// console.log( mensaje[11] )
// console.log( mensaje.slice(0, 1) )
console.log( mensaje[0].toUpperCase() + mensaje.slice(1) )