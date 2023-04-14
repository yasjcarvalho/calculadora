const {
  somar,
  subtrair,
  dividir,
  mutiplicar,
  primo,
  par,
  impar,
  fatorial,
  raizQuadrada,
  exponenciacao
} = require('./calculadora.js')
var assert = require('assert')

//testando a sum
assert(somar(6, 7) == 13, 'a soma de 6+7 é igual a 13')
assert(somar(8, 0) == 8, 'a soma de 8+0 é igual a 8')
assert(somar(400, 600) == 1000, 'a soma de 400+600 é igual a 1000')
assert(somar(0, -3) == -3, 'a soma de 0+(-3) é igual a -3')
assert(somar(0, 0) == 0, 'a soma de 0+0 é igual a 0')
assert(somar(2, 3) == 5, 'a soma de 2+3 é igual a 5')
assert(somar(1.5, 1) == 2.5, 'a soma de 1.5+1 é igual a 2.5')
assert(somar(5, -5) == 0, 'a soma de 5+(-5) é igual a 0')

//testando a subtração
assert(subtrair(5, 3) == 2, 'a subtração de 5-3 é igual a 2')
assert(subtrair(0, -4) == 4, 'a subtração de 0-(-4) é igual a 4')
assert(subtrair(0.5, 1.5) == 1, 'a subtração de 0.5-1.5 é igual a 1')
assert(subtrair(-5, 5) == -10, 'a subtração de -5-5 é igual a -10')

//testando a divisão
assert(dividir(10, 5) == 2, 'a divisão de 10/5 é igual a 2')
assert(dividir(0, 9) == 0, 'qualquer número dividido por 0 é 0')
assert(dividir(1.5, 1.5) == 1, 'a divisão de 1.5/1.5 é igual a 1')
assert(dividir(-10, 5) == -2, 'a divisão de -10/5 é igual a -2')

//testando a multplicação
assert(mutiplicar(2, 5) == 10, 'a multiplicação de 2 x 5 é 10')
assert(mutiplicar(0, 9) == 0, 'qualquer número multplicado por 0 é 0')
assert(mutiplicar(1.5, 2) == 3, 'a multiplicação de 1.5 x 2 é 3')
assert(mutiplicar(-2, 5) == -10, 'a multiplicação de -2 x 5 é -10')

//testando se é um número primo
assert(primo(7) == 'Sim', 'o número 7 é primo')
assert(primo(15) == 'Não', 'o número 15 não é primo')
assert(primo(-7) == 'Não', 'o número -7 não é primo')
assert(primo(0) == 'Não', 'o número 0 não é primo')
assert(primo(1) == 'Não', 'o número 1 não é primo')

//testando se é par
assert(par(4) == 'Sim', 'o número 4 é par')
assert(par(7) == 'Não', 'o número 7 NÃO é par')
assert(par(-10) == 'Sim', 'o número -10 é par')
assert(par(-3) == 'Não', 'o número -3 NÃO é par')
assert(par(0) == 'Sim', 'o número 0 é par')
assert(par(1) == 'Não', 'o número 1 NÃO é par')

//testando se é ímpar
assert(impar(5) == 'Sim', 'o número 5 é ímpar')
assert(impar(8) == 'Não', 'o número 8 NÃO é ímpar')
assert(impar(-15) == 'Sim', 'o número 15 é ímpar')
assert(impar(-2) == 'Não', 'o número -2 NÃO é ímpar')
assert(impar(0) == 'Não', 'o número 0 NÃO é ímpar')
assert(impar(1) == 'Sim', 'o número 1 é ímpar')

//testando o fatorial
assert(fatorial(5) == 120, 'o fatorial de 5 é 120')
assert(fatorial(0) == 1, 'o fatorial de 0 é igual a 1')
assert(fatorial(1) == 1, 'o fatorial de 1 é igual a 1')
assert(fatorial(-5) == 'Inválido', 'o fatorial de -5 exibe inválido')

//testando a raiz quadrada
assert(raizQuadrada(4) == 2, 'a raiz quadrada de 4 é 2')
assert(raizQuadrada(0) == 0, 'a raiz quadrada de 0 é 0')
assert(
  raizQuadrada(-4) == 'Inválido',
  'a raiz quadrada de -4 é inválido, pois não exibe raiz quadrada de números negativos'
)
assert(raizQuadrada(2.25) == 1.5, 'a raiz quadrada de 2.25 é 1.5')

//testando a expotenciação
assert(exponenciacao(2, 3) == 8, '2 elevado a 3 é igual a 8')
assert(exponenciacao(9, 0) == 0, 'qualquer número elevado a 0 dá 0')
assert(
  exponenciacao(1.5, 1) == 1.5,
  '1.5 elevado a 1 é igual a 1.5 (ele mesmo)'
)
assert(exponenciacao(2, 4) == 16, '2 elevado a 4 é igual a 16')
