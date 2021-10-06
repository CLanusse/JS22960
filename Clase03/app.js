// Clase 03 - Ciclos e iteraciones




//   paso 0    paso 1   paso 3
// for (let i = 0; i < 5; i++) {
//     // el código a ejecutar

//     // paso 2
//     console.log(i * 2)
// }


// console.log("Fin de la iteración")



// for (let i = 10; i >= 1; i--) {
//     console.log(i)
// }



// let usuario = prompt('Ingrese su nombre')

// for (let usuario = prompt('Ingrese su nombre'); usuario !== "Conrado"; usuario = prompt('Ingrese su nombre')) {
//     alert('Nombre incorrecto, pruebe nuevamente')
// }

// alert('Bienvenido profesor')


// == TABLA == 


// const tabla = parseInt( prompt('Ingrese la tabla a saber') )

// for (let i = 1; i <= 10; i++) {
//     console.log(i * tabla)
// }


// == BREAK == 

// const numeroProhibido = 22960

// for (let i = 1; i <= 100; i++) {

//     if (i === numeroProhibido) {
//         console.log("EL NÚMERO PROHIBIDO! ARGH!")
//         break
//     }

//     console.log(i)
// }

// for (let i = 1; i <= 100; i++) {

//     if (i === numeroProhibido) {
//         console.log("EL NÚMERO PROHIBIDO! ARGH!")
//         continue
//     }

//     console.log(i)
// }


// == TRIANGULITO ==



// const limite = parseInt(prompt('Ingrese el limite'))

// let triangulo = "#"

// for (let i = 0; i < limite; i++) {
    
//     console.log(triangulo)
    
//     triangulo += "#"
//     // triangulo = triangulo + "#"
// }

// for (let triangulo = "#"; triangulo.length <= limite; triangulo += "#") {
//     console.log(triangulo)
// }



// == WHILE ==



// let usuario = prompt('Ingrese su nombre')

// while (usuario !== "Conrado") {
//     // alert('Usuario incorrecto, pruebe nuevamente')
//     usuario = prompt('Usuario incorrecto, pruebe nuevamente')
// }

// alert('Bienvenido profesor')


// const tabla = parseInt( prompt('Ingrese la tabla a saber') )

// let i = 1

// while(i <= 10) {
//     console.log(tabla * i)

//     i++
// }


// let pass
// let contadorPass = 0

// do {

//     pass = parseInt( prompt('Ingrese la contraseña'))

// } while (pass !== 1234)



// while(pass !== 1234) {

//     if (contadorPass === 3) {
//         alert('Acceso bloqueado')
//         break
//     }

//     pass = parseInt( prompt('Contraseña incorrecta, pruebe nuevamente') )
//     contadorPass++
// }


// while (true) {

//     if (pass = 1234) { break }
//     if (usuario = "Conrado") { break }

// }


// == SWITCH ==


// let nombre = prompt('Ingrese su nombre')

// while(nombre !== "ESC") {

//     switch (nombre) {
//         case "Conrado":
//             alert('Bienvenido profesor Conrado')
//             break
//         case "Martin":
//             alert('Bienvenido tutor Martin')
//             break
//         case "Carlos":
//             alert('Bienvenido tutor Carlos')
//             break
//         case "Samuel":
//             alert('Bienvenido tutor Samuel')
//             break
//         case "German":
//             alert('Bienvenido tutor German')
//             break
//         case "Agostina":
//             alert('Bienvenido tutora Agostina')
//             break
//         default:
//             alert('Bienvenido/a estudiante ' + nombre)
//             break
//     }

//     nombre = prompt('Ingrese su nombre')
// }


// if (nombre === "Conrado") {
//     alert('Bienvenido profesor Conrado')
// } else if (nombre === "Martin") {
//     alert('Bienvenido tutor Martin')
// } else if (nombre === "Carlos") {
//     alert('Bienvenido tutor Carlos')
// } else if (nombre === "Samuel") {
//     alert('Bienvenido tutor Samuel')
// } else {
//     alert('Bienvenido/a estudiante ' + nombre)
// }


let banco = prompt('Ingrese su banco')
let monto = parseInt( prompt('Ingrese el monto') )

let interes = 0


switch (banco) {
    case "Santander":
        interes = 1.10
        break
    case "Macro":
        interes = 1.40
        break
    case "Nacion":
        interes = 2.20
        break
    case "Galicia":
        interes = 1.32
        break
    default:
        alert('No ingresó un banco válido')
}

if ( interes !== 0) {
    alert('Su banco ' + banco + ' le ofrece el préstamo por ' + (monto * interes).toFixed(2) )
}