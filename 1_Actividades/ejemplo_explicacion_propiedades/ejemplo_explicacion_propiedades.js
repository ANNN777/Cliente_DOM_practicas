//let parrafo = document.getElementById("parrafo1");
let boton_rojo= document.getElementById("red");
let boton_amarillo= document.getElementById("yellow");
let boton_verde= document.getElementById("green");

//Lo primero es saber a qué quiero programar el evento.
boton_rojo.addEventListener("click", funcion_rojo);
boton_amarillo.addEventListener("click", funcion_amarillo);
boton_verde.addEventListener("click", funcion_verde);

function funcion_rojo() {
    let nodos_parrafos = document.getElementsByTagName("p");
    console.log(nodos_parrafos);//Esto es un HTMLCollection(1) que a su vez es un array
    for (const element of nodos_parrafos) {
        element.style.color = "red";
    }
}

    function funcion_amarillo() {

        let nodos_parrafos = document.getElementsByTagName("p");
        console.log(typeof nodos_parrafos);//Esto es un object
        for (const element of nodos_parrafos) {
            element.style.color = "yellow";
        }
}

function funcion_verde() {
    let nodos_parrafos = document.getElementsByTagName("p");
    for (const element of nodos_parrafos) {
        element.style.color = "green";
    }
}

