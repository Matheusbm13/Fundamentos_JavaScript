//1. Crie uma função chamada "calcularidade" que recebe a idade e retorna o ano de nascimento

function calcularidade(idade){

        return 2025 - idade

}

console.log(calcularidade(22))



//2. Crie uma função chamada "calcularmedia" que recebe três notas e retorna a média

function media(m1, m2, m3){
    return m1 + m2 + m3 / 3

}
console.log(media(10, 20, 0))

//3. Crie uma função chamada "verificarparimpar" que recebe um numero e retorna "par" se o numero for par, ou "impar" se o numero for impar

function verificarparimpar(numero){
    return numero % 2 == 0 ? "Par" : "Impar"
}


function verificar(numero){
if(numero % 2 == 0){
    return "Par"
} else{
    return "Impar"
    }
}
