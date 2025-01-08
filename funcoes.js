function funcaobomdia(){
    console.log("Bom dia")
}

funcaobomdia()

function boasvindas(nome){
    console.log("Seja bem-vindo", nome)
}

boasvindas("Matheus")
boasvindas("Marta")

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}
soma(2, 6)

let numeros = [1, 2, 3]
numeros.pop()


function mult(mult1, mult2){
    console.log(mult1 * mult2)
}
mult(2, 2)


function verificarmaioridade(idade){
    if(idade >= 18){
        console.log("Maior de idade")
    } else{
        console.log("Menor de idade")
    }
}
verificarmaioridade(14), verificarmaioridade(77), verificarmaioridade(14), verificarmaioridade(12)


funcao
function divisao(n1, n2){
    return n1 / n2
}

let resultado = divisao(10, 5)

console.log (resultado)


let subtracao = function( n1, n2){
    if(n1 > 10 || n2 > 10){
        return " Não é possível calcular numeros maiores que 10"
    }
    
    return n1 - n2 
}


console.log(parseInt(subtracao(11, 5)))


