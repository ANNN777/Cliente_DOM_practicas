let nodo_imagen=document.getElementById("logo");//Lo tengo aquí para luego ir cambiándolos abajo

function poner_rojo(){

    let rojo = document.getElementsByTagName("p");//Estoy llamando a la etiqueta "p"

    for (const item of rojo){
        item.style.color="red";
        item.style.fontWeight="bold";
    }
    console.log(rojo)
}

//poner borde a la imagen
function poner_borde(){

    let logo = document.getElementById("logo");

    logo.style.border="4px solid blue";

}

//cambiar la imagen con una funcion
function cambia_imagen(){

    let nombre=nodo_imagen.getAttribute("src");//El nombre lo que me va a dar lo que hay dentro del src
   // console.log(nombre);
    
    if(nombre === "img/logo_alixar.png" ) {//El nombre se condiciona y valida lo que hay en el interior del nombre
        //Si está el alixar_me coge y al clicar me cambia al otro 
        nodo_imagen.setAttribute("src","img/logo_alamos.png");
    } else  {
        nodo_imagen.setAttribute("src","img/logo_alixar.png");
    }
}

