/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

// BMI = mass / (height * height)
let massMark = 1.5;
let heightMark = 80;
let massJohn = 1.6;
let heightJohn = 90;

let BMIJohn = massJohn / (heightJohn * heightJohn);
let BMIMark = massMark / (heightMark * heightMark);

console.log(BMIJohn);
console.log(BMIMark);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

console.log("Hello new");
