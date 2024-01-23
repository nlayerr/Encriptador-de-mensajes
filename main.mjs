import encriptarTexto from './encriptador.mjs';
import desencriptarTexto from './desencriptador.mjs';


let textUser = "";

const inicializar = () => {
    document.getElementById('encriptarBtn').addEventListener('click', () => {
        textUser = document.getElementById('texto').value;
        const mensajeEncriptado = encriptarTexto(textUser);
        document.getElementById('resultado').innerText = `Texto encriptado: ${mensajeEncriptado}`;
    });

    document.getElementById('desencriptarBtn').addEventListener('click', () => {
        // Obtiene el texto del textarea y lo guarda en la variable
        textUser = document.getElementById('texto').value;
        // Desencripta el texto y muestra el resultado
        const mensajeDesencriptado = desencriptarTexto(textUser);
        document.getElementById('resultado').innerText = `Texto desencriptado: ${mensajeDesencriptado}`;
    });
}

document.addEventListener('DOMContentLoaded', inicializar);
/*const userText = 'Hola mundo!! este es un ejemplo de mensaje'
const encriptador = encriptarTexto(userText);
console.log(`Tu mensaje encriptado es: ${encriptador}`);

const mensajeEncriptado = encriptador;
const desencriptar = desencriptarTexto(mensajeEncriptado);
console.log(`Tu mensaje desencriptado es: ${desencriptar}`);*/
