// function declaration
function bomDia() {
    console.log("bom dia")
}

// function expression
const bomTarde = function () {
    console.log("boa tarde")
}

// Passar função como parametro para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia())
executarQualquerCoisa(bomTarde())

// Retornar uma função a partir de uma outra função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

// Passando direto
console.log(potencia(3)(4))