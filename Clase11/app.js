


// const tituloVanilla = document.getElementById('titulo')
const tituloVanilla = document.querySelector('h2.titulo')
console.log(tituloVanilla)

const tituloJQ = $('h2.titulo')

// tituloVanilla.innerText = "Hola Coder!"
tituloJQ.text('Hola Coder!')


const todo = $('h1, h2, section p')

// todo.text('AC/DC')

// console.log( document.querySelectorAll('.item') )

$('.item').html('<h3>Soy un item</h3>')

$('.item:nth-of-type(3)').html('<h2>Soy el mejor item</h2>')

$('li:first-of-type').css('color', 'red')


const check = document.getElementById('check')

check.addEventListener('click', () => {
    // const value = $('.radio:checked').val()
    const value = document.querySelector('.radio:checked').value 

    console.log(value)
})
// check.addEventListener('click', () => {
//     const value = $('.checkbox:checked')

//     console.log(value)
// })

// ==== AGREGAR ELEMENTOS  =====


const div = document.createElement('div')
div.className = "tutores"
div.innerHTML = `
    <h2>Tutor: Martin Bonino</h2>
    <p>Antigüedad: 19 años</p>
`

// $('#tutores').append(div)

$('#tutores').append(`
    <div class="tutores">
        <h2>Tutor: Martin Bonino</h2>
        <p>Antigüedad: 19 años</p>
    </div>
`)


const productos = [
    {
        nombre: "Producto 1",
        precio: 1500,
        id: 1
    },
    {
        nombre: "Producto 2",
        precio: 2500,
        id: 2
    },
    {
        nombre: "Producto 3",
        precio: 3500,
        id: 3
    },
    {
        nombre: "Producto 4",
        precio: 4500,
        id: 4
    },
]

for (const prod of productos) {

    $('#productos').prepend(`
        <article class="productCard">
            <h4>${prod.nombre}</h4>
            <p>Precio: $${prod.precio}</p>
            <small>Código: ${prod.id}</small>
        </article>
    `)
}
