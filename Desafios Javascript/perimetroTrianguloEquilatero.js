// Desafio
// Dado o comprimento dos lados de um triângulo equilátero, escreva um programa para encontrar a área da circunferência do triângulo equilátero dado.

// Entrada
// A entrada será dada por um inteiro N que representará os lados do triângulo. 

// Saída
// A saída deverá retornar “A area da circunferencia é: “,  e em seguida o valor do perimetro do triângulo


let pi = 3.14159265358979323846;
 
let l = gets();
let r = l/(Math.sqrt(3))

//TODO: Retorne a área do perímetro do triângulo

let a = pi*r*r

print('A area da circunferencia eh: ' + a.toFixed(2))