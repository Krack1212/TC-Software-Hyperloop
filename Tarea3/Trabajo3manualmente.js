let arrOriginal = [3, 4, 2, 4, 4, 5, 12, 24, 3, 23, 232, 2, -3, -9, 2, -23, 200, -23, 12, 43, 4, -32, -32, 0, 23, 23];

let arrPositivos = arrOriginal.filter(n => n >= 0);

let arrValidos = arrPositivos.filter(n => n <= 10);

let arrFiltrados = arrPositivos.filter(n => n <= 100 && n % 2 === 0);

let arrCubos = arrFiltrados.map(n => n**3);

let arrCubosFiltrados = arrCubos.filter(n => n % 10 === 0);

let arrFinal = [arrCubosFiltrados,21];

let arrCopia = [...arrFinal];

let seleccion =    2   ;    //Introduce el número de ejercicio que quieras ejectuar (en el rango 2-8 y sin "")

switch (seleccion) {        //Elige y ejectuta el ejericio indicado en la variable seleccion
    case 2:
        ejercicio2()
        break;
    case 3:
        ejercicio3()
        break;
    case 4:
        ejercicio4()
        break;
    case 5:
        ejercicio5()
        break;
    case 6:
        ejercicio6()
        break;
    case 7:
        ejercicio7()
        break;
    case 8:
        ejercicio8()
        break;
    default:
        console.log("Ejercicio no válido");
}

function ejercicio2(arrayimprimir) {

    const ej2 = (arr) => {      //añade texto delante y detras del parámatro de entrada y lo imprime en terminal
        frase = "En el subsistema de software somos " + arr + " miembros";
        console.log(frase);
        return frase
    };

    Sol1 = arrayimprimir.map(ej2);        //Aplica la funcion ej2 a cada elemento de un array

    //console.table(Sol1);      //Se muestra el array en forma de tabla
}

function ejercicio3() {

    ejercicio2(arrPositivos)
}

function ejercicio4() {

    ejercicio2(arrValidos)
}

function ejercicio5() {

    ejercicio2(arrFiltrados)
}

function ejercicio6() {

    ejercicio2(arrCubosFiltrados)
}

function ejercicio7() {

    ejercicio2(arrFinal)
}
function ejercicio8() {

    console.log("Añadimos un elemento al arrCopia");
    console.log("arrCopia: " + ejercicio2(arrCopia.push(45)));
    console.log("Ahora imprimimos el arrFinal");
    console.log("arrFinal: " + ejercicio2(arrFinal));
    console.log("Observamos que no se ha modificado, esto se debe a que al definir arrCopia hemos hecho un paso por valor con el spread operator(...)");

} 