//querySelectorAll, de esa forma me quedo con los ths y con los tds
let celdas = document.querySelectorAll("th, td");
for (const element of celdas) {
    element.addEventListener("mouseover", fila_color);
    element.addEventListener("mouseout", desfila_color);
}

function fila_color(e){//Estoy es para colorear la fila

    let padre = e.target.parentElement;
    padre.style.backgroundColor = "red";
}

function desfila_color(e){//Esto es para decolorear la fila. 

    let padre = e.target.parentElement;
    padre.style.backgroundColor = "";
}



