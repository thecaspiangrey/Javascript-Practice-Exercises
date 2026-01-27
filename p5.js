/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.          */

/*
we can solve this problem by checking if each char of alphabet is present in the the given string. First we will convert the input string to lower or upper case(whatever case we have stored the alphabet in the array), then we will itereate through each char of alphabet. If all the char of alphabet are present in the string, we will return as true, else we will return as false                                      */

function isPangram(string){
 const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
 const loweredCaseString = string.toLowerCase();
return  alphabet.every((letter)=>{
    return loweredCaseString.includes(letter); //this is explicit return
})
}

console.log(isPangram("HEY my nmae is kumar"))