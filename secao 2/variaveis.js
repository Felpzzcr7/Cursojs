let nome= "Felipe"

let idade = 18

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('qual a sua altura?' , (altura) => {
    console.log('sua altura é: ' + altura)
    console.log(altura + '\n' + nome + '\n' + idade )
})


