do//Calcular los nodos del html que me va a hacer falta. 

let nodo_input=document.getElementById("numItems");//Este es el padre.

let nodo_boton=document.getElementById("generarInputs");

let nodo_div=document.getElementById("inputsContainer");

//Crear los eventos
//¿Quién va a generar el evento? El botón.
nodo_boton.addEventListener("click", generarInputs);

function generarInputs(){

    let numero=nodo_input.value; //Ya tengo el nodo del número que el usuario ha puesto aquí

    //Creo un input lo pongo de tipo text y lo añado al nodo_div

    for (let i=0; i<numero; i++) {//Cuando queremos hacer una tarea un número de veces concreto 
        //usar el for de toda la vida. Para recorrer el array hacer y usar el for-of

        //queremos crear un un input. Estos van a ser los inputs que nosotros vamos a generar al daarle al botón
        let nodoInput= document.createElement("input");

        nodoInput.setAttribute("type","text");//como inputs hay de muchos tipos le tengo que decir el tipo que
        //Ahora queda añadir este nodo al .div que quiero mostrar

        //el padre append al hijo
        nodo_div.append(nodoInput);
 
    }

}

//1. Calcular nodo Añadir elemento
let nodo_anadir=document.getElementById("añadirItems");
//con el queryselectorALL(), con un for

nodo_anadir.addEventListener("click", anadirElement);

function anadirElement(){

    let nodo_ul=document.getElementById("lista");//Obtener el elemento lista

    let nodo_input=document.querySelectorAll(".inputs-container input");

   for (const element of nodo_input) {
    let nodo_li=document.createElement("li"); //vamos a crear una nnueva lista dinámica dentro del ul que ya está creado.    
    nodo_li.textContent = element.value;//Cada nodo li va a adquirir el interior de lo que vaya
    //conteniendo cada uno de los elementos del li
    nodo_ul.append(nodo_li);//cada nodo li va a ir añadiéndose a nodo ul, que ya ha sido definido arriba.
   }
    

    //voy a generar tantos li como nodos tengo
}

//Añade dos botones más con texto “Borrar primer li” y “Borrar último li” 
//de modo que cuando pulses el primer botón borre el primer elemento de la lista 
//y cuando pulses el último borre el último elemento de la lista.

let boton_borrar_pri = document.getElementById("borrarPrimero");
let boton_borrar_ul = document.getElementById("borrarUltimo");

//li:lastofType
//li:firstofType

boton_borrar_pri.addEventListener("click", borrarPrimero);
boton_borrar_ul.addEventListener("click", borrarUltimo);

function borrarPrimero(){

    let nodo_li=document.querySelector("li:first-of-type");//Obtener el elemento lista que corresponde al primero
    //Ya tengo el primer li de mi lista.
    nodo_li.remove();

}

function borrarUltimo(){

let nodo_li=document.querySelector("li:last-of-type");//Obtener el elemento lista que corresponde al último elemento
    //Para borrar el último elemento de la lista
    //li:last-of_type es tal y como se declararía en el .css y accedemos al último elemento de la lista.
    nodo_li.remove();

}

/*
Si tuviera que eliminar el último elemento de una lista completa entiendiendo que hay más de uno.
Llamaríamos a esa lista concreta con una almohadilla.

let nodo_li=document.querySelector("#lista li:last-of-type");//Obtener el elemento lista que corresponde al último elemento
    //Para borrar el último elemento de la lista
    nodo_li.remove();

}
//voy a mantener esto de cara al futuro
*/

//cuanto te traes el valor de un atributo es siempre un String,
//y por lo tanto hay que parsearlo antes de operar con él. 

//ANTONIO JOSÉ MÉRIDA RODRÍGUEZ. 2º DAW//