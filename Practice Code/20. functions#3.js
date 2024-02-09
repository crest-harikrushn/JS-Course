/*
The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).
*/
let worldPopulation = 7900;

function percentageOfWorld1(population){
    return (population*100)/worldPopulation;
}

let China = percentageOfWorld1(1441);
console.log(China);
let India = percentageOfWorld1(1502);
console.log(India);
let Canada = percentageOfWorld1(365);
console.log(Canada);


// function expression

let percentageOfWorld2 = function (population){
    return (population*100)/worldPopulation;
}


let China2 = percentageOfWorld2(1441);
console.log(China2);
let India2 = percentageOfWorld2(1502);
console.log(India2);
let Canada2 = percentageOfWorld2(365);
console.log(Canada2);