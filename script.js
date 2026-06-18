// 1- Capturar os elementos do HTML utilizando os IDs
const textField = document.getElementById("textarea");
const keyField = document.getElementById("numberKey");
const encryptButton = document.getElementById("button_encrypt");
const decryptButton = document.getElementById("button_decrypt");
const resultField = document.getElementById("outputResult");

// 2- Informar que o botão "encryptButton" fará um evento de click
encryptButton.addEventListener('click', function() {

    //capturar o que o usuario digitou
    const userText = textField.value;

    //Exibir mensagem teste
    console.log("botão digitado com sucesso");
    console.log("texto digitado:", userText);
}) 