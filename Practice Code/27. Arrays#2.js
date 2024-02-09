/*
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

let neighbours = [
  "China",
  "Pakistan",
  "Bhutan",
  "Sri Lanka",
  "Bangladesh",
  "Nepal",
];

console.log(neighbours);
console.log(
  ` new length after addition of Utopia is ${neighbours.push("Utopia")}`
);
console.log(neighbours);

console.log(` deleterd country is ${neighbours.pop("Utopia")}`);
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a southern asian country`);
}

neighbours[neighbours.indexOf("Nepal")] = "Republic of Nepal";
console.log(neighbours);
