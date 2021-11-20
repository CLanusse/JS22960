///Consologuear si Juan puede ver Max Max

const persona = {
  nombre: "Juan",
  edad: 12,
};

const pelicula = {
  titulo: "Mad Max",
  edadMinima: 16,
};

// ternary operator

// if (persona.edad >= pelicula.edadMinima) {
//     console.log("Puede ver la película")
// } else {
//   console.log("No puede ver la película")
// }

// persona.edad >= pelicula.edadMinima 
//   ? console.log("Puede ver") 
//   : console.log("No puede ver la pelicula")

const permitido = persona.edad >= pelicula.edadMinima ? true : false

// console.log(permitido)

// logical AND 

// permitido && console.log("Puede ver la película")

const mensaje = permitido && "Puede ver la pelicula"
// console.log(mensaje)

// logical OR --> retorna el de la derecha si el de la izq es FALSY 
// (null, undefined, NaN, 0, "", false)

const valor = 22000

const resultado = valor || 1500

// console.log(resultado)

// nullish coalescing operator => null / undefined

const resultado2 = 0 ?? 1500

console.log(resultado2)