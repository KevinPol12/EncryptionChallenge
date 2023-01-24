
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

let copied = document.querySelector("#msg");

var encdec = document.querySelector("#enc-dec");

let encriptado = "";
let decrypted = "";


document.querySelector("#btn-crypt").addEventListener("click", function(){

    let textE = texto.value.toLowerCase();
    encriptado ="";
    msg.value = "";

    for (i = 0; i < textE.length; i++){

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

        encdec.textContent = "Encrypted Message";

        msg.value = encriptado;

        texto.value="";
        texto.focus();


});

document.querySelector("#btn-copy").addEventListener("click", function(){

    navigator.clipboard.writeText(copied.value);
    texto.focus();
    texto.value = copied.value;
    copied.value="";
    encdec.textContent = "Holding tight...";

});

document.querySelector("#btn-decrypt").addEventListener("click", function(){
    let textD = texto.value;
    decrypted = "";
    // let textD = "aentera";


    for (i =0; i < textD.length; i++){


        if (textD.substring(i,(i+2)) == "ai"){

            decrypted += "a";
            i++;
        }

        else if (textD.substring(i,(i+5)) == "enter"){

            decrypted += "e";
            i=i+4;
        }
        else if (textD.substring(i,(i+4)) == "imes"){

            decrypted += "i";
            i=i+3;
        }
        else if (textD.substring(i,(i+4)) == "ober"){

            decrypted += "o";
            i=i+3;
        }
        else if (textD.substring(i,(i+4)) == "ufat"){

            decrypted += "u";
            i=i+3;
        } 
        else {
            
            decrypted += textD[i];

        }

        console.log("descrypted: " + decrypted);


    } // end for

    
    encdec.textContent = "Decrypted Message";

    msg.value = decrypted;
    texto.value="";
    texto.focus();


});




