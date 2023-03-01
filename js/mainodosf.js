
/* Containers */
let burgeroptions = document.getElementById('burger-div');
let bienvenida = document.getElementById('container-bienvenida');
let newtask = document.getElementById('newtask-section');
let containerLista = document.getElementById('container-lista')
let containerListaHije = document.getElementById('container-lista-hije')


/* Array */

let tareasArr = []

/* Botones */
let sumartarea  = document.getElementById('plus-img');
let hamburguesita = document.getElementById('hamburguesita');
let listo = document.getElementById('listo');
let salir = document.getElementById('salir');



/*Eventos*/
sumartarea.addEventListener('click', clicEnSumar);
hamburguesita.addEventListener('click', burgerdiv);
salir.addEventListener('click', cerrarPopUp);

/*Inputs*/
let taskname = document.getElementById('nt-input');
let description = document.getElementById('nt-description');
let category = document.getElementById('category-menu');




function burgerdiv (){
    burgeroptions.classList.toggle("active");
}

function cerrarPopUp (){
    containerLista.classList.add("active");
}


function clicEnSumar (){
    newtask.classList.add("active");
    bienvenida.classList.add("hidden");
    sumartarea.classList.add("hidden");
    containerLista.classList.remove("active");
}

function cerrarPopUp (){
    bienvenida.classList.remove("hidden");
    newtask.classList.remove("active");
    sumartarea.classList.remove("hidden");
}


listo.addEventListener('click', () => {

let categoria = category.value;
let nombretarea = taskname.value;
let descripciontarea = description.value;
let prioridad = document.querySelector('input[name="color"]:checked').classList[0];


if (categoria == "Personal"){
    iconito = "../images/reto3/love.svg";
}
if (categoria == "Trabajo"){
    iconito = "../images/reto3/work.svg";
}
if (categoria == "Casa"){
    iconito = "../images/reto3/home.svg";
}
if (categoria == "Entretenimiento"){
    iconito = "../images/reto3/play.svg";
}

if (prioridad == "fucsia"){
    pintar = "fucsia";
}
if (prioridad == "naranja"){
    pintar = "naranja";
}
if (prioridad == "amarillo"){
    pintar = "amarillo";
}
if (prioridad == "verde"){
    pintar = "verde";
}


let tareaIngresada = {
categoria = category.value;
nombretarea = taskname.value;
descripciontarea = description.value;
prioridad = document.querySelector('input[name="color"]:checked').classList[0];

}

cantidad++;
console.log(cantidad);

newtask.classList.remove("active");
newtask.classList.add("hidden");
sumartarea.classList.add("active");
containerLista.classList.add("active");

tareaIngresada = 
` <div class="tareasingresadas" id="tareasingresadas">
    <div class="color-categoria">
        <div class="colorear ${pintar}"></div>
        <div class="infocategoria">
        <img class="iconito" src="${iconito}" alt="">
        </div>
    </div>

    <div class="infotarea">
        <h3 id="nombretarea">${nombretarea}</h2>
        <p id="descripciontarea">${descripciontarea}</p>
    </div>
    
    <div class="tick-eliminar">
        <input type="checkbox" name="" class="tick" />
        <button class="eliminar" id="eliminar">
        <img id="tachito" src="../images/reto3/trash.svg" alt="" />
        </button>
    </div>
        
</div>`

containerLista.innerHTML += tareaIngresada;

taskname.value = "";
description.value = "";




}); 


cantidad = 0;


//ELIMINAR TAREA
//let eliminar = document.getElementById("eliminar");
//eliminar.addEventListener("click",(e)=>{
//e.target.parentNode.parentNode.parentNode.remove()
//})





//let eliminar = document.getElementById("eliminar");
//eliminar.addEventListener('click', (e) => {
//let item = e.target.parentElement.parentElement.parentElement;
//item.remove();

//})

//document.addEventListener('click', function (e) {
//    if (e.target.classList == 'eliminar') {
//        const tarea = e.target.parentNode.parentNode;
//        tarea.remove();
//    }
//})


//let eliminar = document.querySelectorAll(".eliminar");
//eliminar.forEach(function(papelera){
//    papelera.addEventListener("click", () => {
//    let item = this.parentElement.parentElement;
//    item.remove();
//    })
//})



//let eliminar = document.querySelector(".eliminar");
//eliminar.addEventListener('click', (e) => {
//    let item = e.target.parentElement.parentElement.parentElement;
//    containerLista.removeChild(item);
//
//})

//let eliminar = document.querySelector(".eliminar");
//let item = document.querySelector(".tareasingresadas");
//eliminar.addEventListener('click', () => {
//    containerLista.removeChild(item);
//})

//let eliminar = document.querySelector(".eliminar");
//eliminar[0]
//eliminar.addEventListener('click', (e) => {
//let item = e.target.parentElement.parentElement.parentElement;
//containerLista.remove(item);
//})
