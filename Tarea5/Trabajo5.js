const btn = document.getElementById("elinput");
const subsistema = document.getElementById("desplegable");
const lista = document.getElementById("listado");
const tarea = document.getElementById("nomtarea");

let cont = 1;

function norefresh(){}

btn.addEventListener("click",(event1)=>{
    event1.preventDefault();
    const li = document.createElement("li");
    li.textContent = tarea.value + " (" + subsistema.value + ")";
    lista.appendChild(li);
    tarea.value = null
});

li.addEventListener("click",(event2)=>{
    event2.preventDefault();
    getElementById("listado");
    li.remove;
});

li.addEventListener("mouseover",()=>{
    li.classList.add(rojo);
});
