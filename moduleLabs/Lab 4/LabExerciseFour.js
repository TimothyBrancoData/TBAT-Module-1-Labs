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
    if (typeof name !== "string") {
        return "Error: Invalid input";
    }
    
    // return "Hello " + name;
    return `Hello ${name}`;
}

// NOTE Logging / Calling

console.log(add(5,5));
console.log(subtract(5,5));
console.log(multiply(5,5));
console.log(divide(5,5));
console.log(getName("greg"));

// NOTE Testing

console.log(divide(5,0));
console.log(divide(5,-0));
console.log(getName(5));