/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
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
