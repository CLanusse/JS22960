// EVENTOS 


// primer forma - event listener

const boton1 = document.getElementById('boton1')


const clickeado = () => {
    console.log("Botón clickeado")
}

// boton1.addEventListener('click', clickeado)

boton1.addEventListener('click', (event) => {

    console.log(event)

    console.log(event.target)

    console.log(event.x)
    console.log(event.y)

    console.log("Botón 1 clickeado")
    // boton1.classList.toggle('agrandar')

})

// boton1.addEventListener('mouseover', () => {
//     boton1.classList.toggle('agrandar')
// })



// segunda forma - prop

const titulo = document.getElementById('titulo')
const boton2 = document.getElementById('boton2')

boton2.onclick = () => {
    alert("Botón 2 clickeado")
}
// boton2.onclick = clickeado

titulo.onmouseover = () => {
    titulo.classList.toggle('agrandar')
}

// tercera forma - atr en html

const clickBotonTres = () => {
    alert('Clickeaste el botón 3')
}

// ======== MODAL =====

const modalAbrir = document.getElementById('modal-abrir')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContainer = document.getElementById('modal-container')

// modalAbrir.addEventListener('click', () => {
//     modalContainer.classList.toggle('modal-active')
// })
// modalCerrar.addEventListener('click', () => {
//     modalContainer.classList.toggle('modal-active')
// })

const activarModal = () => { modalContainer.classList.toggle('modal-active') }
modalAbrir.onclick = activarModal
modalCerrar.onclick = activarModal

// modalCerrar.onmouseover = () => {
//     modalCerrar.classList.toggle('moverse')
// }

// ==== random background ===

// document.body.addEventListener('mousemove', () => {
//     console.log("Hola mundo")
// })

const randomColor = () => {
    const a = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    const c = Math.round(Math.random() * 255)

    return `rgb(${a}, ${b}, ${c})`
}

// window.addEventListener('DOMContentLoaded', () => {
//     document.body.style.background = randomColor()
// })

// setInterval(()=> {
//     document.body.style.background = randomColor()
// }, 5000)

// window.onload = () => {
//     document.body.style.background = randomColor()
// }


// document.body.addEventListener('click', () => {
//     document.body.style.background = randomColor()
// })

document.body.addEventListener('click', (event) => {
    console.log( event.target)
})


// ============ form / onchange - input - submit


const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')


inputNombre.addEventListener('input', (event) => {
    // console.log(event)

    const valor = inputNombre.value

    if (valor.length < 3) {
        inputNombre.classList.add('invalido')
        inputNombre.classList.remove('valido')
    } else {
        inputNombre.classList.add('valido')
        inputNombre.classList.remove('invalido')
    }
})

inputApellido.addEventListener('input', () => {
    const valor = inputApellido.value

    if (valor.length < 3) {
        inputApellido.classList.add('invalido')
        inputApellido.classList.remove('valido')
    } else {
        inputApellido.classList.add('valido')
        inputApellido.classList.remove('invalido')
    }
})

const form = document.getElementById('formulario')


const usuarios = []

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value

    if (nombre.length < 3) {
        alert('Nombre inválido')
        return
        // early return
    } 

    if (apellido.length < 3) {
        alert('Apellido inválido')
        return
    }

    const usuario = {
        nombre: nombre,
        apellido: apellido
    }

    usuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Usuario creado correctamente!')

    // nombre.value = ''
    // apellido.value = ''
    inputNombre.classList.remove('invalido', 'valido')
    inputApellido.classList.remove('invalido', 'valido')

    form.reset()
    modalCerrar.click()

})