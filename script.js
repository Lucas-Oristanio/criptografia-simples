function cript(){
    var texto = texto_input.value;
    var comprimento = texto.length;
    var conj = [];
    var conjInverso = [];
    var binInverso = "";
    var binario = "";
    var textoHexadecimal = "";

    for (var i = 0; i < texto.length; i++) {
        var codigoAscii = texto.charCodeAt(i); // Obtem o valor ASCII do caractere
        var representacaoBinaria = codigoAscii.toString(2); // Converte para binário

        // Preenche com zeros à esquerda para ter 8 bits (um byte)
        while (representacaoBinaria.length < 8) {
            representacaoBinaria = "0" + representacaoBinaria;
        }

        conj.push(representacaoBinaria); // Atribui o valor binário para a array "conj"
        binario += representacaoBinaria; // Texto com todos os valores binários juntos

        for(var j = 0; j < representacaoBinaria.length; j++){ 
            var binL = representacaoBinaria.charAt(j); // Obtem o valor de cada número do conjunto binário
            // Inverte os valores
            if(binL == "0"){
                binInverso += "1";  
            }else{
                binInverso += "0";
            }
        }
        conjInverso.push(binInverso); // Atribui o valor invertido a uma nova array "conjInverso"
    }
    res.innerHTML =`Binário: ${conj}<br>Binário inverso: ${conjInverso}` 
    
    //console.log(conj);

    /*    for (var i = 0; i < binario.length; i += 8) {
            var grupoBinario = binario.substr(i, 8);
            var valorHexadecimal = parseInt(grupoBinario, 2).toString(16);
            textoHexadecimal += valorHexadecimal;
        }
        
        //console.log(`Texto: ${texto}\nBinário: ${binario}\nHexadecimal: ${textoHexadecimal}`)
        res.innerHTML = `${conj}`
        alert(textoHexadecimal)*/
    
}    
