'use strict'
// No cambies los nombres de las funciones.
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primos = [1];
  let i = 2
  while (num !== 1) {
    if (num % i === 0) {
      primos.push(i)
      num = num / i
    } else i++;
  }
  return primos;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // // Si intentamos con un solo for solo se van a voltear de dos en dos pero no se va a organizar
  // // el array en su totalidad
  // // ej: var miarr = [4, 2, 6, 7, 1, 3];
  // //     console.log(bubbleSort(miarr)); => [ 2, 4, 6, 1, 3, 7 ]
  // // for (let i = 0; i < array.length; i++) {
  // //   if(array[i] > array[i + 1]) {
  // //     [array[i],array[i+1]] = [array[i+1],array[i]]
  // //   }
  // // }
  // // return array;
  // // }
  for (let i = 2; i < array.length; i++) {
    for (let j = 0; j <= (array.length - i); j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i ++){
    let aux = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // for(let i = 0; i < array.length - 1; i++) {
  //   let minIndex = i;
  //   // creamos otro for para que por cada iteracion del primero le segundo haga todo 
  //   // el recorrido buscando el menor
  //   for(let j = i + 1; j < array.length; j++) {
  //     // la busqueda del minimo
  //     if (array[j] < array[minIndex]) minIndex = j;
  //   }
  //   if(i !== minIndex) {
  //     let aux = array[i];
  //     array[i] = array[minIndex];
  //     array[minIndex] = aux;
  //   }
  //   return array;
  // }
  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[menor]){
        menor = j;
      }
    }
    if (menor !== i){
      [array[i], array[menor]] = [array[menor], array[i]];
    }
    
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
