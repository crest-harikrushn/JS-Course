/*
Recreate the description variable from the last assignment, this time using the template literal syntax.
*/

var country = "India";
var continent = "Asia"
var population = 130
var language = "gujarati"


/*
If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(description);