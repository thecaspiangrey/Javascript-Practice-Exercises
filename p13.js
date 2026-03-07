/*
Three added Characters.
Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

Write a function that returns the added character

You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Examples
string1 = "hello"
string2 = "aaahello"
=> 'a'

string1 = "abcde"
string2 = "2db2a2ec"
=> '2'

string1 = "aabbcc"
string2 = "aacccbbcc"
=> 'c'
                        */

// Solution:
//  we can sort the string by converting the string into array, then iterate over each element and match  the element in the smaller string, if it does not matches we can store in a new array(we can use filter which automatically returns each time, or something else).

function addedChar(s1, s2) {
  for (const element of s2) {
    if (!s1.includes(element)) {
      return element;
    }

    let count1 = [...s1].reduce(
      (acc, curr) => acc + (curr === element ? 1 : 0),
      0,
    );

    let count2 = [...s2].reduce(
      (acc, curr) => acc + (curr === element ? 1 : 0),
      0,
    );

    if (count2 - count1 === 3) {
      return element;
    }
  }
}
console.log(addedChar("aabbcc", "aacccbbcc"));
