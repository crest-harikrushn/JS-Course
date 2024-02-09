/*
Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
*/

function describeCountry(country, population, capitalCity){
    let output = `${country} has ${population} million people and its captital city is ${capitalCity}`;
    return output;
}

let india = describeCountry(`India`, 132, `Delhi`);
let bangla = describeCountry(`Bangladesh`, 12, `Dhaka`);
let canada = describeCountry(`Canada`, 5, `Ottawa`);


console.log(`${india} \n ${bangla} \n ${canada}`)