// const arr = [243, 2679, 907, 678];

// function addNumbersFromArray(numbers = []) {
//   let sum = 0;
//   numbers.map(number => sum += number);
//   return sum;
// }

// console.log(addNumbersFromArray(arr));


// const arr = [243, 2679, 907, 678];

// function addNumbersFromArray(numbers = []) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(addNumbersFromArray(arr));




function addScope(a, b) {

  let numbers = null;
  let length = 0;

  if (b > a) {
    length = b - a;
    for (let i = 0; i < length -1; i++) {
      a = a + 1;
      numbers += a;
    }
    } else if (a > b) {
    length = a - b;
    for (let i = 0; i < length -1; i++) {
      b = b + 1;
      numbers += b;
    }
  } else {
    return;
  }


  return numbers
}

console.log(addScope(4, 1));
