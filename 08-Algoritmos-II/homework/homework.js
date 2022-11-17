'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let pivot = array[0];
  let left = [];
  let right = [];
  let middle = [];
  
  for (let i = 0; i < array.length; i++) {
    // for(const num of array)
    // if (num < pivot) left.push(num);
    // if (num > pivot) right.push(num);
    // if (num === pivot) middle.push(num);
    array[i] < pivot && left.push(array[i]);
    array[i] > pivot && right.push(array[i]);
    array[i] === pivot && middle.push(array[i]);
  }
  return quickSort(left).concat(middle).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  // división del array
  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
