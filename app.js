// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = []; // Lista para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtener el input
    let nombre = input.value.trim(); // Obtener el valor y eliminar espacios extra
    
    if (nombre) { 
        listaAmigos.push(nombre);

        let lista = document.getElementById("listaAmigos"); 
        let nuevoElemento = document.createElement("li"); 
        nuevoElemento.textContent = nombre; 
        lista.appendChild(nuevoElemento); 

        input.value = ""; 
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; // Selección aleatoria

    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = ""; 

    let elementoResultado = document.createElement("li");
    elementoResultado.textContent = "El Amigo secreto sorteado es: " + amigoSorteado;
    resultado.appendChild(elementoResultado);
}
