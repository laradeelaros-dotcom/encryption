# Secret Message - Caesar Cipher

Esse é um projeto que tem como propósito aplicar a lógica de programação em JavaScript, utilizando também HTML5 e CSS3.

Este codigo simula uma ferramenta de criptografica baseada na Cifra de César, onde o usuário pode codificar e descodificar mensagens baseadas em uma chave numérica. 

## Funcionalides:
- A base da criptografia: Desloca as letras de um texto de acordo com uma chave numérica escolhida pelo usuário. 
- Descriptografia (DRY): Reverte a mensagem criptografada para o seu texto original, utilizando a mesma lógica da criptografia. 
- Validação de Inputs: Há proteção contra inputs inválidos (como digitar letras em campo numérico.)
- Tratamento de pontuação: Mantém espaços, virgulas e pontuações sem alteração, incluindo eles na mensagem, focando somente no caracteres alfabéticos (A-Z).

## Tecnologias Utilizadas
- JavaScript: Logica, manipulação do DOM e eventos. 
- HTML5: Estruturação semântica da interface. 
- CSS3: Estilização com variáveis. 
-Git&Github: Versionamento de código.

## Lógica Utilizada
- Manipulação da tabela ASCII: Conversão de letras para números (charCodeAt e fromCharCode).
-Calculo com Módulo %: Foi utilizado um loop for no alfabeto para que, se caso o deslocamento ultrapasse a letra "Z", a contagem retorna ao "A".
- DRY: Implementação da função de descriptografar sem duplicar o código da função principal, utilizando a matemática modular para inverter a chave.

### Como usar
- Clone este repositório no computador:
git clone [https://github.com/laradeelaros-dotcom/encryption.git](https://github.com/laradeelaros-dotcom/encryption.git)


Projeto desenvolvido por Lara Santiago como parte dos estudos em Engenharia de Software.
