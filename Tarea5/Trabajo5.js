const btn = document.getElementById("elinput");
const subsistema = document.getElementById("desplegable");
const lista = document.getElementById("listado");
const tarea = document.getElementById("nomtarea");

let cont = 1;

function norefresh(){}

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    const li = document.createElement("li");
    li.textContent = tarea.value + " (" + subsistema.value + ")";
    lista.appendChild(li);
    tarea.value = null
});