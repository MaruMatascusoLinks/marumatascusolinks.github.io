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

/*Eventos*/
sumartarea.addEventListener('click', clicEnSumar);
hamburguesita.addEventListener('click', burgerdiv);

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
    containerLista.style.display("none");
}

//let cantidad = 0;
//cantidad++;

//tareaIngresada = ` <div class="tareasingresadas">
//<p id="nombretarea">${nombretarea}</p>
//</div>`;
//containerLista.innerHTML += tareaIngresada;


//<img src="${imgTipo}" alt="" />

let cantidad = 0;

listo.addEventListener('click', () => {

let nombretarea = taskname.value;
let descripciontarea = description.value;
let categoria = category.value;

if (nombretarea!=="" && descripciontarea!==""){
    cantidad++;
    newtask.classList.remove("active");
    newtask.classList.add("hidden");
    sumartarea.classList.toggle("active");
    containerLista.classList.add("active");

    tareaIngresada = 
    ` <div class="tareasingresadas">
        <div class="infocategoria">
            <p id="categoriatarea">${categoria}</p>
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

}else{
    alert("Por favor completá todos los campos :)")
}

})




/*let cantidad = 0;
if (cantidad <= 0){
    newtask.classList.remove("active");
    newtask.classList.add("hidden");
    bienvenida.classList.toggle("active");
} 
if (cantidad >= 1) {
    newtask.classList.remove("active");
    newtask.classList.add("hidden");
    containerLista.classList.add("active");
}

let tarea = taskname.value;
    
    
cantidad++;
tareaIngresada = `<p id="nombretarea">${tarea}</p>`;
    
listadito.innerHTML += tareaIngresada;
console.log(importance); */