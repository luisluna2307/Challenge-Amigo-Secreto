// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables
//arreglos
//funciones
//eventos
//objetos

let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
function agregarAmigo() {
    if (inputAmigo, value === "") {
        alert("Debes ingresar un nombre");
    }
    else {
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    }

}

function sortearAmigo() {

}

