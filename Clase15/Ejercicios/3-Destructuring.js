
let resultadosExamen = {
  Primera: 9.8,
  Segunda: 9,
  Tercera: 7.6,
  Cuarta: 6.2,
  Quinta: 6,
  Sexta: 6,
};


let {Septima, Sexta, Cuarta} = resultadosExamen


// console.log(Septima)

// desestructuración de arrays

const arreglo = [1, 2, 3, 4, 5, 6]

const [,,, a, b] = arreglo

// console.log(a, b)

const data = [{nombre: "Juan", apellido: "Doe"}, ["Pepe", "Jorge", "Raul"]]

const [usuario, mascotas] = data

// console.log(usuario)
// console.log(mascotas)


// SPREAD OPERATOR ...

// console.log(...mascotas)

const copia = [...mascotas, "Dario"]
copia[0] = "Julieta"
// console.log(copia)
// console.log(mascotas)


const usuarioActual = {
    ...usuario,
    mascotas: mascotas,
    nombre: "Jorge"
}

console.log(usuarioActual)
