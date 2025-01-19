let message = document.getElementById("display-message");

const diceSet = [
    {dice: 20, value: "d20-dice"},
    {dice: 12, value: "d12-dice"},
    {dice: 10, value: "d10-dice"},
    {dice: 8, value: "d8-dice"},
    {dice: 6, value: "d6-dice"}
]

// Function to assign a value into the html document
function diceResult(diceNum, resultRoll, status) {
    message.style.display = "block";
    message.style.animation = "text-animation 0.6s";
    message.innerText = "On a D" + diceNum + " you rolled " + resultRoll + ". " + status; 
}

// A debouncer to delay the call and only return the most recent response after a few millseconds
function debounce(func) {
    let timeout;
    return function(a, b, c) {
        clearTimeout(timeout);
        timeout = setTimeout(func, 400, a, b, c);
    };
}

// Loop through the array of dice set
for (let i = 0; i < diceSet.length; i++) {  
    document.getElementById(diceSet[i].value).addEventListener("click", () => {   
        let result = Math.ceil(Math.random(100)*diceSet[i].dice);
        let status; 
        message.style.display = "";
        message.style.animation = "";
        
        // Checks if the value of the dice is one of the current status
        if (result === diceSet[i].dice) {
            console.log("Critical Success")
            status = "Critical Success" 
        }
        else if (result > diceSet[i].dice / 2) {
            console.log("Success")
            status = "Success"
        }
        else if (result === 1) {
            console.log("Critical Failure")
            status = "Critical Failure"
        }
        else {
            console.log("Failure")
            status = "Failure"
        }

        // Calls the function each time the event listener is clicked with the debouncer
        diceResult = debounce(diceResult);
        diceResult(diceSet[i].dice, result, status)
    })
}

// NOTE UNIT TESTING

// for (let i = 1; i < 100; i++) {
//     let testResult = diceResult(i);
//     if (testResult > i || testResult < 1) throw Error("Invalid dice result "+ testResult +" for max "+ i);
// }