/*
Playing with digits. 
Description:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51                                                                

If it is the case we will return k(the number which we receive when we devide the sum by the n), if not return -1.

Note: n and p will always be strictly positive integers.                */

const PromptSync = require("prompt-sync");

/*
Solution:
To solve this problem, we can first change the number into string, then we can iterate through each char which is a digit, and perform the operation as given. We start from the first digit, we give the power value 'p', plus(+),  next digit, and we have to increase the power by 1 each time we move to the next digit,(so the power for second digit is 2). Like that we have to perform this operation using the loop for the total length of the number string. Then we have to devide the total sum by the number(n). If the remainder comes 0, then we return the remainder(which is considered 'k'), if not we have to return -1.                                                    */
const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the value of n:");
while (isNaN(n) || n.trim() === "" || n === "0" || !isFinite(n)) {
  n = prompt("Please enter a valid number value of n:");
}
n = Number(n); // Convert to number after validation

let p = prompt("Enter the value of p:");
while (isNaN(p) || p.trim() === "" || p === "0" || !isFinite(p)) {
  p = prompt("Please enter a valid number value of p:");
}
p = Number(p); // Convert to number after validation

console.log(`n=${n}\np=${p}`);

// function digPow(n, p){
//     n = n.toString();
//     let calculatedSum = 0;
//     for(let i = 0; i < n.length; i++){
//         let temp = Math.pow(n.charAt(i), p);
//         p++;
//         calculatedSum += temp;
//         console.log(temp, 'type= ', typeof temp)
//     }
//         n = Number(n)
//     calculatedSum = Number(calculatedSum)
//     if (calculatedSum%n === 0) {
//         return calculatedSum/n;
//     } else {
//         return -1
//     }
// }

// we can reduce this code by converting the number string into array
// function digPow(n, p) {
//   const digitArray = n.toString().split("");
//   let calculatedSum = 0;
//   for (let i = 0; i < digitArray.length; i++) {
//     let temp = digitArray[i] ** p;
//     calculatedSum += temp;
//     p++;
//     console.log(calculatedSum);
//   }
//   if (calculatedSum % n === 0) {
//     return calculatedSum / n;
//   } else {
//     return -1;
//   }
// }

// The shortest solution
function digPow(n, p){
    let sum = [...n.toString()].reduce((acc, curr, i)=>acc = acc + curr ** (p+i), 0);
    return sum%n === 0 ? sum/n : -1 ;
}

console.log(digPow(n, p));
