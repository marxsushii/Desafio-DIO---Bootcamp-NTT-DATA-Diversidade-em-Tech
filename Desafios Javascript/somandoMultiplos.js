// Desafio
// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// Entrada
// A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

// Saída
// A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

var a = parseInt(gets());
var N = parseInt(gets());
var sum = 0;
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

for(let i = a; i <= N; i= i + a){
  
    sum+=i;
  
}
print(sum);