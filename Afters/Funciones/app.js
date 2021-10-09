

// function saludar(mensaje) {
//     // let mensaje = "Hola mundo!"
//     console.log(mensaje)
// }

const saludar = (mensaje) => {
    console.log(mensaje)
}

let msg = "Algún string adentro"

// saludar(msg)

// ===== 

// const sumar = (a, b) => {
//     return a + b
// }

const sumar = (a, b) => a + b

let resultado = sumar(12400, 9439)
// console.log( resultado )

// ====== 


// escribir una función para sumar un rango de números
// sumarRango(1, 5)
// 1 + 2 + 3 + 4 + 5 = 15
// 5 + 4 + 3 + 2 + 1 = 15

const sumarRango = (inicial, final) => {
    let total = 0

    if (inicial <= final) {
        for (inicial; inicial <= final; inicial++) {
            total += inicial
            // total = sumar(total, inicial)
        }
    } else {
        for (inicial; inicial >= final; inicial--) {
            total += inicial
        }
    }

    return total
}

// console.log( sumarRango(-10, -1) )
// console.log( sumar( sumarRango(1, 10), sumarRango(20,17) ) )




// ====================
// funcion que según el banco y el monto que ingreso, me retorne al monto con interes
// pedirPrestamo( 150000, 'Nacion') ---> 189000


// const pedirPrestamo = (monto, banco) => {
//     let total = 0
    
//     switch(banco.toLowerCase()) {
//         case 'galicia':
//             // 1.15
//             total = monto * 1.15
//             break
//         case 'macro':
//             total = monto * 1.40
//             break
//         case 'nacion':
//             total = monto * 1.65
//             break
//         default:
//             alert('Banco incorrecto')
//     }

//     return total
// }

const pedirPrestamo = (monto, banco) => {

    // early return
    if (monto < 10000) { return "Monto inválido" }

    switch(banco.toLowerCase()) {
        case 'galicia':
            return monto * 1.15
        case 'macro':
            return monto * 1.30
        case 'nacion':
            return monto * 1.55
        case 'frances':
            return monto * 1.42
        default:
            alert('Banco incorrecto')
            return "Error"
    }

}

// console.log( pedirPrestamo(50000, 'Frances') )

const pedirDatos = () => {
    let banco = prompt('Ingrese su banco')
    let monto = parseInt( prompt('Ingrese el monto') )

    return pedirPrestamo(monto, banco)
}


let prestamosDisponibles = 1

while(prestamosDisponibles > 0) {

    let totalPrestamo = pedirDatos()
    console.log(totalPrestamo)

    prestamosDisponibles--
}
