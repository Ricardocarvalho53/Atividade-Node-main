# Documentação - Validação de CPF

## Descrição

Esta documentação descreve a implementação e os testes da funcionalidade de validação de CPF em uma aplicação web. A função de validação verifica se o CPF inserido é válido de acordo com os critérios estabelecidos pela fórmula de verificação do CPF. O objetivo é garantir que o CPF informado seja um número válido e que a interface exiba uma mensagem apropriada com base na validade do CPF.

## Funcionamento

### Arquitetura do Projeto

O projeto é dividido em três arquivos principais:

- `cpf.html`: Contém a estrutura do formulário para a entrada do CPF.
- `cpf.css`: É responsável pela estilização da interface do usuário, incluindo a exibição das mensagens de feedback.
- `cpf.js`: Implementa a lógica de validação do CPF e manipula a exibição das mensagens de feedback.

### Estrutura do Código

A estrutura do código JavaScript é organizada para garantir que a validação do CPF funcione corretamente e que a interface do usuário forneça feedback apropriado.

- `document.addEventListener('DOMContentLoaded', ...)`: Garante que o código JavaScript seja executado somente após o carregamento completo do DOM.
- `cpfForm.addEventListener('submit', ...)`: Adiciona um listener para o evento de submissão do formulário, que valida o CPF e atualiza a mensagem de feedback.
- `cpfInput.value.replace(/[^\d]/g, '')`: Remove caracteres não numéricos do CPF inserido pelo usuário.
- `isValidCPF(cpf)`: Função responsável por validar o CPF utilizando a fórmula de verificação.
- `feedback.textContent`: Atualiza a mensagem de feedback com base na validade do CPF.
- `feedback.className`: Define a classe CSS para estilizar a mensagem de feedback como sucesso (verde) ou erro (vermelho).

### Função de Validação

A função `isValidCPF` realiza a validação do CPF com base na fórmula de verificação. A validação é feita em duas etapas:

- `for (let i = 1; i <= 9; i++)`: Calcula o primeiro dígito verificador usando pesos de 10 a 2.
- `for (let i = 1; i <= 10; i++)`: Calcula o segundo dígito verificador usando pesos de 11 a 2.
- `remainder`: Armazena o resto da divisão e é ajustado para 0 se o valor for 10 ou 11.
- `parseInt(cpf.substring(...))`: Obtém os dígitos do CPF para comparar com os valores calculados.

### Configuração do Projeto

O projeto é configurado com os seguintes arquivos:

- `cpf.html`: Contém o formulário HTML para entrada do CPF.
- `cpf.css`: Define o estilo para mensagens de feedback.
- `cpf.js`: Implementa a lógica de validação do CPF e manipula a interface do usuário.

Não há dependências externas além dos arquivos padrão do HTML, CSS e JavaScript. Para testar a aplicação, basta abrir o arquivo `cpf.html` em um navegador e testar a funcionalidade de validação.
