let arrOriginal = [3, 4, 2, 4, 4, 5, 12, 24, 3, 23, 232, 2, -3, -9, 2, -23, 200, -23, 12, 43, 4, -32, -32, 0, 23, 23];

let arrPositivos = arrOriginal.filter(n => n >= 0);

let arrValidos = arrPositivos.filter(n => n <= 10);

let arrFiltrados = arrPositivos.filter(n => n <= 100 && n % 2 === 0);

let arrCubos = arrFiltrados.map(n => n**3);

let arrCubosFiltrados = arrCubos.filter(n => n % 10 === 0);

let arrFinal = [arrCubosFiltrados,21];

let arrCopia = [...arrFinal];

function ejercicio2(arrayimprimir) {

    const ej2 = (arr) => {      //añade texto delante y detras del parámatro de entrada
        frase = "En el subsistema de software somos " + arr + " miembros";
        console.log(frase);
        return frase
    };

    Sol1 = arrayimprimir.map(ej2); 

    //console.table(Sol1);      //Version tabla
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

console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 2___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio2(arrOriginal));
console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 3___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio3());
console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 4___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio4());
console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 5___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio5());
console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 6___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio6());
console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 7___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio7());
console.log("_____________________________________________________________________________________________");
console.log("_______________________________________Ejercicio 8___________________________________________");
console.log("_____________________________________________________________________________________________");
console.log(ejercicio8()); 