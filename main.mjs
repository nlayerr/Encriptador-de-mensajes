import encriptarTexto from './encriptador.mjs';
import desencriptarTexto from './desencriptador.mjs';

const userText = 'Hola mundo!! este es un ejemplo de mensaje'
const encriptador = encriptarTexto(userText);
console.log(`Tu mensaje encriptado es: ${encriptador}`);

const mensajeEncriptado = encriptador;
const desencriptar = desencriptarTexto(mensajeEncriptado);
console.log(`Tu mensaje desencriptado es: ${desencriptar}`);
