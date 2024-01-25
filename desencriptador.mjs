const desencriptarTexto = (textoEncriptado) => {
    const reglasDeReemplazo = {
      'ai': 'a',
      'enter': 'e',
      'imes': 'i',
      'ober': 'o',
      'ufat': 'u'
    };

    Object.keys(reglasDeReemplazo).forEach(subcadena => {
      const regex = new RegExp(subcadena, 'g');
      textoEncriptado = textoEncriptado.replace(regex, reglasDeReemplazo[subcadena]);
    });
  
    return textoEncriptado;
  }

  const formatText = (encryptedText) => {
    // Realiza aquí cualquier transformación adicional al texto desencriptado
    // para hacerlo más legible.

    // En este ejemplo, simplemente eliminamos los caracteres de control no imprimibles.
    const formattedText = encryptedText.replace(/[\x00-\x1F\x7F-\x9F]/g, '');

    return formattedText;
};

const desencriptarTextoAvanzado = (texto) => {
    // Desencripta el texto utilizando tu lógica avanzada
    const textoDesencriptado = texto.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');

    // Formatea el texto desencriptado utilizando la función formatText
    const textoFormateado = formatText(textoDesencriptado);

    return textoFormateado;
};

  /*const textUser = 'Krod#pxqgr/#suredqgr#hvwh#frgljr#lqfuhleoh';
  const dese = desencriptarTextoAvanzado(textUser);
  console.log(dese);*/
  //const textoOriginal = "Hoberlai bimesenternventernimesdober!, enterstenter enters ufatn menternsaijenter denter prufatenterbai";
  //const textoConvertido = desencriptarTexto(textoOriginal);
  
 //console.log(textoConvertido);

 export default {desencriptarTexto, desencriptarTextoAvanzado};