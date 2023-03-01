/* Containers */
let burgeroptions = document.getElementById('burger-div');
let bienvenida = document.getElementById('container-bienvenida');
let newtask = document.getElementById('newtask-section');
let containerLista = document.getElementById('container-lista')
let containerListaHije = document.getElementById('container-lista-hije')


/* Botones */
let sumartarea  = document.getElementById('plus-img');
let hamburguesita = document.getElementById('hamburguesita');
let listo = document.getElementById('listo');
let salir = document.getElementById('salir');

/*Eventos*/
sumartarea.addEventListener('click', clicEnSumar);
hamburguesita.addEventListener('click', burgerdiv);
salir.addEventListener('click',cerrarPopUp);

/*Inputs*/
let taskname = document.getElementById('nt-input');
let description = document.getElementById('nt-description');
let category = document.getElementById('category-menu');
let color = document.querySelector('input[name="color"]:checked');


function burgerdiv (){
    burgeroptions.classList.toggle("active");
}

function clicEnSumar (){
    newtask.classList.add("active");
    bienvenida.classList.add("hidden");
    sumartarea.classList.toggle("hidden");
    containerLista.classList.add("hidden");
}


let cantidad = 0;

listo.addEventListener('click', () => {

let nombretarea = taskname.value;
let descripciontarea = description.value;
let categoria = category.value;

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

    cantidad++;
    newtask.classList.remove("active");
    newtask.classList.add("hidden");
    sumartarea.classList.toggle("active");
    containerLista.classList.add("active");

    tareaIngresada = 
    ` <div class="tareasingresadas">
        <div class="infocategoria">
        <img src="${iconito}" alt="" />
        </div>
        <div class="infotarea">
            <h2 id="nombretarea">${nombretarea}</h2>
            <p id="nombretarea">${descripciontarea}</p>
        </div>
        <div class="tick-eliminar">
        <input type="checkbox" name="" id="tick" />
        <button id="eliminar" class="eliminar">
        <img src="../images/reto3/trash.svg" alt="" />
        </button>
        </div>
    </div>`
    containerLista.innerHTML += tareaIngresada;

})
