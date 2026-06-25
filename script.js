//Capturar os elementos do HTML utilizando os IDs
const textField = document.getElementById("textarea");
const keyField = document.getElementById("numberKey");
const encryptButton = document.getElementById("button_encrypt");
const decryptButton = document.getElementById("button_decrypt");
const resultField = document.getElementById("outputResult");

function encryptText (baseText, shiftKey ) {
    let resultText = "";

//Percorrer cada letra do texto
    for (let i = 0; i < baseText.length; i++) {
        let currentLetter = baseText[i];

//Se for um espaço adiciona ao resultado sem altera-lo
        if (currentLetter === " "){
            resultText += " "
        } else {
            let codeAscii = baseText.charCodeAt(i);
            let codeNewAscii = codeAscii + shiftKey;
            let newLetter = String.fromCharCode(codeNewAscii);

            resultText += newLetter;
        }    

    }
    return resultText;
}