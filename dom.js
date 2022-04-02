// getElementById()

// document.getElementById("location");

// getElementsByClassName()
// document.getElementsByClassName("name")

// getElementByTagName()

function changeColor() {
  console.log("Heading 1");
}

const paragraphLoc = document.getElementById("location");

paragraphLoc.onclick = function (event) {
  console.log("Clicking on paragraph", event);
};

paragraphLoc.onmouseover = function (event) {
  event.target.style.color = "red";
};

paragraphLoc.onmouseout = function (event) {
  event.target.style.color = "yellow";
};

// using an event listener
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function (event) {
  console.log("This event is called using the AddEventListener method", event);
});
