
const hobbies = [
    "Gaming", 
    "Running", 
    "Crafts", 
    "Reading", 
    "Art"
];

// A function to take the index of the array and re-value it with a new value and insert a name value
// function replaceNumber(index, name) {
//     hobbies[index] = name;
// }

// A function for people who doesn't want to add an index value and gives a random number equal to the arrays length
function replaceNumber(name) {
    let randGenerator = Math.floor(Math.random(1)*hobbies.length); hobbies[randGenerator] = name;
}

// replaceNumber(0, "Coding");
// replaceNumber(3, "Swimming");
// replaceNumber("Coding");
// replaceNumber("Swimming");

hobbies[0] = "Coding";
hobbies[3] = "Swimming";

hobbies.unshift("Parkour");
hobbies.push("Magic the Gathering");
// const popOutValue = hobbies.pop();

// console.log(popOutValue);
console.log(hobbies, hobbies.length);

// NOTE Module 1 Lab Exercise 5

// - For understanding more about arrays, try creating an array that has 5 values. DONE
// - Replace the value of the element at position 1 and 4.DONE
// - Add a new value to the beginning of the array. DONE
// - Remove the value at the end of the array DONE
// - Print the array to the console. DONE