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
  
  //const textoOriginal = "Hoberlai bimesenternventernimesdober!, enterstenter enters ufatn menternsaijenter denter prufatenterbai";
  //const textoConvertido = desencriptarTexto(textoOriginal);
  
 //console.log(textoConvertido);

 export default desencriptarTexto;