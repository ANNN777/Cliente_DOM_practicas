//1. definir nodos y obtener hijos de la clase small
//let nodo_imagen = document.getElementById("pulgarPositivo");
let nodo_numeroA = document.getElementById("h1");
let nodo_numero1 = document.querySelector("h2");

let nodo_imagenes = document.querySelectorAll(".info img");//De esta manera obtengo los nodos de los das imágenes a la vez. Esto es un array
let nodo_imagen1 = nodo_imagenes[0];//esto sería la imagen uno
let nodo_imagen2 = nodo_imagenes[1];

//¿Me he quedado bien con los nodos?
console.log(nodo_imagen1);
console.log(nodo_imagen2);


//Otra manera más elegante es usar esta manera.
//let nodo_imagen1 = document.querySelector(".info img:first-of-type");
//let nodo_imagen2 = document.querySelector(".info img:last-of-type");


//2. Declaro los eventos
    nodo_imagen1.addEventListener("click", cambiar_color1);

function cambiar_color1() {

    let ruta = nodo_imagen1.getAttribute("src");//para saber la ruta del nodo_imagen1.
    let contadorPulgar=parseInt(nodo_numeroA.textContent);//Parseamos el contador a número entero.

    if (ruta === "img/gusta2.png"){
        nodo_imagen1.setAttribute("src","img/gusta.png");
       contadorPulgar++;
       nodo_numeroA.textContent=contadorPulgar;

    } else {
        nodo_imagen1.setAttribute("src","img/gusta2.png");
        contadorPulgar--;
        nodo_numeroA.textContent=contadorPulgar;
    }
}

//2. PulgarNegativo
//let nodo_imagen2 = document.getElementById("pulgarNegativo");
let nodo_numeroB = document.getElementById("h2");

//2. Declaro los eventos
nodo_imagen2.addEventListener("click", cambiar_color2);

function cambiar_color2() {

    let imgPulgar2 = nodo_imagen2.getAttribute("src");
    let contadorPulgar2=parseInt(nodo_numeroB.textContent);//Parseamos el contador a número entero. 
    
    console.log(imgPulgar2);
    if (imgPulgar2 === "img/disgusto2.png"){
        nodo_imagen2.setAttribute("src","img/disgusto.png");
        contadorPulgar2++;
        nodo_numeroB.textContent=contadorPulgar2;
    } else {
        nodo_imagen2.setAttribute("src","img/disgusto2.png");
        contadorPulgar2--;
        nodo_numeroB.textContent=contadorPulgar2;
    }
}

//5. generar Items
let nodo_boton = document.querySelector(".boton button");
console.log(nodo_boton);
let nodo_div = document.querySelector(".inputs");//Para llamar a una clase siempre debo llamarla con ".inputs", con el punto dentro
//de los paréntesis.
//siempre que usemos getElementBuClassName estoy obteniendo un array, y por lo tanto para acceder al primer elemento,
//tendré que usar el array: "nodo_div[0]"

nodo_boton.addEventListener("click", generarInputs);

function generarInputs(){

    let input1= document.createElement("input");
    console.log(input1);
    
    input1.setAttribute("type","text");
    input1.setAttribute("placeholder","Introduce tu nombre");
    nodo_div.append(input1);

    //
    let input2= document.createElement("input");
    console.log(input2);
    
    input2.setAttribute("type","text");
    input2.setAttribute("placeholder","Introduce tu email");
    nodo_div.append(input2);

    //
    //Crear el bototón del texto
    let boton = document.createElement("button");
    boton.textContent="Enviar datos";
    nodo_div.append(boton);

nodo_boton.setAttribute("disabled","true");
}