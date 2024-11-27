//cuadno creo un nodo en javascript como por ejemplo
//let especial(es un nodo), me permitirá enlazar con 
//la etiqueta que pertenece o de la que proviene en el html
//y modificar sus características

//todo sirve para manejar desde el javasript  todos los elementos
//del html.
//desde javascript accedemos a los nodos, del arbol de nodo,
//del html

//hay dos tipos de nodo. los elements y el resto.(texto, )

let special = document.getElementById("special");
console.log(special);//El nodo es todo lo que conlleva el li id = special

special.style.color = "red";//entre comillas doble el valor del atributo
//le doy un estilo al valor del atributo.

let element = document.getElementById("another");

if(!element) {
    //alert("No hay ningún elemento con el ID another");
}

//Obtenemos varias elementos
let list_elements = document.getElementsByTagName("li");
console.log(list_elements);

//Apunta al css. 


//sI LO QUE QUIERO ES QUITAR LAS CLASES QUE TUVIERA EL NODO Y SOBRESCRIBIR, EL CLASSNAME SOBREESCRIBE

list_elements[1].className="azul";

//SI LO QUE QUIERO ES AÑADIR LA CLASE
list_elements[0].classList.add("azul");

//Una determinada etiqueta puede tener todas las clases que nosotros queramos 


//mi list_elements es un array que contendrá cada uno de los
//elementos del array. 

/*
for (let index = 0; index < list_elements.length; index++) {
    list_elements[i].style.fontSize="2rem";
    
}
*/
//For - of
for (const item of list_elements){
    item.style.fontSize="2.5rem"
}

//Me devolverá como un HTMLCollection(4)[li, li, li#especial: li#especial]

//
let special2 = document.getElementsByClassName("azul");


for (const item of special2){
    special2.style.color = "blue";
}



