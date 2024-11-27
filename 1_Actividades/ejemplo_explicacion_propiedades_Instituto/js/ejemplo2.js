let nodo_imagen=document.getElementById("logo");
/*function poner_rojo(){
    let nodos_parrafos=document.getElementsByTagName("p");
    for (const element of nodos_parrafos) {
        element.style.color="red";
        element.style.fontWeight="bold";
    }
}*/
/*Usando añadir las clases*/
function poner_rojo(){
    let nodos_parrafos=document.getElementsByTagName("p");
    for (const element of nodos_parrafos) {
        element.classList.add("rojo");
        element.classList.add("negrita");
    }
}
function poner_borde(){
   
    nodo_imagen.style.border="5px solid blue";
}
function cambia_imagen(){
    let nombre=nodo_imagen.getAttribute("src");
    if(nombre==="img/logo_alixar.png"){
    nodo_imagen.setAttribute("src","img/logo_alamos.png");
    }
    else{
        nodo_imagen.setAttribute("src","img/logo_alixar.png");
    }
    
}