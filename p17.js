/*
String subpattern recognition III
Similar to the previous kata, but this time you need to operate with shuffled strings to identify if they are composed repeating a subpattern

Since there is no deterministic way to tell which pattern was really the original one among all the possible permutations of a fitting subpattern, return a subpattern with sorted characters, otherwise return the base string with sorted characters (you might consider this case as an edge case, with the subpattern being repeated only once and thus equalling the original input string).

For example:

"a" ==> "a"; // no repeated pattern, just one character
"aaaa" ==> "a"; // just one character repeated
"abcd" ==> "abcd"; // base pattern equals the string itself, no repetitions
"babababababababa" ==> "ab"; // remember to return the base string sorted
"bbabbaaabbaaaabb" ==> "ab"; // same as above, just shuffled
*/

// Solution:To solve this problem we need to create an array of uniques chars, from set which we create from the string, then find the frequency of each unique characters, then find the GCD of the frequencies. If the GCD is greater than 2 then there exist subpattern. We then construct the subpattern by dividing the frequencies by GCD and adding the chars for the same number of times as the quetient for each char, and return the subpattern. If the GCD is less than 2, that means no subpattern exists, and we returnt he string by sorting it.

// function hasSubpattern(string) {
//   if (string.length === 1) {
//     return string;
//   }
//   //   first create an array of unique characters and an array of their frequencies
//   const uniqueChars = [...new Set(string)].sort();
//   const freq = uniqueChars.map((ele) => {
//     let count = 0;
//     [...string].forEach((char) => {
//       if (char === ele) {
//         count++;
//       }
//     });
//     return count;
//   });

//   // find the GCD, formula [(a%b=c),(b%c=d).....]
//   let a = freq[0];
//   for (let i = 1; i < freq.length; i++) {
//     let b = freq[i];
//     while (b !== 0) {
//       let temp = b;
//       let c = a % b;
//       a = temp;
//       b = c;
//     }
//   }
//   let gcd = a;
//   if (gcd < 2) {
//     return [...string].sort().join("");
//   } else if (gcd >= 2) {
//     const charFreqInSubPattern = freq.map((ele) => ele / gcd);
//     return charFreqInSubPattern
//       .map((ele, index) => {
//         let tempStr = [];
//         for (let i = 0; i < ele; i++) {
//           tempStr.push(uniqueChars[index]);
//         }
//         return tempStr;
//       })
//       .flat(Infinity)
//       .join("");
//   }
// }


function hasSubpattern(string) {
  if (string.length === 1) {
    return string;
  }
  //   first create an array of unique characters and an array of their frequencies
  const uniqueChars = [...new Set(string)].sort();
  const freqMap = {};
  for(const ch of string){
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }
  const freq = Object.values(freqMap);

  // find the GCD, formula [(a%b=c),(b%c=d).....]
  let a = freq[0];
  for (let i = 1; i < freq.length; i++) {
    let b = freq[i];
    while (b !== 0) {
      let temp = b;
      let c = a % b;
      a = temp;
      b = c;
    }
  }
  let gcd = a;
  if (gcd < 2) {
    return [...string].sort().join("");
  } else if (gcd >= 2) {
    const charFreqInSubPattern = freq.map((ele) => ele / gcd);
    return charFreqInSubPattern
      .map((ele, index) => {
        let tempStr = [];
        for (let i = 0; i < ele; i++) {
          tempStr.push(uniqueChars[index]);
        }
        return tempStr;
      })
      .flat(Infinity)
      .join("");
  }
}

console.log(hasSubpattern("abcd"));
