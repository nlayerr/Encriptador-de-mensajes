import encriptador from './encriptador.mjs';
import desencriptador from './desencriptador.mjs';
import matrix from './matrix.mjs';
import { consoleText } from './span.mjs';
let textUser = "";
let useAdvancedEncryption = false;
let matrixAnimationInterval = false;

function copiarTexto() {
    var copia = document.getElementById('resultado').value;
    console.log(copia)
    navigator.clipboard.writeText(copia);
    
  }

const inicializar = () => {
    
    document.getElementById('copiarBtn').addEventListener('click', copiarTexto);

    document.getElementById('encriptarBtn').addEventListener('click', () => {
       

        textUser = document.getElementById('texto').value;
        const textoEncriptado = encriptador.encriptarTexto(textUser);
        const textoEncriptadoAvanzado = encriptador.encriptarTextoAvanzado(textUser);
        const mensajeEncriptado = useAdvancedEncryption
            ? textoEncriptadoAvanzado
            : textoEncriptado;
        escribirResultadoConAnimacion(mensajeEncriptado);
    });

    document.getElementById('desencriptarBtn').addEventListener('click', () => {
        textUser = document.getElementById('texto').value;
        const textoDesencriptado = desencriptador.desencriptarTexto(textUser);
        const textoDesencriptadoAvanzado = desencriptador.desencriptarTextoAvanzado(textUser);
        const mensajeDesencriptado = useAdvancedEncryption
            ? textoDesencriptadoAvanzado
            : textoDesencriptado;
        escribirResultadoConAnimacion(mensajeDesencriptado);
    });
    const palabras = ['modoHardcore!!', 'vamosAbreme!!', 'noTeArrepentiras'];
    consoleText(palabras, 'text', ['tomato', 'rebeccapurple', 'lightblue']);
    document.getElementById('encryptionSwitch').addEventListener('change', () => {
        useAdvancedEncryption = document.getElementById('encryptionSwitch').checked;
        
        const canvas = document.getElementById('canv');
        canvas.style.display = useAdvancedEncryption ? 'block' : 'none';
        
        const esqueletoContainer = document.querySelector('.esqueleto-container');
        
        if (useAdvancedEncryption) {
            const canvasData = matrix.initializeCanvas();
            matrixAnimationInterval = matrix.startMatrixAnimation(canvasData);
            esqueletoContainer.classList.remove('esqueleto-oculto');
            const palabras = ['queEsperasEncriptaAlgoGrande', 'Regresa al Modo Normal', 'Error 0x04875FS'];
   consoleText(palabras, 'text', ['tomato', 'rebeccapurple', 'lightblue']);
        } else {
            esqueletoContainer.classList.add('esqueleto-oculto');
            matrix.stopMatrixAnimation(matrixAnimationInterval);
            const palabras = ['recargaLaPaginaAcabaConMiSufrimiento', 'meteme en Arroz', 'hay me duele!!'];
   consoleText(palabras, 'text', ['tomato', 'rebeccapurple', 'lightblue']);
        }
        
        
});
document.querySelector('.switch-slider').addEventListener('click', () => {
    const checkbox = document.getElementById('encryptionSwitch');
    checkbox.checked = !checkbox.checked;

    const event = new Event('change');
    checkbox.dispatchEvent(event);
});


}

document.addEventListener('DOMContentLoaded', inicializar);


function escribirResultadoConAnimacion(texto) {
    var resultadoElemento = document.getElementById("resultado");
    var esqueleto = document.getElementById("esqueleto");
    var velocidadEscritura = 10;

    resultadoElemento.innerHTML = "";


    function escribirCaracter(i) {
        setTimeout(function () {
            resultadoElemento.innerHTML += texto.charAt(i);

            if (i < texto.length - 1) {

                escribirCaracter(i + 1);
                esqueleto.src = (i % 9 === 0) ? "skull-open.png" : "skull-closed.png";

            } else {
                const contieneMayusculas = /[A-Z]/.test(texto);
                const contieneNumeros = /\d/.test(texto);
                const contieneCaracteresEspeciales = /[!@$%^&*(),.?":{}|<>]/.test(texto);
                if (contieneMayusculas || contieneNumeros || contieneCaracteresEspeciales) {
                    const mensajeError = " //El texto no debe contener mayusculas, ni numeros o caracteres especiales :(, (//no hagas caso a esta alerta sigue encryptando xD)"
                    setTimeout(function () {
                        resultadoElemento.innerHTML += mensajeError;
                    }, i);
                }
            }
        }, velocidadEscritura);
    }

    if (texto !== "") {
        escribirCaracter(0);
    }
}



document.addEventListener('DOMContentLoaded', inicializar);
