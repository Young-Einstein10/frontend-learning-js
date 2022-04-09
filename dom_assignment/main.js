/*
Create a new HTML file that has a 'div' with a class of "intro" inside the HTML file, the 'div' content is Hello Everyone, I am new here.
  - Now, create a javascript file and connect it to your HTML Page, inside the javascript file, perform the following:-

  - Create a new paragraph element using the methods we just learned.
  - Give the new paragraph element a textContent of "My Name is <your name>"
  - Give the paragraph a class of "name"
  - Append the paragraph element to the 'div' in the HTML Page.
  - Create an array containing a list of your favorite books. The length of the array should be 10.
  - Loop through the array then display each book on our webpage just like we did in class.
*/

// Create a new paragraph element
const paragraph = document.createElement("p");

// Give the new paragraph a textContent of My Name is Yusuf
paragraph.textContent = "My Name is Yusuf";

// Give the paragraph a class of name
paragraph.className = "name";

//==== Appending new paragraph inside the div in HTML Page

// Select div element first using any selector methods
const introDiv = document.querySelector(".intro");

introDiv.append(paragraph);

// Create List Wrapper for the Books
const ul = document.createElement("ul");
ul.className = "list-wrapper";

introDiv.append(ul);

// Array containing list of favorite books
const favoriteBooks = [
  "Lord of the Rings",
  "The Hobbit",
  "Resident's Evil",
  "Harry Potter",
  "The Witcher",
  "The Adventure of Tin-Tin",
  "The Wizard of Oz",
  "The Lost City",
  "Women of Owu",
  "Purple Hibiscus",
  "Things fall apart",
];

// Using forEachh
// favoriteBooks.forEach(function (book) {
//   const li = document.createElement("li");
//   li.className = "list-item";
//   li.textContent = book;

//   ul.append(li);
// });

// Using for loop
for (let i = 0; i < favoriteBooks.length; i++) {
  const book = favoriteBooks[i];

  const li = document.createElement("li");
  li.className = "list-item";
  li.textContent = book;

  ul.append(li);
}
