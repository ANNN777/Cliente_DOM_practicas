//1. identificar elementos a cambiar en el .html
    //cambiar una imagen por otra.
    //cambiar el texto de un botón

//2. declaro los nodos.
//3. declaro los eventos.
//4. declaro las funciones

    let nodo_imagen = document.getElementById("bombilla");
    let nodo_boton = document.querySelector("button");//El query Selector selecciona elementos del .html
    //a partir de aquí ya interactúo con los nodos.

    nodo_boton.addEventListener ("click",cambia_imagen);//declarar aquí, qué hace el evento y a qué función.
    //el nombre de la función tiene que ser la función del .html
    function cambia_imagen(){

        let nombre = nodo_imagen.getAttribute("src");//acceder al atributo de qué es lo que quiero que cambie. 
        //aquí me estoy quedando con la imagen. 
        if (nombre === "img/encendida.png"){
            nodo_imagen.setAttribute("src", "img/apagada.png");
            nodo_boton.textContent="ENCENDER";
        } else {
            nodo_imagen.setAttribute("src", "img/encendida.png");
            nodo_boton.textContent="APAGAR";
        }

    }

    //variante para qué se aplique a todos los botones:

    /*let nodo_boton = document.querySelectorAll("button");//El query Selector selecciona elementos del .html
    //a partir de aquí ya interactúo con los nodos.

    
    nodo_boton.forEach((boton) =>{
        boton.addEventListener ("click",cambia_imagen);
});*/

/*<div id="main">
<div>
  <img id="bombilla" src="img/encendida.png" alt="logo Alixar" /> </div>
</div>
<button type="button" onclick="cambia_imagen()">APAGAR</button>*/

