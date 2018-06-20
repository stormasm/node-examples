// https://blog.jacobclark.xyz/functional-composition-in-javascript

// Declare a function, take functions as arguments
/*
let compose = function(...funcs){

    // Return a new function which takes a value
    return function(value){

        // Reduce & iterate the initial argument spread (an array of functions)
        return funcs.reduce(function(val, function){

            // Take the function, call it, passing in the value and return the output
            return function(val)

        // Pass the value into the reduce to be passed into the function to call
        }, value);
    }
}
*/

let double = number => number * 2;
let triple = number => number * 3;
let quadruple = number => number * 4;
let compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value);

// Arguments are read right to left
// double -> triple -> quadruple
let crunchNumber = compose(
    double,
    triple,
    quadruple
);

let number = crunchNumber(5);

console.log(number);
