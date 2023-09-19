function cript(){
    var texto = texto_input.value;
    var comprimento = texto.length;
    var conj = [];
    var binario = "";
    var textoHexadecimal = "";

    for (var i = 0; i < texto.length; i++) {
        var codigoAscii = texto.charCodeAt(i); // Obtem o valor ASCII do caractere
        var representacaoBinaria = codigoAscii.toString(2); // Converte para binário

        // Preenche com zeros à esquerda para ter 8 bits (um byte)
        while (representacaoBinaria.length < 8) {
            representacaoBinaria = "0" + representacaoBinaria;
        }

        binario += representacaoBinaria;
        for (var i = 0; i < binario.length; i += 4) {
            var grupoBinario = binario.substr(i, 4);
            var valorHexadecimal = parseInt(grupoBinario, 2).toString(16);
            textoHexadecimal += valorHexadecimal;
        }
           textoHexadecimal.toUpperCase(); // Converte para maiúsculas para convenção.
        }
        console.log(`Texto: ${texto}\nBinário: ${binario}\nHexadecimal: ${textoHexadecimal}`)
        res.innerHTML = `${textoHexadecimal}`
    }
    

