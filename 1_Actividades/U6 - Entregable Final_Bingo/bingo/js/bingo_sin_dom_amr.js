// Variables para almacenar números generados y lista completa
const numerosGenerados = new Set();
const maxNumero = 99;
const cartonNumeros = [];
const filasMarcadas = [0, 0, 0];
let lineasHechas = 0;
const tablero= document.getElementById("tablero");//Nodo_tablero
const boton_generar= document.getElementById("generarNumero");//Nodo_boton
let cartonPlano = [];
let nodo_bola = document.getElementById("bolaContainer");
let nodos_carton= document.querySelectorAll("#cartonBingo div");//tengo que llamar a cartonBingo

let array_bolas_tablero = document.querySelectorAll(".tablero div");
//Yo ya tengo todos los cartones en formato plano. 
//y luego llevarlo al div correspondiente del .html

// Elementos del DOM
//let nodo_carton=document.

// Crear las bolas del tablero de Bingo (números del 1 al 99)
function crearTablero() {
    let nodos_bolas=document.querySelectorAll(".tablero div");//me quedo con todos los tableros que están dentro de los div.

    for (let i = 0; i < maxNumero; i++) {
        nodos_bolas[i].classList.add("bola");
        nodos_bolas[i].textContent=i+1;

        cartonPlano.textContent
    }
}

// Generar número aleatorio para Bingo
function generarNumeroAleatorio() {
    if (numerosGenerados.size >= maxNumero) {
        alert("¡Se han generado todos los números!");
        return;
    }

    let numero;
    do {
        numero = Math.floor(Math.random() * maxNumero) + 1;
    } while (numerosGenerados.has(numero));

    numerosGenerados.add(numero);
    mostrarNumero(numero);
    marcarNumeroEnTablero(numero);
    marcarNumeroEnCarton(numero);
}

boton_generar.addEventListener("click", generarNumeroAleatorio);//El evetno para generar números aleatorios. 
//Cuando se le da al botón se le da a la función generarNumero. 



// Mostrar el número generado en la zona de "bola generada"
function mostrarNumero(numero) {

    nodo_bola.textContent= numero ;//añadir número una VEZ  que se va pulsando el último número cantado.

}


// Marcar el número generado en el tablero
function marcarNumeroEnTablero(numero) {

        array_bolas_tablero[numero-1].classList.add("seleccionada");

}

// Crear cartón aleatorio de Bingo
function crearCarton() {
    
    const numerosDisponibles = Array.from({length: maxNumero}, (_, i) => i + 1);
    for (let fila = 0; fila < 3; fila++) {
        const filaNumeros = [];
        for (let col = 0; col < 5; col++) {//Array Bidimens
            const indexAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
            const numero = numerosDisponibles.splice(indexAleatorio, 1)[0];
            filaNumeros.push(numero);         
        }
        cartonNumeros.push(filaNumeros);
        
       cartonPlano = cartonNumeros.flat();
     
}
}

function rellenarCarton(){

    for (let i = 0; i < cartonPlano.length; i++) {

        nodos_carton[i].textContent=cartonPlano[i];//El text content lo que hace es añadir valor
        //a lo que hay dentro del div.

    }
}

function marcarNumeroEnCarton(numero) {
    
            // Comprobar línea o Bingo
            if (filasMarcadas[fila] === 5 && lineasHechas < 3) {
                mensajeEstado.textContent = "¡Has hecho línea!";
                lineasHechas++;
            }
            if (lineasHechas === 3) {
                mensajeEstado.textContent = "¡Bingo!";
            }
        }
   


// Asignar evento al botón de generar número

// Crear el tablero y cartón al cargar la página
crearTablero();
crearCarton();
rellenarCarton();

//ANTONIO JOSÉ MÉRIDA. 2º DAW//
