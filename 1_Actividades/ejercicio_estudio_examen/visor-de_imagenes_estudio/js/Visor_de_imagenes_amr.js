let nodo_imagen_central = document.getElementById("imagenCentral");

let nodo_boton_columna = document.querySelectorAll(".container img");

// tengo que pulsar os botones de la columna y cambiar la imagen central. 

for (const element of nodo_boton_columna) {

    element.addEventListener("click",cambia_imagen);
    
}

function cambiar_imagen (e){

    let imagen = e.target.getAttribute("src");//Aquí uso el e.target para acceder a cada imagen 
    //del atributo.

    nodo_imagen_central.setAttribute("src", imagen);

    }



