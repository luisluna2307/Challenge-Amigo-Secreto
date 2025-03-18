let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let mostrarResultado = document.getElementById("resultado");
function agregarAmigo() {
    if (inputAmigo.value === "") {
        alert("Debes ingresar un nombre");
    }
    else {
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    }
    limpiarCaja();

}

function sortearAmigo() {
    let aleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[aleatorio];
    mostrarResultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;


}
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
    return;
}

