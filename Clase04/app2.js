// SCOPE 


let nombre = 'Martin'


function saludar() {
    let nombre = 'Samuel'
    console.log(nombre)
    
    saludarDeNuevo(nombre)
}


function saludarDeNuevo(saludo) {
    console.log(saludo)
}

// saludar()


// ==============

// function sumar(a, b) {
//     return a + b
// }

// == funcion anonima == 


// const sumar = function (a, b) {
//     return a + b
// }


// const sumar = (a, b) => {
//     return a + b
// }

// const restar = (a, b) => {
//     return a - b
// }

// const sumar = (a, b) => { 
//     return a + b
// }

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
const iva = (monto) => monto * 1.21

// console.log( sumar(10, 5) )
// console.log( restar(20, 6) )


const calcularPresupuesto = (ahorro, sueldo, gastos, interes) => {
    let presupuesto = sumar(ahorro, sueldo)
    let deducciones = multiplicar(gastos, interes)
    let resultado = restar(presupuesto, deducciones)

    return resultado
}

let total = calcularPresupuesto(250000, 80000, 67000, 1.4)

console.log(total)



// sumar( restar(10, 4), multiplicar(5, 6) )