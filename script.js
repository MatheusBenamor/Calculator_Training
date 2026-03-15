//Funções de Cálculos

//Adição
function soma(number1, number2) {
let resultado = number1 + number2
return resultado;
}

//Subtração
function subtração(number1, number2) {
let resultado = number1 - number2
return resultado;
}

//Multiplicação
function multiplicação(number1, number2) {
let resultado = number1 * number2
    return resultado;
}

//Divisão
function divisão(number1, number2) {
    if (number2 === 0) {       // Verifica se o divisor é zero
        return "Erro: divisão por zero não é permitida!";
    }
    let resultado = number1 / number2;
    return resultado;
}