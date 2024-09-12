
function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

console.log("Adição (10 + 3):", adicao(10, 3));

// Exportando as funções para serem utilizada no test
export default { adicao, subtracao, multiplicacao, divisao };



