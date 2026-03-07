/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
                                                        */

/*
To solve this problem, we will first remove the quote("") from the string from the start and from the end, then we can check the length of the input string first, if it is more than 4 then we can use the ".substring()" method to cut the laset four characters and store in a variable, then we can create a string of the length of "total length - 4" of masking char "#". Then we can concatenate both the string, the mask string which we generate and the last 4 digit string which we stored. Finally we can return the string with mask.                                                       */

// First let's write the solution considering we don't need to remove the quote.
// function maskify(str) {
//   let finalStr = "";
//   if (str.length > 4) {
//     for (let i = 0; i < str.length - 4; i++) {
//       finalStr = finalStr + "#";
//     }
//     finalStr = finalStr + str.substring(str.length - 4);
//     return finalStr;
//   } else {
//     return str;
//   }
// }
console.log(maskify("4556364607935616"));

// we don't need to remove the quote as it is not from the input string.

// Best solution as per me
function maskify(cc){ 
  return cc.slice(-4).padStart(cc.length, '#')
}