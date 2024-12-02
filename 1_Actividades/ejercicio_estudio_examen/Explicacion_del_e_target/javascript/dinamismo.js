
let nodo_boton = document.querySelectorAll("button");

nodo_boton.forEach(boton => {//boton es el nombre que uso para llamar a la variable unitaria. 
    boton.addEventListener('click', cambiarColor);
  });

// Función para cambiar el color de fondo del botón al hacer clic
function cambiarColor(event) {
    event.target.style.backgroundColor = "green";
  }

  /*
En este ejemplo, cuando se hace clic en cualquiera de los botones, la función 
cambiarColor se ejecuta. event.target hace referencia al botón específico que 
se ha presionado, y su color de fondo se cambia a verde.
  */
  
 
 
  