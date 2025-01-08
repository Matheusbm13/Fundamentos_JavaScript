//Strings 

let nome  = "Maria"
let sobrenome = 'Duarte'
let idade = 29
let profissao = "vigilante"
let nascimento = 1996
let saudacao = "A " + nome + " é " + profissao


console.log(nome)
console.log(idade)
console.log(profissao)
console.log(nascimento)
console.log("A " + nome + " é " + profissao)
console.log(saudacao)
console.log (`Bem vinda, ${nome} ${sobrenome}`)

let nomecompleto = nome + " " + sobrenome 
console.log(nomecompleto)


// Number

//let idade = 8
let aniversario = "8"
console.log(aniversario)

let temperatura = 36.5
console.log(temperatura)

let soma =  29 + 1
console.log(soma);

let subtracao = 2 - 1
console.log(subtracao);

let multiplicacao = 2*2
console.log(multiplicacao)

let divisao = 10/2
console.log(divisao)


//boolean

let estachovendo = false 
let estasol = true 

console.log(estachovendo)
console.log(estasol)


//array 

//para criar uma array
let frutas = ["abacaxi", "laranja", "melancia", "maca"]
let numeros = [1, 2, 3, 4, 5]

//adicionar no final da array
frutas.push("uva")
    console.log(frutas)

//remover o primeiro elemento
frutas.shift()
    console.log(frutas)

//remover o ultimo elemento
frutas.pop()

//lenght - contar
console.log(frutas.length)


//[3,4,6,7]

//Objeto
let pessoa = {
    nome: "joao",
    sobrenome: "duarte",
    idade: 28,
    estrangeiro: false,
    linguagens: ["java", "go", "python", "cobol", "#c"]
}
console.log(`nome: ${pessoa.nome}`)
console.log(`sobrenome: ${pessoa.sobrenome}`)
console.log(`idade: ${pessoa.idade}`)

//adicionando uma nova propriedade
pessoa.profissao = "desenvolvedor"

//alterar a propriedade
pessoa.idade = 27

//deletando propriedade
delete pessoa.linguagens

let carros = [ 
    {marca: "toyota", modelo: "corolla"},
    {marca: "honda", modelo: "civic"},
    {marca: "fiat", modelo: "uno"}
]
//puxar algo
console.log(`modelo do carro: ${carros[2].modelo}`)






