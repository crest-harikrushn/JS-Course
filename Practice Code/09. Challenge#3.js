/*
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

// Defining test variables
const DT1 = 96;
const DT2 = 108;
const DT3 = 89;

const KT1 = 88;
const KT2 = 91;
const KT3 = 110;


const scoreDolphins = (DT1 + DT2 + DT3)/3;
const scoreKoalas = (KT1 + KT2 + KT3)/3;

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy")
}else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy" )
}else {
    console.log("Both win the trophy")
}

/*
Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/

if(scoreDolphins < 100 && scoreKoalas < 100 ){
    console.log("requirement for a minimum score of 100")
}else{
    if(scoreDolphins > scoreKoalas){
        console.log("Dolphins win the trophy")
    }else if(scoreDolphins < scoreKoalas){
        console.log("Koalas win the trophy" )
    }else {
        console.log("Draw")
    }
}
