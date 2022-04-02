// Arrays are used for storing values of any datatype using a list format. The values are usually are given a position called Index.

const listOfBooks = [
  "Harry Potter and Deathly Hallows",
  "Lord of the Rings",
  "Twilight",
  "The Witcher",
  "Game of Thrones",
  "The Magician",
];

let array = ["boy"];

// Array Methods
// push():- used adding items to the end of an array
array.push("david");
array.push(100);

// pop():- used to remove items fron the end of an array
array.pop();

// shift():- used to remove items from the beginning array
array.shift();

array.push("girl", "father", "sibling", "sister", "mothers");

// unshift() :- used to add items to the beginning of an array
array.unshift("One", "Two", "Three");

// console.log(array);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .forEach() :- iterating over an array, but doesn't return any new value
numbers.forEach(function (num) {
  console.log(num);
});

// map():- iterating over an array and it returns a new array
console.log(
  numbers.map(function (num) {
    return num + 2;
  })
);

// filter() :- terating over an array that passes a specific condition
console.log(
  numbers.filter(function (num) {
    return num >= 6;
  })
);
