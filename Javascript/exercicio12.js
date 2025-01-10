// 1. Transforme o array abaixo em um novo array contento o dobro de cada número 
//     - Entrada [1, 2, 3, 4, 5]
//     - Resultado [2, 4, 6, 8, 10]



let numeros = [1, 2, 3, 4, 5]
let numerosdobro = numeros.map(num => num * 2)
console.log(numerosdobro) 



// 2. Filtre apenes os numeros pares do array abaixo
//     - Entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     - Resultado [2, 4, 6, 8, 10]


let entrada = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let par = entrada.filter (n => n % 2 === 0)
console.log(par)


// 3. Encontre o primeiro maior numero maior que 50 no array abaixo
//     - Entrada [10, 25, 47, 58, 62, 79]
//     - Resultado: 58

let enter = [10, 25, 47, 58, 62, 79]
let enter1 = enter.filter(n => n > 50 && n < 79)
console.log(enter1)


// 4. Verifique se existe pelo menos um número negativo
//     - Entrada [10, -5, 7, 0, -3]
//     - Resultado: true

let numerosp = [ 10, -5, 7, 0, -3]
let numerospp = numerosp.includes(n => n < -1)
console.log(numerospp)


// 5. Verifique se todos os numeros do array são maiores que 2
//     - Entrada [1, 2, 3, 4, 5]
//     - Resultado: false

let numeros2 = [1, 2, 3, 4, 5]
let todosmaioresque2 = numeros2.every(n => n > 2)


// 6. Imprima no terminal a posição (index) de cada elemento no array abaixo
//     - Entrada [10, 20, 30, 40, 50]
//     - Resultado: 
//         O numero: 
//             O numero 10 está na posição 0
//             O numero 20 está na posição 1
//             O numero 30 está na posição 2
//             O numero 40 está na posição 3
//             O numero 50 está na posição 4






// 7. Verifique se o numero 7 esta presente no array