// Desafio
// Neste desafio temos N moedas que precisam ser organizadas em forma de triângulo, desse modo, você deverá escrever um programa que imprima a altura máxima que podemos alcançar usando essas N moedas.

// Entrada
// A primeira linha terá o valor de 1 moeda, a segunda linha terá o valor de 2 moedas e assim por diante.

// Saída
// A saída consiste no retorno da altura máxima que o triângulos de moedas terá.

let N = parseInt(gets()); 

let level = 0;

while(level < N){
  level+=1;
  N -= level;
}
print(level)