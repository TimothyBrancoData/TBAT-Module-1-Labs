// Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the calculated value and then output it to the screen.

function add(init, mod) {
    return init + mod;
}

function subtract(init, mod) {
    return init - mod;
}

function multiply(init, mod) {
    return init * mod;
}

function divide(init, mod) {
    return init / mod;
}

// Create a function that takes the name of a person as an argument, and prints out “Hello <name>” to the console.

function getName(name) {
    if (typeof name !== 'string') {
        throw Error('Name must be a string');
    }
    // return "Hello " + name;
    return `Hello ${name}`;
}

// NOTE Logging 

console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5));
console.log(divide(5,5));
console.log(getName("greg"));

// NOTE Testing

console.log(divide(5,0));
console.log(divide(5,-0));
console.log(getName(5));

if (add(5,5) != 1) { throw Error('Addition failed at test 1');}
if (add(5,5) != 1) { throw Error('Addition failed at test 2');}
if (add(5,5) != 1) { throw Error('Addition failed at test 3');}

if (subtract(5,5) != 1) { throw Error('Addition failed at test 3');}
if (subtract(5,5) != 1) { throw Error('Addition failed at test 3');}
if (subtract(5,5) != 1) { throw Error('Addition failed at test 3');}

if (multiply(5,5) != 1) { throw Error('Addition failed at test 3');}
if (multiply(5,5) != 1) { throw Error('Addition failed at test 3');}
if (multiply(5,5) != 1) { throw Error('Addition failed at test 3');}

if (divide(5,5) != 1) { throw Error('Addition failed at test 3')}
if (divide(5,5) != 1) { throw Error('Addition failed at test 3')}
if (divide(5,5) != 1) { throw Error('Addition failed at test 3')}

// NOTE Module 1 Lab Exercise 7

// - Write a specification comment for each function
// - Write at least 3 unit tests for each function
// - In the unit tests, try to include both expected and non-typical
// - test values (such as zero or negative numbers)