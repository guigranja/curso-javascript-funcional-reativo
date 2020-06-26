function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subNoTerminal = (w, z) =>  console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

setInterval(() => console.log('Exec 2 .....'), 1000)
setInterval(function() {
    console.log('Exec 3 .....')
}, 1000)