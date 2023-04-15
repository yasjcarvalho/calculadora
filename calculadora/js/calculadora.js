const somar = (a, b) => {
  return a + b
}
const calcularSomar = () => {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const resultado = somar(num1, num2)
  document.getElementById('resultado').textContent = resultado
}
const subtrair = (a, b) => {
  return a - b
}

const calcularSubtracao = () => {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const resultado = subtrair(num1, num2)
  document.getElementById('resultado').textContent = resultado
}

const dividir = (a, b) => {
  return a / b
}
const calcularDividir = () => {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const resultado = dividir(num1, num2)
  document.getElementById('resultado').textContent = resultado
}
const mutiplicar = (a, b) => {
  return a * b
}
const calcularMultiplicar = () => {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const resultado = mutiplicar(num1, num2)
  document.getElementById('resultado').textContent = resultado
}

const comparar = (a, b) => {
  if (a > b) {
    return 'maior'
  } else if (a < b) {
    return 'menor'
  } else {
    return 'igual'
  }
}
const calcularComparar = () => {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const resultado = comparar(num1, num2)
  document.getElementById('resultado').textContent = resultado
}

const exponenciacao = (a, b) => a ** b
const calcularExpoente = () => {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  const resultado = exponenciacao(num1, num2)
  document.getElementById('resultado').textContent = resultado
}

//UM INPUT

const fatorial = a => {
  let resultado = 1
  for (let i = 2; i <= a; i++) {
    resultado *= i
  }
  return resultado
}
const calcularFatorial = () => {
  const num3 = Number(document.getElementById('num3').value)
  const resultado = fatorial(num3)
  document.getElementById('resultado').textContent = resultado
}

const raizQuadrada = a => Math.sqrt(a)
const calcularRaiz = () => {
  const num3 = Number(document.getElementById('num3').value)
  const resultado = raizQuadrada(num3)
  document.getElementById('resultado').textContent = resultado.toFixed(2)
}

const primo = a => {
  if (a < 2) {
    return false
  }
  if (a === 2) {
    return true
  }
  if (a % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.sqrt(a); i += 2) {
    if (a % i === 0) {
      return false
    }
  }
  return true
}

const calcularPrimo = () => {
  const num3 = Number(document.getElementById('num3').value)

  const resultado = primo(num3)
  document.getElementById('resultado').textContent = resultado
}

const par = a => {
  if (a % 2 === 1) {
    return 'não é par'
  }
  return 'é par'
}

const calcularPar = () => {
  const num3 = Number(document.getElementById('num3').value)
  const resultado = par(num3)
  document.getElementById('resultado').textContent = resultado
}

const eimpar = a => {
  if (a % 2 === 0) {
    return 'não é ímpar'
  }
  return 'é ímpar'
}
const calcularImpar = () => {
  const num3 = Number(document.getElementById('num3').value)
  const resultado = eimpar(num3)
  document.getElementById('resultado').textContent = resultado
}

module.exports = {
  somar,
  subtrair,
  dividir,
  mutiplicar,
  primo,
  par,
  eimpar,
  comparar,
  fatorial,
  raizQuadrada,
  exponenciacao
}
