// const funcionConCB = (valor, fn) => {
//     console.log(valor)
//     if (fn) {
//         fn()
//     }
// }

// const CB = () => {
//     alert("Este es el callback")
// }

// funcionConCB("Hola mundo", CB)

// HIGHER ORDER FUNCTION

const arreglo = [1, 2, 3, 4, 5]

const porCadaUno = (array, fn) => {
    for (const el of array) {
        fn(el)
    }
}

// porCadaUno(arreglo, (el) => {
//     console.log(el)
// })

// arreglo.forEach((el) => {
//     console.log(el)
// })

const filtrar = (array, fn) => {
    let filtrado = []
    for (const el of array) {
        if (fn(el)) {
            filtrado.push(el)
        }
    }

    return filtrado
}

const resultado = filtrar(arreglo, (el) => el <= 3)
// console.log(resultado)