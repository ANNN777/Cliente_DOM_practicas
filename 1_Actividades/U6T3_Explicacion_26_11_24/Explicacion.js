let nodo_parrafo1=document.createElement("p");
//El document.createElement crea ese nodo
//aún no está colocado en el DOM. En el ártbol de mi html


let nodo_div1=document.getElementById("div1");
//¿Cómo le digo que ese nodo que acabo de crear va  a
//va a ir dentro del div.
//Cómo añadir ese nodo al elemento padre.

nodo_div1.append(nodo_parrafo1);//El método append va 
//a colocar el nodo en el párrafo

nodo_parrafo1.textContent="Hola";
//
//Crear una lista ul_li
/*let nodo_ul=document.createElement("ul");

nodo_ul.append(nodo_li);

let nodo_li = document.createElement("li");
nodo_li.textContent = "Hola";
nodo_ul.append(nodo_li1); // 


let nodo_li2=document.createElement("li");
nodo_li2.textContent="Adios";
nodo_ul.append(nodo_li2);

//Cuando ya tengo todos los li lo añade a su padre. 
nodo_div1.append(nodo_ul);//nodo padre

*/
//
let nodo_ul=document.createElement("ul");
for (let index=0; index < 10; index++){//10 interacciones
   
    let nodo_li=document.createElement("li");//creo el hijo de manera repettitiva
   
    nodo_li.textContent="Hola";
    nodo_li.className="rojo";

    nodo_ul.append(nodo_li);
    
}

nodo_div1.append(nodo_ul);

//2. a cada uno de los li le vais a asignar la clase rojo





//



//va a ser un nodo de tipo párrafo. 
