/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
                    */
                   
/*
Solution:
To solve this problem, we can split the input by space(means wherever there is an space, we will split the word from there), and store in an array. Then we can use "for each" method to check the length of the word and reverse it if the length of the word is equal to 5 or grater than 5, and store in the array(we can use the "Map()" method to directly modify the word and store in the same array). Then join the words together and return the output.       */

function spinWords(string){
const newArr = string.split(" ");
// console.log(newArr);

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
console.log(spinWords('Hey fellow warriors'));
