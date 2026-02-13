const btn = document.getElementById("elinput");
const subsistema = document.getElementById("desplegable");
const lista = document.getElementById("listado");
const tarea = document.getElementById("nomtarea");

//Recoge la información del campo escrito y desplegable y los enseña por pantalla en la lista de tareas
btn.addEventListener("click",(event1)=>{
    event1.preventDefault();
    const li = document.createElement("li");
    li.textContent = tarea.value + " (" + subsistema.value + ")";
    lista.appendChild(li);
    tarea.value = null
});

//Detecta sobre que elemento de la lista estamos haciendo click y lo elimina
lista.addEventListener("click", function(event2) {

    if (event2.target.tagName === "LI") {
        event2.target.remove();
    }
});
