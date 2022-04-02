// DOM - Document Object Model

/*
Benefits of using the Javascript DOM
- With the DOM, javascript can change all the HTML elements in a webpage
- Chnaging HTMl attribute
- Change CSS Styling using the DOM
- Ability to add and remove new elements from the DOM
*/

/*
- getElementById
- getElementByClassName
- getElementByTagName
- querySelector
- querySelectorAll
*/

// Selecting an element with an ID: use getElementById
const locationEl = document.getElementById("location");

const loginBtn = document.querySelector(".login-btn");

// Selecting an element with a class: use getElementByClassName
const wrapper = document.querySelector(".wrapper");

// Selecting an element with either a classname, id or attribute
const address = document.querySelector(".wrapper p:nth-child(3)");

const title = document.querySelector(".title");

// Styling Using Javascript
title.style.color = "green";
title.style.textAlign = "center";
title.style.backgroundColor = "yellow";

// Changing Content Using Javascript
address.textContent = "25, Montgomery Road, Yaba, Lagos State.";
address.style.padding = "1rem";
address.style.fontSize = "20px";
address.style.textDecoration = "underline";
address.style.backgroundColor = "aliceblue";

// Styling the Button
loginBtn.style.height = "40px";
loginBtn.style.backgroundColor = "cyan";
loginBtn.style.border = 0;
loginBtn.style.borderRadius = "10px";
loginBtn.style.padding = "0 1rem";
loginBtn.style.fontSize = "18px";
loginBtn.style.padding = "0 1.5rem";
loginBtn.style.cursor = "pointer";
loginBtn.textContent = "Signin";

// Changing Content

loginBtn.textContent = "Signin";

// Creating Elements in the DOM (Let's create a Paragraph Element)
let newPara = document.createElement("p");
newPara.textContent = "Hello World, I am a newly created paragraph";
newPara.className = "text-blue";
wrapper.append(newPara);
// wrapper.insertAdjacentElement("afterbegin", newPara);

// Create a Delete Button and Append to the DOM
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "delete-btn";

deleteBtn.onclick = function () {
  console.log("Hello World");
  // newPara.remove();
  wrapper.removeChild(address);
};

document.body.appendChild(deleteBtn);

// Displaying a list of items on our webpage
const hobbies = [
  "Reading",
  "Sleeping",
  "Drinking",
  "Hiking",
  "Swimming",
  "Reading",
  "Sleeping",
];

function displayItem(item) {
  const newElement = document.createElement("p");
  newElement.textContent = item;
  newElement.className = "list-item";
  wrapper.append(newElement);
}

// for (let i = 0; i < hobbies.length; i++) {
//   const hobby = hobbies[i];

//   displayItem(hobby);
// }

// Displaying Object Properties  on our webpage
const details = {
  name: "Michael Lord",
  age: 40,
  addres: "Ikorodu, Lagos State",
  hobbies: hobbies,
};

for (const key in details) {
  const value = details[key];

  displayItem(`${key}: ${value}`);
}

/*  
  Events in Javascript
  - Events are signals telling you something as occured in the webpage.

  Kinds of Events in JS
    - Click
    - MouseOver
    - MouseOut
    - Keyboard

  Events can be added to HTML Elements in 3 different ways:-
   - Inline Events
   - Event Handler Method
   - Event Listener Method
*/

// Inline Events: are usually addded within elements. They are attributes of the elements itself.
function changeEvent() {
  console.log("This is an inline event.");
}

// Event Handler Method: They normally start with the 'on' keyword along with the actual event type.
loginBtn.onclick = function () {
  alert("Login Successsfully.");
  loginBtn.textContent = "Signout";
};

loginBtn.onmouseover = function () {
  loginBtn.style.backgroundColor = "yellow";
};

loginBtn.onmouseout = function () {
  loginBtn.style.backgroundColor = "cyan";
};

// Using Event Listener Method: This makes use of the addEventListener() method
address.addEventListener("mouseover", function () {
  address.style.backgroundColor = "purple";

  console.log("MouseOver Event");
});

address.addEventListener("mouseout", function () {
  address.style.backgroundColor = "aliceblue";
  console.log("MouseOut Event");
});
