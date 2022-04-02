function sumMultiplyNumbers(num1 = 4, num2 = 6, num3 = 9, num4 = 2) {
  const sum1 = num1 + num4;
  const sum2 = num2 + num3;
  const product = sum1 * sum2;

  return product;
}

sumMultiplyNumbers();

/*
  In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:
  - name: A string representing the band name.
  - nationality: A string representing the country the band comes from.
  - genre: What type of music the band plays.
  - members: A number representing the number of members the band has.
  - formed: A number representing the year the band formed.
  - split: A number representing the year the band split up, or false if they are still together.
  - albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
  - name: A string representing the name of the album.
  - released: A number representing the year the album was released.
  
  Include at least two albums in the albums array.

*/

const bandDetails = {
  name: "The Beatles",
  nationality: "UK",
  genre: "R & B",
  members: 4,
  formed: 1987,
  split: false,
  albums: [
    {
      name: "Who Cares",
      released: 2002,
    },
    {
      name: "Move On",
      released: "1996",
    },
  ],
};
