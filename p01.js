// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Take input from the user
const prompt = require("prompt-sync")()
let firStrInput = prompt("Enter the first string:");
let subStrInput = prompt("Enter the substring:");
// Validate the input
while(!firStrInput || firStrInput.trim() === ""){
    firStrInput = prompt("Please enter a valid first string:")
}
while(!firStrInput || firStrInput.trim() === ""){
    subStrInput = prompt("Please enter a valid substring:")
}
// let's switch the string as per length
if(subStrInput.length > firStrInput.length){
    let temp = firStrInput;
    firStrInput = subStrInput;
    subStrInput = temp;
}
// Check if it is a substring(This is the solution of the problem)
function solution(str, ending){
    let mainStr = str.split("").reverse();
    let secondStr = ending.split("").reverse();
    let counter = -1;
    for(let i =0; i < secondStr.length; i++){
        if(secondStr[i] == mainStr[i]){
            counter++;
            console.log(`counter: ${counter} and i is:${i}`)
        }
    }
    if(counter === secondStr.length - 1){
        return true;
    } else { 
        return false;
    }
}

console.log(solution(firStrInput, subStrInput));