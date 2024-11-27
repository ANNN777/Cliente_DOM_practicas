
//Si la bombilla está encendica hay que apagarla

let nodo_imagen=document.getElementById("bombilla");
let nodo_boton=document.querySelector("button");
//la primera etiqueta que cumple con el selector .css que le pasa como paramaetro
nodo_boton.addEventListener("click", cambia_imagen);


function cambia_imagen(){
    let nombre=nodo_imagen.getAttribute("src");
    if(nombre==="img/encendida.png"){
    nodo_imagen.setAttribute("src","img/apagada.png");
    nodo_boton.textContent="ENCENDER";
    }
    else{
        nodo_imagen.setAttribute("src","img/encendida.png");
        nodo_boton.textContent="APAGAR";
    }

} 

//ANTONIO JOSÉ MÉRIDA RODRÍGUEZ. 2º DAW//
