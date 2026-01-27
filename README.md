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
***
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

***
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

***
### P4- Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. 
**Your task is to write a function `maskify`, which changes all but the last four characters into '#'.**

**Examples (input --> output):**
```
Input:
"4556364607935616"
Output:
"############5616"

Input:
"64607935616"
Output:
"#######5616"

Input:
"1"
Output:
"1"

Input:
""
Ouput:
""

// "What was the name of your first pet?"

Input:
"Skippy"
Output:
"##ippy"

Input:
"Nananananananananananananananana Batman!"
Output:
"####################################man!"
```
**Solution:**
```
function maskify(str) {
  let finalStr = "";
  if (str.length > 4) {
    for (let i = 0; i < str.length - 4; i++) {
      finalStr = finalStr + "#";
    }
    finalStr = finalStr + str.substring(str.length - 4);
    return finalStr;
  } else {
    return str;
  }
}
```
**Best solution(My opinion):**
```
function maskify(cc){ 
  return cc.slice(-4).padStart(cc.length, '#')
}
```
**Note:**

_string.padStart(targetLength, padString)_
* **targetLength** is the total number for the padding to be added on the start of the string.
* **padString** is the string inside a quote('') which we want to add(pad) at the start of the string.

***
### P5-A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). 
**Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.**

**Solution:**
```
function isPangram(string){
 const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
 const loweredCaseString = string.toLowerCase();
return  alphabet.every((letter)=>{
    return loweredCaseString.includes(letter);
})
}
```
**Note-**

**_array.every(callback(element, index, array), thisArg):_**  
The every() method iterates over each array element, returning true if the provided function returns true for all elements. It returns false if the function returns false for any element. This method does not operate on empty elements and leaves the original array unchanged.

**Parameters** <br>
* **callback:** A function to test each element of the array. It takes three arguments:
* **element:** The current element being processed in the array.
* **index (optional):** The index of the current element being processed.
* **array (optional):** The array every() was called upon.
* **thisArg (optional):** An object to use this when executing the callback function.

**_Array.prototype.includes():_** <br>
The JavaScript includes() method is a built-in function used to determine if an array contains a specific element or if a string contains a specific substring. It performs a case-sensitive search and returns a boolean value (true or false). 
* **Array.prototype.includes()** This method checks for the presence of a value within an array.
  * **Syntax:** `array.includes(searchValue, fromIndex)`
  * **Parameters:** 
    * **searchValue (Required):** The value to search for.
    * **fromIndex (Optional):** The index at which to start searching (defaults to 0). Negative indices count backward from the end of the array.
    * **Return Value:** `true` if the `searchValue` is found, otherwise `false`.  
    
<br>
**Ex:**

```
const fruits = ["apple", "banana", "mango"];

// Check if "banana" is in the array
console.log(fruits.includes("banana")); // Output: true

// Check if "grape" is in the array
console.log(fruits.includes("grape")); // Output: false

// Check if "apple" is in the array, starting search from index 1
console.log(fruits.includes("apple", 1)); // Output: false (apple is at index 0)
```
**_String.prototype.includes()_** <br>
This method checks if one string can be found inside another string. <br>
* **Syntax:** `string.includes(searchString, position)`
* **Parameters:** 
  * **searchString (Required):** The string to be searched for.
  * **position (Optional):** The position within the string to begin the search (defaults to 0).
  * **Return Value:** `true` if the `searchString` is found, otherwise `false`. 
<br>

**Ex:**
```
const sentence = "The quick brown fox jumps over the lazy dog.";

// Check if the substring "fox" is in the sentence
console.log(sentence.includes("fox")); // Output: true

// Check for a case-mismatched string
console.log(sentence.includes("Fox")); // Output: false (case-sensitive)

// Check for "jumps" starting from index 20
console.log(sentence.includes("jumps", 20)); // Output: false ("jumps" is at index 16)
```

***
### P6-