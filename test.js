//



function encryptText(text) {
    // Aquí se implementa la lógica de encriptación.
    // Por ejemplo, un cifrado simple de desplazamiento de caracteres.
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
}

function decryptText(text) {
    // Aquí se implementa la lógica de desencriptación.
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
}

const userText = 'Krod#pxqgr/#suredqgr#hvwh#frgljr#lqfuhleoh'
const encriptarMjs = decryptText(userText);



console.log(encriptarMjs);