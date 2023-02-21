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
let addBtn = document.getElementById('add').addEventListener('click', function(){
    newtask.classList.toggle('active')
    document.getElementById('container-input').style.display = 'none'
})

/* clic en listo */
let listadito =  document.getElementById('ul-input')
let txt = "hola"

let listo = document.getElementById('listo').addEventListener('click', function(){
    newtask.classList.toggle('inactive')
    document.getElementById('container-input').style.display = 'block'
    let modelo = `<li class="list-group-item" aria-current="true">${txt}</li>`
    listadito.innerHTML += modelo
})


/*let input = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')
let empty = document.querySelector('.empty')

btn.addEventListener("click", function(e){
    e.preventDefault()

    let task = input.value

    if (task !== ""){

        let li = document.createElement('li')
        let p = document.createElement('p')
        p.textContent = task

        li.appendChild(p)
        li.appendChild(taskDelete())
        ul.appendChild(li)

        input.value = ""
        empty.style.display='none'
    }


})*/

