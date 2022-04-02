// Printing numbers in the console
// let start = 0;
// let end = 10;

// for (start; start < end; start++) {
//   console.log(start);
// }

// Printing Values in an array
const fruits = ["apple", "orange", "mango", "pear", "lemon", "kiwi", "guava"];

for (let index = 0; index < fruits.length; index++) {
  alert(fruits[index]);
}

/*
Class-Work 1

- Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

- The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

- Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

while (true) {
  let response = prompt("Enter a number greater than 100");

  if (!response) {
    break;
  }

  if (response > 100) {
    break;
  }
}

/*
CLASS-WORK 2
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/

let n = prompt("Enter the last value");

let start = 2;
let end = parseInt(n);

const primeNumbers = [];

for (start; start <= end; start++) {
  if (start / start === 1 && start / 1 === start) {
    primeNumbers.push(start);
  }
}
