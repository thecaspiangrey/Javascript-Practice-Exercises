/*
String subpattern recognition I
In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/
// Solution:To solve this problem, we need to find out that which subpattern creates the full string by repeating.
function hasSubpattern(string){
    if(string.length === 1){return false};
    for( let i = 1; i <= string.length/2; i++){
        const subPattern = string.slice(0, i);
        if(subPattern.repeat(string.length/i) === string){
            return true
        }
    }
    return false;
}



// function hasSubpattern(string){
//     const doubled = string + string;
//     const trimmed = doubled.slice(1, doubled.length - 1);
//     return trimmed.includes(string);
// }

console.log(hasSubpattern("ababababa"))