/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

function calcAverageHumanAge(ages) {
  let len;
  avg = ages
    .map((age) => {
      return age > 2 ? 16 + age * 4 : 2 * age;
    })
    .filter((age) => age >= 18)
    .reduce((sum, age, _, arr) => {
      len = arr.length;
      console.log("this: ", sum, age, (sum + age) / arr.length);
      return sum + age;
    }, 0);
  avg = avg / len;
  console.log(avg);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
