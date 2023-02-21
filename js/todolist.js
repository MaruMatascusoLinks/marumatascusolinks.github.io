
/*const dom = document.getElementById('html')*/
const bienvenida = document.getElementById('container-bienvenida')
const newtask = document.getElementById('container-newtask')
const plus  = document.getElementById('plus-img')
const listadito =  document.getElementById('ul-input')
const listo = document.getElementById('listo')
const input = document.getElementById('taskinput') 
const pendientes = document.getElementById('container-input')


/* Eventos  */
plus.addEventListener('click', taskInput)
listo.addEventListener('click', agregarTarea)

/* Abrir Task Input */

function taskInput(){
    if (newtask.classList.contains('hidden')){
    newtask.classList.remove('hidden');
    plus.classList.toggle('inactive');
    bienvenida.classList.toggle('inactive');
    }
    else
    newtask.classList.add('hidden');
    plus.classList.toggle('active');
    bienvenida.classList.toggle('active');
}

/* Agregar tarea al listado si el input es distinto a "", que me cree un li y lo agregue al listado */

function agregarTarea(){
    if (input!==""){
        
        newtask.classList.add('hidden');
        pendientes.classList.remove('hidden');
        let modelo = `<li class="list-group-item" aria-current="true">${input}</li>`
        let li = document.createElement(modelo)
        listadito.innerHTML += li;
        
    }   
}
        /*plus.classList.add('active');
        bienvenida.classList.add('active');

        let li = document.createElement(`<li class="list-group-item" aria-current="true">${txt}</li>`);
        let p = document.createElement('p');
        p.textContent = input;

        li.appendChild(p);
        listadito.innerHTML += li;
    }
    
}




/*click en dom para ocultar input de tareas 

dom.addEventListener('click', inicio)

function inicio(){
    if (bienvenida.classList.contains('inactive')){
        newtask.classList.add('hidden');
        bienvenida.classList.toggle('active');
        plus.classList.toggle('active');
    }
}*/