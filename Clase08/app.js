// === DOM ===

const tituloPrincipal = document.getElementsByTagName('h1')[0]
// console.log(tituloPrincipal)

tituloPrincipal.innerHTML = "Hola <strong> mundo </strong>!!"

// console.log( tituloPrincipal.offsetTop )

const titulo = document.getElementById('titulo')

// console.log( titulo )


titulo.innerText = "Hola Coders, bienvenidos"
titulo.className = "gigante titulo"

// titulo.style.display = "none"
// console.log( titulo.id )


const items = document.getElementsByClassName('item')
// const items = document.getElementsByTagName('li')

for (const item of items) {

    item.classList.add('gigante') 
}

// console.log( document.getElementsByClassName('item gigante') )

const texto = document.getElementById('texto')

texto.innerHTML = "<p>Hola gente coder son<strong> el mejor curso </strong> el universo</p>"


// =========================


const p = document.createElement('p')
p.className = "titulo"
p.innerText = "Hoy es jueves de siluetas"

// console.log(p)

// agrego al inicio
// texto.prepend(p)

// agregar al final
texto.append(p)

// remove()

// titulo.remove()
// p.remove()

// document.body.appendChild(p)


// =========================

const contenedorProductos = document.getElementById('productos')



const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 5500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 6500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: 7500,
        img: "https://via.placeholder.com/250"
    },
]

productos.forEach( (prod) => {

    const div = document.createElement('div')
    div.id = `producto${prod.id}`
    // TEMPLATE STRING
    div.innerHTML = `
        <img src=${prod.img} />
        <h3 class="titulo">${prod.nombre}</h3>
        <p class="strong">Precio: $${prod.precio}</p>
        <p>Código: ${prod.id}</p>
    `

    contenedorProductos.append(div)
})



// ============


const input = document.getElementById('input')

console.log(input.value)
