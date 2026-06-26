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

//Obter o código ASCII da letra atual
        let asciiCode = baseText.charCodeAt(i);
//Se é uma letra maiuscula de A - Z
        if (asciiCode >= 65 && asciiCode <=90){
//Se for, faça o calculo.
//forçar o código ASCII a ficar dentro do intervalo das letras maiúsculas (A-Z) e retornar ao início do alfabeto caso ultrapasse o Z
            let codeNewAscii = (asciiCode - 65 + shiftKey) % 26 +65; 
//Transformar o código ASCII de volta para uma letra
            let newLetter = String.fromCharCode(codeNewAscii);
            resultText += newLetter;
        } else {
             //Se não for uma letra maiúscula, adiciona o caractere original ao resultado
            resultText += currentLetter;
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

//Descriptografar
decryptButton.addEventListener('click', function(){
    const typedText = textField.value;
    const keyValue = parseInt(keyField.value);

    if (isNaN(keyValue)) {
        console.error("ERRO: A chave digitada não é um número válido!");
        resultField.innerText = "Por favor, digite um número válido para a chave.";
        return;
    }
//Matemática modular
//calcular a diferença para 26
    const reverseKey = 26 - (keyValue % 26);
    const finalResult = encryptText(typedText, reverseKey);

    resultField.innerText = finalResult;
});