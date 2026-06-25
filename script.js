//Capturar os elementos do HTML utilizando os IDs
const textField = document.getElementById("textarea");
const keyField = document.getElementById("numberKey");
const encryptButton = document.getElementById("button_encrypt");
const decryptButton = document.getElementById("button_decrypt");
const resultField = document.getElementById("outputResult");

function encryptText (baseText, shiftKey ) {
    let resultText = "";

    baseText = baseText.toUpperCase();//Transformar o texto em maiúsculo

//Percorrer cada letra do texto
    for (let i = 0; i < baseText.length; i++) {
        let currentLetter = baseText[i];

//Se for um espaço adiciona ao resultado sem altera-lo
        if (currentLetter === " "){
            resultText += " "
        } else {
            let codeAscii = baseText.charCodeAt(i);

            let codeNewAscii = (codeAscii - 65 + shiftKey) % 26 +65; //forçar o código ASCII a ficar dentro do intervalo das letras maiúsculas (A-Z) e retornar ao início do alfabeto caso ultrapasse o Z
            let newLetter = String.fromCharCode(codeNewAscii);

            resultText += newLetter;
        }    

    }
    return resultText;
}

encryptButton.addEventListener('click', function () {
   const typedText = textField.value;
   const keyValue = parseInt(keyField.value) //Capturar o valor digitado e transformar em números "parseInt"

//Se o valor da chave não for válido
    if (isNaN(keyValue)) {
        console.error("ERRO: A chave digitada não é um número válido!");
        resultField.innerText = "Por favor, digite um número válido para a chave."
        return;
    }
    const finalResult = encryptText(typedText, keyValue);
    resultField.innerText = finalResult;
});