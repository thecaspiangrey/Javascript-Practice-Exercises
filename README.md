# Javascript-Practice-Exercises
This is a repo of problems i solve while practicing Javascript. I solve problems mostly on codewars.
***
### P1 - Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
#### [(Solve the problem on codewars)](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript)

Examples:
````
Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
````
***
Solution:
````

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
````
````
Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false

Inputs:
"asdf" , "df"
Output:
true

Inputs:
"ef" , "abcdef"
Output:
true
````
### P2- "Multiples of 3 or 5". If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.Additionally, if the number is negative, return 0.
#### Note: If a number is a multiple of both 3 and 5, only count it once.

```
function solution(number){
//   first we will iterate through each number, then check if the number is a 
//   multiple of 3 or 5. If the number is a multiple of 3 then again we need to
//   check if it is a multiple of 5 too, then we can push or unshift it in the array.
//   We dont't need to check for 3 if it is a multiple of 5 only because we already 
//   check for the 3 first. Then after finishing the check we can sum the numbers inside
//   the array using the "reduce" method. 
  const arrayOfMultiples = [];
  for(let i = 0; i < number; i++){
    if(i%3 === 0 && i%5 === 0){
      arrayOfMultiples.push(i);
    }
    else if(i%3 === 0){
      arrayOfMultiples.push(i)
    } else if(i%5 === 0){
      arrayOfMultiples.push(i)
    }
  }

  const sum = arrayOfMultiples.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
  }, 0);
  
  return sum;
}
```
### P3- Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
```
Input:
Hey fellow warriors
Output:
Hey wollef sroirraw
Input:
This is a test 
Output:
This is a test 
Input:
This is another test
Output:
This is rehtona test"
```
**Solution:**
```
function spinWords(string){
const newArr = string.split(" ");

for(let i = 0; i < newArr.length; i++){
    if(newArr[i].length >= 5){
        let temp = newArr[i];
        let revEle = temp.split("").reverse().join("");
        newArr.splice(i, 1, revEle)
    } 
  }
    const finalStr = newArr.join(" ");
  return finalStr;
}
```

**Best Solution:**
```
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
```