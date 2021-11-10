$(document).ready(() => {
    // $('#input-tarea').trigger('focus')
    document.querySelector('#input-tarea').focus()
})


// $('#input-tarea').change( () => {
//     const value = $('#input-tarea').val()

//     if (value.length < 4) {
//         $('#input-tarea').addClass('invalido')
//         $('#input-tarea').removeClass('valido')
//     } else {
//         $('#input-tarea').addClass('valido')
//         $('#input-tarea').removeClass('invalido')
//     }
// })

$('#input-tarea').on('input', () => {
    const value = $('#input-tarea').val()

    if (value.length < 4) {
        $('#input-tarea').addClass('invalido')
        $('#input-tarea').removeClass('valido')
    } else {
        $('#input-tarea').addClass('valido')
        $('#input-tarea').removeClass('invalido')
    }
})

let contadorTareas = 1

$('#form-tareas').submit( (e) => {
    e.preventDefault()

    const value = $('#input-tarea').val()

    if (value.length >= 4) {
        $('#listado').append(`
            <li id="tarea${contadorTareas}">
                <h3>${value}</h3>
                <p>Creada el: ${ new Date().toLocaleString() }</p>
                <button id="eliminar${contadorTareas}">Eliminar</button>
            </li>
        `)

        const tarea = $(`#tarea${contadorTareas}`)
        const boton = $(`#eliminar${contadorTareas}`)

        boton.click( () => {
            tarea.remove()
            $('#input-tarea').trigger('focus')
        })

        // boton.click( () => {
        //     boton.parent().remove()
        // })

        contadorTareas++

        $('#input-tarea').val('')
        $('#input-tarea').removeClass('valido')
    }
} )


$('#vaciar-lista').click( () => {
    $('li').remove()
})