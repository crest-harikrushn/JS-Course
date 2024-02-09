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

console.log("Population of whole country is : " + population + " million");

// country split in half
console.log("Population of half country is : " + population/2 + " million");

// increase population by 1 million
population++;
console.log("Population of country is : " + population + " million");

// finland comparision
f_population = 6
if(f_population < population){
    console.log("country have more people than Finland")
}

// average comparision
average_population = 33
if(average_population < population){
    console.log("country have less people than the average country")
}

let description = country  + " is in " + continent + ", and its " + population + " million people speak " + language;

console.log(description);