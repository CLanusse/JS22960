


// declaracion != llamado

// holaMundo()

// saludar()



// == declaracion ==

// function saludar() {
//     let nombre = prompt('Ingrese su nombre')
//     console.log('Hola! Bienvenido ' + nombre)

//     holaMundo()
// }

// function holaMundo() {
//     alert('Hola Mundo!')
// }

// == llamado ==

// saludar()

// saludar()

// saludar()


// === PARAMETROS ===

const profesor = "Conrado Lanusse el mejor del mundo"

function saludar(nombre) {
    alert("Hola! Bienvenido " + nombre)
}


// saludar("Martin")

// saludar("Mauro")

// saludar("Eva")

// saludar(profesor)



function sumar(a, b) {
    let resultado = a + b
    return resultado
}

function restar(a, b) {
    return a - b
}

function sumarIva(monto) {
    return monto * 1.21
}

// let resultado = sumar(5, 6)
// console.log(resultado)
// console.log( sumar(10, 15) )
// console.log( restar(10, 20) )

let resultado = sumar(5000, 6000)
console.log(resultado)

resultado = restar(resultado, 1500)
console.log(resultado)

resultado = sumarIva(resultado)
console.log(resultado)

// sumar(20, 10)
// sumar(5, 8)
// sumar(55, 96)

// restar(10, 5)
// restar(5, 10)

// sumar()

// let usuario = prompt('Ingrese su usuario')
// saludar(usuario)
// saludar( prompt('Ingrese su usuario') )

// console.log( prompt('Ingrese su nombre') )
// console.log( sumar(2, 5) )


