
//Si la bombilla está encendica hay que apagarla
/*
let nodo_imagen=document.getElementById("bombilla");
let nodo_boton=document.querySelector("button");
//la primera etiqueta que cumple con el selector .css que le pasa como paramaetro
//Selecciona el primer elemento <button> del DOM.
nodo_boton.addEventListener("click", cambia_imagen);


function cambia_imagen(){
    let nombre=nodo_imagen.getAttribute("src");
    if(nombre==="img/encendida.png"){
    nodo_imagen.setAttribute("src","img/apagada.png");
    nodo_boton.textContent="ENCENDER";//el textContent accedes al contendio odel botón
    }
    else{
        nodo_imagen.setAttribute("src","img/encendida.png");
        nodo_boton.textContent="APAGAR";
    }

} 
*/
//ANTONIO JOSÉ MÉRIDA RODRÍGUEZ. 2º DAW//

let nodo_imagen = document.getElementById("bombilla");
let botones = document.querySelectorAll("button"); // Selecciona todos los botones

botones.forEach((boton) => {
    boton.addEventListener("click", alternar_bombilla);
});
//forEach es un método de las colecciones que permite recorrer cada elemento en la lista.
//En este caso, recorre cada botón dentro de la colección botones.

function alternar_bombilla() {
    let nombre = nodo_imagen.getAttribute("src");
    if (nombre === "img/encendida.png") {
        nodo_imagen.setAttribute("src", "img/apagada.png");
    } else {
        nodo_imagen.setAttribute("src", "img/encendida.png");
    }
}
