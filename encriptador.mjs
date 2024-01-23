const vocales = ['a', 'e', 'i', 'o', 'u'];
const convertVocales = ['ai', 'enter', 'imes', 'ober', 'ufat'];

const encriptarTexto = (texto) => {
    const caracteres = texto.split('');

    const textoEncriptado = caracteres.map((caracter) => {
        const vocalIndex = vocales.indexOf(caracter.toLowerCase());
        if (vocalIndex !== -1) {
            const vocalConvertida = convertVocales[vocalIndex];
            return vocalConvertida;
        } else {
            return caracter;
        }
    });
    return textoEncriptado.join('');
};

/* const userTexto = 'Hola bienvenido!, este es un mensaje de prueba';
const convertText = encriptarTexto(userTexto);

console.log(convertText); */

export default encriptarTexto;
