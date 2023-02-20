/* ------- click en icono agregar --------- */

let bienvenida = document.getElementById('container-bienvenida')
let plus  = document.getElementById('plus-img')

let agregar = document.getElementById('nuevatarea').addEventListener('click', function(event){
    event.preventDefault()
    bienvenida.classList.toggle('inactive')
    plus.classList.toggle('inactive')
    document.getElementById('container-input').style.display = 'block'
})

/* Clic en nueva tarea */

let newtask = document.getElementById('container-newtask')
let addBtn = document.getElementById('add').addEventListener('click', function(event){
    event.preventDefault()
    newtask.classList.toggle('active')
    document.getElementById('container-input').style.display = 'none'
})

/* clic en listo */
let listadito =  document.getElementById('ul-input')
let txt = "acá debería agarrar el input de tarea"

let listo = document.getElementById('listo').addEventListener('click', function(event){
    event.preventDefault()
    newtask.classList.toggle('inactive')
    document.getElementById('container-input').style.display = 'block'
    let modelo = `<li class="list-group-item active" aria-current="true">${txt}</li>`
    listadito.innerHTML += modelo
})



