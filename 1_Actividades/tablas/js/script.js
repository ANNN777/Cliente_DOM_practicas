
//Manejador para captura el click en el botón
document.getElementById("build").addEventListener("click",genera);

function genera(e){
    let filas = document.querySelectorAll("input")[0].value;
    let columnas = document.querySelectorAll("input")[1].value;
    

    //Borra la tabla previa si es que existia
    if (document.querySelector("table")) {
        document.querySelector("table").remove();
    }

    //Crear elemento tabla
    let tabla = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        // crea el elemento fila
        let row = document.createElement("tr");
        
        for (let j = 0; j < columnas; j++) {
           // crea el elemento celda
            let cell =  document.createElement("td");
            //añade texto a la celda
            cell.textContent="hola";
            // mete la celda en la fila
            row.append(cell);            
        }
        // mete la fila en la tabla.
        tabla.append(row);
    }

    console.log(tabla);
    // mete la tabla en el div container
    document.querySelector(".container").append(tabla);

};