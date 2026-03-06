const anoDeNascimento = 2007;
const anoAtual = 2026;
const idade = anoAtual - anoDeNascimento;
let peso = 81;
let altura = 1.71;
const imc = peso / (altura * altura);
const nome = "Felipe";


console.log("ola " + nome + ", sua idade é: " + idade + " anos, seu peso é: " + peso + " kg, sua altura é: " + altura + " m e seu IMC é: " + imc)
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal")
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso")
} else if (imc >= 30 && imc < 35) {
    console.log("Obesidade grau 1")
} else if (imc >= 35 && imc < 40) {
    console.log("Obesidade grau 2")
} else {
    console.log("Obesidade grau 3")
}