// tipycode

console.log("Inicio")

let data = []

$.get('https://jsonplaceholder.typicode.com/posts', (response) => {

    data = response

    data.forEach((post) => {
        $('#posts').append(`
            <li>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </li>
        `)
    })

    console.log("¡Respuesta!")
    console.log(data)
})

console.log("Final")


$.get('./tutores.json', (resp) => {

    console.log(resp)

    resp.forEach((tutor) => {
        $('#tutores').append(`
            <li>
                <h3>Tutor: ${tutor.nombre}</h3>
            </li>
        `)
    })
})




















// ========= JSON ============

