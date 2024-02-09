/*
Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

Call the describe method.

Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

let myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1321,
  neighbours: [
    "China",
    "Pakistan",
    "Bhutan",
    "Sri Lanka",
    "Bangladesh",
    "Nepal",
  ],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} `;
  },

  checkIsland: function () {
    if (this.neighbours.length === 0) {
      this.isIsland = true;
    } else {
      this.isIsland = false;
    }
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
