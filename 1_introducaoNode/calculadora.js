// Módulos Node.js
// - Pedaços do programa.
// - São uma forma de separar o código em vários arquivos.
// - Mantém a organização.
// - São utilizados para importar bibliotecas.

function soma(a,b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

//module.exports = soma;
// Ao separar os módulos em arquivos, é permitido a exportação/importação de funções, variáveis, etc.
// Ex:
// - Ao exportar variadas funções de uma calculadora: 
module.exports = {
    soma,
    sub,
    mult,
    div
};