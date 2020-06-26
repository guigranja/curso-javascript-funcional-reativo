
// function declaration
function bomDia() {
    console.log("bom dia")
}

bomDia()

// function expression
const bomTarde = function () {
    console.log("boa tarde")
}

bomTarde()

// JS ignora parametros a mais.
function somar(a, b) {
    return a + b
}

const resultado = somar(3, 4)
console.log(resultado)