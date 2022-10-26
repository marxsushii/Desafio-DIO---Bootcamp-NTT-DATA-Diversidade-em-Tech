// Descrição
// Dados dois números A e B, onde o valor de ‘B’ é incrementado ou decrementado por alguma porcentagem de ‘A’. Sua tarefa é descobrir qual é a porcentagem de diferença entre esses dois valores.

// Entrada
// A entrada é composta por dois números inteiros, A e B. 

// Saída
// A saída será a diferença de porcentagem entre os valores A e B.  



let A = parseInt(gets()), B= parseInt(gets()); 
 
// TODO: Calcule a porcentagem de diferença entre os dois valores

let oneHundred = 100;
let percentage = (B*oneHundred)/A;
percentage -= oneHundred;

print(Math.trunc(percentage)+'%');//Math.trunc retorna a parte inteira de um número