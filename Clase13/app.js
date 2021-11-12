
$('#show').click( () => {
    $('h2').show()
})

$('#hide').click(()=>{
    $('h2').hide()
})

$('#fadein').click(()=>{
    $('h2').fadeIn(2000)
})

$('#fadeout').click(()=>{
    $('h2').fadeOut(4000)
})

// ==============

$('#test').fadeOut(3000, ()=>{
    
    $('#test').fadeIn(1500)
})



// === SLIDE ===
// $('#slide p').slideUp()

// $('#slide').click(() => {

//     $('#slide p').slideDown()

// })

$('#slide').click(()=>{
    $('#slide p').slideToggle(2000)
})


// const loopear = () => {
    // $('h1').fadeOut(1500, () => {
    //     $('h1').slideDown(500, loopear)
    // })
// }
// loopear()

// setInterval(() => {
//     $('h1').slideToggle(100)
// }, 110);


// === CSS ===
// $('section').css('background-color', '#C7C7C7')
// $('section').css('width', '60%')
// $('section').css('margin', '30px auto')

$('section').css({
    'background-color': '#C7C7C7',
    'width': '80%',
    'margin': '30px auto',
    'padding': '20px'
})

$('section').css({
    'background-color': 'red'
})

// clases
// $().addClass('nombreDeClase')
// $().removeClass('nombreDeClase')
// $().toggleClass('nombreDeClase')

$('#animar').css({
    'width': "400px",
    'height': "400px",
    "background-color": 'yellow'
})

// $('#animar').animate({
//     'width': '600px',
//     'height': '600px',
//     'border-radius': '50%'
// }, 2000, () => {
//     $('#animar').animate({
//         'width': '150px',
//         'height': '400px',
//         'border-radius': '0%',
//         'opacity': '0.3'
//     }, 3000, () => {
//         $('#animar').animate({
//             'width': '400px',
//             'height': '400px',
//             'opacity': '1'
//         }, 2000)
//     })
// })

$('#animar').animate({
                'width': '600px',
                'height': '600px',
                'border-radius': '50%'
            }, 2000)
            .delay(1000)
            .slideUp(500)
            .fadeIn(1500)
            .delay(2000)
            .animate({
                'width': '150px',
                'height': '400px',
                'border-radius': '0%',
                'opacity': '0.3'
            }, 3000)
            .fadeOut(300)
            .slideDown(5000)
            .animate({
                'width': '400px',
                'height': '400px',
                'opacity': '1'
            }, 2000)


$('small').css('color', 'red').hide()


// $('#enviar').click(() => {
//     const nombre = $('input').val()

//     if (nombre.length < 6) {
//         $('small').show().delay(2000).fadeOut(1000)
//     }
// })

$('#enviar').click(() => {
    const nombre = $('input').val()

    if (nombre.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre no es válido'
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: '¡Enviado correctamente!',
            confirmButtonText: 'Genial!'
        })
    }
})


// JS - Eventos

// transitionend
// animationend
// ontransition
// animationstart