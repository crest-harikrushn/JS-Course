/*
Use a switch statement to log the following string for the given language:
chinese or mandarin: 'MOST number of native speakers!';
spanish: '2nd place in number of native speakers';
english: '3rd place';
hindi: 'Number 4';
arabic: '5th most spoken language';
for all other simply log 'Great language too :D'.
*/

let language = `English`

switch(language){
    case "Chinese": 
    case "Mandarian":
        console.log(`MOST number of native speakers!`)
        break;

    case "Spanish":
        console.log(`2nd place in number of native speakers`)
        break;
    
    case "English":
        console.log(`3rd place`)
        break;

    case "Hindi":
        console.log(`Number 4`)
        break;

    case "arabic":
        console.log(`5th most spoken language`)
        break;

    default:
        console.log(`Great language too`)
        break;
}