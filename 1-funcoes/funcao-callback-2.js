const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// coloca _ quando não quer usar o parametro
function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}


console.log('Inicio Assincrona')
// leitura é feita de uma vez. Forma assincrona
fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, {}, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim Assincrona')


console.log('Inicio Sincrona')
// Fica esperando a execução da leitura. Forma Sincrona
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim Sincrona')