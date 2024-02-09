/*
If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/


var country = "India";
var population = 132;
let average_population = 33


let output = (population>33) ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);  

