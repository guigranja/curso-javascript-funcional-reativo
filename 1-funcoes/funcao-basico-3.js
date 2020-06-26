// arrow function

const felizNatal = () => console.log('Feliz Natal')
felizNatal()

// Tendo somente um parametro, remove parentese
// Função sem o par de chaves, não aceita "return"
const saudacao = nome => `Fala ${nome}, Blzzz????`

console.log(saudacao('Guilherme'))

// ... -> resti -> pega os parametros e joga em um array
const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n
    }

    return total
}

console.log(somar(1, 2, 3))

const potencia = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}

// OU

const potencia2 = base => exp => Math.pow(base, exp)

console.log("Uma forma " + potencia(2)(10))
console.log("Outra forma " + potencia2(2)(8))

// this
// arrow function não funcionam com o 'this'
Array.prototype.ultimo = function() {
    console.log(this[this.length -1 ])
}

const numeros = [1, 2, 3, 500]
numeros.ultimo()