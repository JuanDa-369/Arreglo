let arregloIzquierdo = [];
let arregloDerecho = [];

function agregarEdad() {
    let inputEdad = document.getElementById("edad"); 
    let valor = parseInt(inputEdad.value);
    if (!isNaN(valor)) {
        arregloIzquierdo.push(valor);
        inputEdad.value = "";
        pintarArregloIzquierda();
    } else {
        alert("Por favor, ingresa una edad válida.");
    }
}


function pintarArregloIzquierda() {
    let tbody = document.getElementById("tablaIzquierda");
    tbody.innerHTML = "";
    arregloIzquierdo.forEach((edad, indice) => {
        let fila = document.createElement("tr");
        let contenidoFila = `
            <tr>
                <td>${edad}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarIzquierdo(${indice})">Eliminar</button>
                </td>
                <td>
                    <button class="btn-mover" onclick="moverHaciaDerecha(${indice})">→</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += contenidoFila;
    });
}

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function pintarArregloDerecha() {
    let tbody = document.getElementById("tablaDerecha"); 
    tbody.innerHTML = "";
    arregloDerecho.forEach((edad, indice) => {
        let contenidoFila = `
            <tr>
                <td>
                    <button class="btn-mover" onclick="moverHaciaIzquierda(${indice})">←</button>
                </td>
                <td>${edad}</td>
                <td>
                    <button class="btn-eliminar" onclick="eliminarDerecho(${indice})">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += contenidoFila;
    });
}

function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}
function moverHaciaDerecha(indice) {
    let valorMovido = arregloIzquierdo[indice];
    arregloDerecho.push(valorMovido);
    arregloIzquierdo.splice(indice, 1);
    
    pintarArregloIzquierda();
    pintarArregloDerecha();
}
function moverHaciaIzquierda(indice) {
    let valorMovido = arregloDerecho[indice];
    arregloIzquierdo.push(valorMovido);
    arregloDerecho.splice(indice, 1);
    
    pintarArregloIzquierda();
    pintarArregloDerecha();
}