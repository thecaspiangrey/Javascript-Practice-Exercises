/*
String subpattern recognition II
Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as the repetition of one subpattern.

This time there are two small changes:

if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.
For example:

"a"    --> false //no repeated shorter sub-pattern, just one character
"aaaa" --> true  //just one character repeated
"abcd" --> false //no repetitions
"babababababababa" --> true //repeated "ba"
"bbabbaaabbaaaabb" --> true //same as above, just shuffled
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

// Solution: To solve this, first we need to find the frequency of each character in the string(as there is no condition for the string characters to be in the order), then we will find the GCD of the frequency of each character. The GCD value will be the total number of the subpattern repetation.
function hasSubpattern(string){
    // to find the frequency of each char in the string, first we need to find all the unique char in the string. We can create a new set from the string, then convert it into array using spread operator, then iterate through each element to count the freaquency in the original string. store all the numbers in an array.
    const uniqueChar = new Set(string);
    const charFrequency = [...uniqueChar].map((uniqueChar)=>{
        let count = 0;
        [...string].forEach((char)=>{
            if(char === uniqueChar){count++}
        })
        return count
    })
    console.log(uniqueChar, charFrequency);



//  then find the gcd and return the result. The result of the GCD will be the total number of possible subpattern in the original string.
    const gcd = ((a, b)=>{
        // using Euclidean algorithm: gcd(a,b) = gcd(b, a%b)
        while(b !== 0){
            temp = b
            b = a%b
            a = temp
        }
        return a;
    })

    let result = charFrequency[0]
    for(let i = 1; i < charFrequency.length; i++){
       result = gcd(result, charFrequency[i])
    }

    if(result > 1){
        return true
    } else {
        return false
    }

}

console.log(hasSubpattern("abcd"))