// Desafio
// O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0. Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

// Entrada
// O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.

// Saída
// Imprima a saida conforme a explicação acima e o exemplo abaixo.

let x = parseInt(gets());
while (x !== 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
let sum = 0;
 
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
if  (x % 2 !== 0){ //caso não seja par, ajusta valor
  x += 1;
}
  sum += x*5;
  sum += 20;
//Imprima a soma:
  print(sum);
  x = parseInt(gets());
}
