/*
Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

Log to the console whether the array has 4 elements or not (true or false).

Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

let worldPopulation = 7900;

let percentageOfWorld2 = function (population){
    return ((population*100)/worldPopulation);
}

const populations = [1212,1652,2432,645];
console.log(populations);
console.log(populations.length);

const percentages = new Array(4);
percentages[0] = percentageOfWorld2(populations[0]);
percentages[1] = percentageOfWorld2(populations[1]);
percentages[2] = percentageOfWorld2(populations[2]);
percentages[3] = percentageOfWorld2(populations[3]);

console.log(percentages)