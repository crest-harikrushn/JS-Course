/*
Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

Reflect on what solution you like better for this task: the for loop or the while loop?
*/

let worldPopulation = 7900;

let percentageOfWorld2 = function (population) {
  return (population * 100) / worldPopulation;
};

const populations = [1212, 1652, 2432, 645];
console.log(populations);

let percentages2 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld2(populations[i]).toFixed(2);
  percentages2.push(perc);
  i++;
}

console.log(percentages2);
