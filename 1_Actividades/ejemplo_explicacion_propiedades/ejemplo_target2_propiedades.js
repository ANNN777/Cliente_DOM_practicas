let parrafo = document.getElementById("parrafo");
let nodo_botones= document.getElementsByTagName("button");

for (const element of nodo_botones){
    element.addEventListener("click",cambia_color);
}



function cambia_color(e){/*nodo que gestiona o produce el evento*/
    console.log(e.target);
    parrafo.style.color=e.target.id;
    //con una sola línea puedo cambiar el color del nodo de cada botón, según va cambiando el id.
}