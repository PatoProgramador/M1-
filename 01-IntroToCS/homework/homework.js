'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numS = num.split("").reverse();
  let numDecimal = 0;
  for (let i = 0; i < numS.length; i++) {
    let sum = (numS[i] * 2 ** i);
    numDecimal += sum;
  }
  return numDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arrayBinario = []
  while (num !== 0) {
    let residuo = num % 2;
    num = Math.floor(num / 2);
    arrayBinario.unshift(residuo);
  }
  arrayBinario = arrayBinario.join("");
  return arrayBinario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}