/*
BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// calculating the tip
let tip = [];

let calcTip = function (bill) {
  // calculating the tip
  t = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return t;
};

let totalValue = [];

for (let i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
  totalValue[i] = bill[i] + tip[i];
}

console.log(tip);
console.log(totalValue);

//=============================================================

let calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

let avg = calcAverage(totalValue);

console.log(avg);
