// Desafio
// Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.

// Entrada
// A entrada consiste em um número inteiro ( n );

// Saída
// A saída consiste na multiplicação do produto dos dígitos ( n ), a soma de seus dígitos e a diferenção entre o produto e a soma


let n = gets(); 
let mult = 1;
let sum = 0;
  
for(let i = 0; i < n.length; i++){
  mult = mult*parseInt(n[i]);
  sum += parseInt(n[i]);
}

let result = mult-sum;

print(result);