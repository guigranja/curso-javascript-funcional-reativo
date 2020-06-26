function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(10)(20)(30))

console.log("---------------------------------------------------")

function calculat(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

const r1 = calculat(10)(5)(subtrair)
const r2 = calculat(10)(5)(mult)
console.log(r1)
console.log(r2)