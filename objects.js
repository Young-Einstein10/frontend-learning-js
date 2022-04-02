//

const details = {
  name: "Alexander Luthor",
  age: 32,
  hobby: "Looking for trouble",
  address: "Smallville, Kansas",
  displayName: function () {
    return this.name;
  },
};

// access a property using dot notation or square brackets
details.school;
details.age;
details["address"];

// re-assign a property using dot notation
details.school = "Lagos High School";

// Properties which have functions as their values are called "METHODS" in objects
details.displayName();

// delete a property
delete details.school;

/*
Converting Javascript Object to JSON
- Use JSON.stringify()

Converting from JSON to Javascript Object
- Use JSON.parse()

*/
