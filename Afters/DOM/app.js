
// selectores


const titulo = document.getElementById('titulo')
// const titulo = document.getElementsByClassName('titulo')[0]

console.log(titulo)

// titulo.innerText = "Hola Coders! Buen viernes"
titulo.innerHTML = "Hola Coders! Buen <strong>viernes</strong>"

// titulo.className = "font-big"
titulo.classList.add('font-big', 'font-small')
titulo.classList.remove('font-small')


// ========

const contenedorTexto = document.getElementById('texto')

// const fecha = "22/10/2021"
const fecha = new Date()

contenedorTexto.innerHTML = `
        <h2>Hoy es ${fecha.toLocaleString()}.</h2> 
        <br>"BienvenidoS"! 
        <br>${55 * 4 - 90}
    `


// ==============


// const contenedorProductos = document.getElementById('contenedor-produtos')
const contenedorProductos = document.querySelector('.container .row')

// const producto1 = {
//     id: 1,
//     nombre: "Buzo 1", 
//     tipo: "buzo", 
//     desc: "Un buzo", 
//     precio: 1200, 
//     talle: "L", 
//     img: './img/buzo.jpg'
// }


stockProductos.forEach((producto) => {

    const article = document.createElement('article')
    article.classList.add('card', 'col-3', 'm-2')
    article.id = `${producto.id}`
    
    article.innerHTML = `
            <img src=${producto.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.desc}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text font-small">Talle: ${producto.talle}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        `
    
    contenedorProductos.appendChild(article)
})
