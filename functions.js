function isEven(num) {
  return num % 2 === 0;
}

isEven(5);

function findSumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

// Find the average of the following numbers in the array: [2,4,5, 9, 0, 7, 0, ..., 11]

let scores = [2, 4, 5, 9, 0, 7, 0, 11];

function findAverage(numbers) {
  if (!Array.isArray(numbers)) {
    return "Values must be in an array.";
  }

  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }

  return total / numbers.length;
}

findAverage(scores);

/*
Write a function min(a,b) which returns the least of two numbers a and b.
*/
function min(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
*/

function pow(x, n) {
  return x ** n;
}

// Using a looop
function pow(value, power) {
  if (!value || !power) return "Pls pass in the values";

  let result = value;

  while (power > 1) {
    result *= value;

    power--;
  }

  return result;
}
