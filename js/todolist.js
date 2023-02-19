
let master = document.getElementById('container')
let addButton = document.getElementById('add').addEventListener('click', function(){
    let txt = "Holi soy una tarea"
    let modelo = `<li class="list-group-item">${txt}</li>`
    master.innerHTML += modelo
})
