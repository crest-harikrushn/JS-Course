// function declaration
function fruit(name){
    console.log(name);
    return "Hello " + name; 
}


// function expression
let car = function(name){
    console.log(name);
    return "This is " + name; 
}

console.log(fruit("Apple"));
console.log(car("Audi"));


// we can call the function before it is declared but we cannot call it if it is used as an expression.