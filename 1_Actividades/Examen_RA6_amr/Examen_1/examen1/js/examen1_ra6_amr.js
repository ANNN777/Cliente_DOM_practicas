//1.Definir los nodos
//No tengo que obtener el nodo del UL. Si lo programo a los UL, se le pone el tick a todos los verdes a la vez.
//los que generan los eventos, son todos los "li".

//A. let nodo_lista = document.querySelectorAll("li");//ya tengo el nodo de la lista. // NodeList de los <li>

let nodo_lista= document.getElementsByTagName("li");//devuelve HTMLCollection de los <li>. Es un array

//2. declarar el evento

for (const element of nodo_lista) { //for of. Es un array por lo tanto que recorrer el array y que cada li haga algo. 

    element.addEventListener("click", alternar_clase);
    
}

//3. delcaro y creo la función. Para saber que li, está llamando el evento. Tengo que usar el e.
function alternar_clase(e){//el e. "solo no es nadie". El e, es el evento. y el nodo que ha generado el evento es = e.target.

    let clase = e.target.className;//// Obtiene el valor actual del atributo class del <li> que generó el evento.
    
    //e.target.className = "done";

    console.log(clase);

    if (clase==="") {// Si el "li" no tiene clase (está vacío).
        e.target.className="done";//le pongo la clase llena. "done"Y el "done" llama al .css
        console.log(clase);

    } else {
        e.target.className="";//e.target es el li que ha generado el evento. Hacerle un className a vacío significa quitarle el atributo
        console.log(clase);
    }

    //e.target.classList.toggle("done"); // esto lo que hace es quitar la clase y ponerla, y sustituría todo el código arriba. 

}

//ANTONIO JOSÉ MÉRIDA RODRÍGUEZ. 2º DAW//
