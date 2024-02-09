/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
let tip = 0;

let calcTip = function (bill) {
  // calculating the tip
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

console.log(calcTip(100));

let billarray = [125, 555, 44];

let tiparray = [
  calcTip(billarray[0]),
  calcTip(billarray[1]),
  calcTip(billarray[2]),
];
console.log(tiparray);

let totalarray = new Array(3);
totalarray[0] = billarray[0] + tiparray[0];
totalarray[1] = billarray[1] + tiparray[1];
totalarray[2] = billarray[2] + tiparray[2];
console.log(totalarray);
