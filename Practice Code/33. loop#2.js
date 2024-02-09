/*
Let's bring back the populations array from a previous assignment.

Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.
*/

let worldPopulation = 7900;

let percentageOfWorld2 = function (population) {
  return (population * 100) / worldPopulation;
};

const populations = [1212, 1652, 2432, 645];
console.log(populations);

let percentages2 = [];

for (i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld2(populations[i]).toFixed(2));
}

console.log(percentages2);
