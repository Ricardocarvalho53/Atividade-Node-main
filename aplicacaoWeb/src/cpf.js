// Obtém referências aos elementos HTML: o formulário, o campo de CPF e a área de feedback
document.addEventListener('DOMContentLoaded', function () {
    const cpfForm = document.getElementById('cpf-form');
    const cpfInput = document.getElementById('cpf');
    const feedback = document.getElementById('cpf-feedback');

    // Adiciona um listener para o evento de submissão do formulário
    cpfForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário para evitar recarregar a página

        // Remove caracteres não numéricos do valor do CPF (como pontos e traços)
        const cpfValue = cpfInput.value.replace(/[^\d]/g, '');

        // Verifica se o CPF é válido e atualiza a mensagem de feedback
        if (isValidCPF(cpfValue)) {
            feedback.textContent = 'CPF válido!'; // Mensagem quando o CPF é válido
            feedback.className = 'feedback success'; // Classe CSS para feedback de sucesso (cor verde)
        } else {
            feedback.textContent = 'CPF inválido!'; // Mensagem quando o CPF é inválido
            feedback.className = 'feedback error'; // Classe CSS para feedback de erro (cor vermelha)
        }
    });

    // Função para validar o CPF
    function isValidCPF(cpf) {
        if (cpf.length !== 11 || /^[0-9]+$/.test(cpf) === false) {
            return false;
        }

        let sum = 0; // Variável para armazenar a soma dos produtos das multiplicações
        let remainder; // Variável para armazenar o resto da divisão

        // Cálculo do primeiro dígito verificador
        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        // Calcula o resto da divisão da soma por 11
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0; 

        if (remainder !== parseInt(cpf.substring(9, 10))) return false;

        sum = 0; // Reseta a variável sum para o cálculo do segundo dígito verificador

        // Cálculo do segundo dígito verificador
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        // Calcula o resto da divisão da soma por 11
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0; 

        if (remainder !== parseInt(cpf.substring(10, 11))) return false;

        // Retorna verdadeiro se os dois dígitos verificadores estiverem corretos
        return true;
    }
});
