/*
Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.
*/
let worldPopulation = 7900;

let percentageOfWorld2 = function (population){
    return ((population*100)/worldPopulation);
}

let describePopulation = function(country, population){
    return `${country} has ${population} million people, which us about ${percentageOfWorld2(population).toFixed(2)}% of world.`
}

let China = describePopulation("China", 1441);
console.log(China);
let India = describePopulation("India", 1502);
console.log(India);
let Canada = describePopulation("Canada", 365);
console.log(Canada);
