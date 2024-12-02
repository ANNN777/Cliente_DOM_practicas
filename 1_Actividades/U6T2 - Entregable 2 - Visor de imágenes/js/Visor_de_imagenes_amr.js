//definir los nodos. 
let nodo_botones=document.querySelectorAll(".container4 div");//Estoy accedientdo al interior de los divs, como si fuera una propiedad de .css
//container4 div. Son cada uno de los botones de mi .html

let nodo_recuadro=document.getElementById("contenedor2");/*Recuadro central*/
//siempre necesio obetener el nodo de la elemento que quiero tocar. No puedo
//puedo pretender tocar en javascript algo sin querer tocar el nodo.

let nodo_imagen= document.getElementById("imagenCentral");

let container1_img= document.querySelectorAll(".container1 img");


let lupa= document.getElementById("contenedor2");
//parsear los aumentos en la lupa. Zoom in. Hacer un parseInt. Me quedo directamente con el valor. 



//LLAMADAS A EVENTOS. Ya llamo directamente a las variables. 
//BOTONES DE COLORES. 
for (const element of nodo_botones){//Recorro el array de botones. 
    element.addEventListener("mouseover",cambiar_color);//El evento es cambiar el color
}

//función para cambiar el color del borde. 
function cambiar_color(e){/*nodo que gestiona o produce el evento*/
   
    let color=getComputedStyle(e.target).backgroundColor;//El e.target es nuestra vida. 
    //Con el e.target vas a conocer la ruta de la imagen que me ha generado el evento. 
    //getComputedStyle lo que hago es una propiedad para acceder al .CSS y al backgroundColor. 
    //El e. le pasa el nodo de quien ha generado el evento. 
    //Ello ha evitado que yo haga una función para cada color de cada uno de los .div. 

    //En términos más simples, e.target apunta 
    //al elemento específico sobre el que se ha producido la acción.

    //getConputedStyle accede al .css y lee su background

    //Con todos los .divs queremos aplicaar el mismo evento.
    //en el e.target tú tienes el evento, es decir, el .div que ha generado el evento.  

    //Necesito a acceder a una propiedad que tengo en el .css, ppor ello uso
    //getComputedStyle. 

    //
    console.log(color);

    nodo_recuadro.style.borderColor=color;
    //nodo_botones.style.borderColor;// Cambia el color del borde a azul
    //con una sola línea puedo cambiar el color del nodo de cada botón, según va cambiando el id.
    //el color se le pasa como propiedad al borde principal del contenedor. 
}
//




//LUPA
//Función para cambiar tamaño  de la imagen dándole al botón de la lupa.
//Obtener los dos nodos de las lupas nodoIn y NodoOut
let nodoIn = document.getElementById("nodoIn");
let nodoOut = document.getElementById("nodoOut");

nodoIn.addEventListener("click",zoomIn);//cuando hagamos click en el nodo, llamaremos
//al método ZoomIn. Declarado a continuación. 
nodoOut.addEventListener("click",zoomOut);//cuando hagamos click en el nodo, llamaremos
//al método ZoomOut. Declarado a continuación. 


function zoomIn(){//obtener lo dos n

    let ancho=parseInt(nodo_imagen.getAttribute("width"));//Obtenemos el atributo width del nodo imagen. 
    console.log(ancho);//Para ver si está leyendo el ancho dentro de la función.
    
    let maximo = 280;

    if(ancho<maximo){//El ancho no puede ser superior al maximo

        ancho = ancho + 30;//ir cambiando el ancho de 30 en 30. 
        nodo_imagen.setAttribute("width", ancho);//de esa forma iríamos actulizando el ancho del nodo con el 
        //nuevo valor correspondiente. 
    }
    //aumentos de 30 en 30 píxeles
}


function zoomOut(){

    let ancho=parseInt(nodo_imagen.getAttribute("width"));//Obtenemos el atributo width del nodo imagen. 
    console.log(ancho);//Para ver si está leyendo el ancho dentro de la función.
    
    let minimo = 40;//El minimo va a ser 10px

    if(ancho>minimo){//El ancho tiene que ser superior al minimo

        ancho = ancho - 30;//ir cambiando el ancho de menos 30 en menos 30. 
        nodo_imagen.setAttribute("width", ancho);//de esa forma iríamos actulizando el ancho del nodo con el 
        //nuevo valor correspondiente. 
    }
    //diseminución de 30 en 30 píxeless

}



//3. CAMBIAR IMAGEN CENTRAL. REFERENCIA
//LA IMAGEN CENTRAL YA ESTÁ LLAMADA CON EL NODO: nodo_imagen

for (const element of container1_img) {

    element.addEventListener("click",cambia_imagen);
    
}


function cambia_imagen(e){//lo enrutas. Hay que generar el nodo del que genera el evento tal y como del que lo recibe. 
    let ruta = e.target.getAttribute("src"); //coge al atributo src del contenedor 2 que accede a las imágen central

    //e.target apunta al botón que se ha presionado.
    nodo_imagen.setAttribute("src",ruta);
} 



//el ancho está puesto como atributo. Javascript no puede
//escribir en él, puede leer pero no puedo escribir en él. 

//¿Cómo compruebo yo que un nodo no tiene la clase asignada.
//la clase en blanco tiene la doble comilla "", sin espacio en medio. 
//Si quiero asignar que una etiqueta no tiene ninguna clase asignada. 

//tened cuidado con las limitaciones en el .css de las imágenes.
//Ya qué si hay una limitación el .css estás no se aumentarán lo suficiente. 

//Los estilos aplicados en el .css prevalecen sobre el diseño en el .js

//1. Todo se reduce a sacar el nodo del html NODO 
//2. Luego calcular calcular los eventos con el addEventListener con el for
// ADDEVENTLISTENER

//3. Ya luego creamos la función para hacer lo que quiero cambiar 
//una propiedad, una clase, yo quiero que algo se ponga en rojo
//va a y se pone en rojo, un atributo.

//repasar los selectores del .css. Ya que con el querySelector y con el 
//querySelectorAll. POner el selector con el . y la almohadilla #

//ANTONIO JOSÉ MÉRIDA RODRÍGUEZ. 2º DAW//
