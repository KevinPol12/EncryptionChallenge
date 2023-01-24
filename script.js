
/* Regras Codificador: 
"a" é convertido para "ai"
"e" é convertido para "enter" 
"i" é convertido para "imes"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"ai" é convertido para "a"
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


var texto = document.querySelector("#input-texto");

var msg = document.querySelector("#msg");

let encriptado = "";


document.querySelector("#btn-crypt").addEventListener("click", function(){

    let textE = texto.value.toLowerCase();
    encriptado ="";
    msg.value = "";

    for (i = 0; i < textE.length; i++){
        console.log("length is " +textE.length);

        switch(textE[i]){
            case "a": 
                encriptado += "ai";
                break;

            case "e": 
                encriptado += "enter";
                break;

            case "i": 
                encriptado += "imes";
                break;

            case "o": 
                encriptado += "ober";
                break;

            case "u": 
                encriptado += "ufat";
                break;
            default:
                encriptado += textE[i];
                                
            } //end switch


        } //end for

                
        console.log(encriptado);

        msg.value = encriptado;

        texto.value="";
        texto.focus();

});



