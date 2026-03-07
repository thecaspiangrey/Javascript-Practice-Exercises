/* 
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!                                        */


// To solve this, we take the input array, calculate the average of the scores in it, and then compare the average score with my socre. If the my score is greater than the average score then will return true, if it is less than the average score then will return false.

// function betterThanAverage(classPoints, yourPoints) {
//     const sumOfScores = classPoints.reduce((acc, curr) => {
//         return acc + curr;
//     })
//     const averageScore = sumOfScores/classPoints.length;
//     console.log(averageScore)
//     if(averageScore < yourPoints){
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(betterThanAverage([12, 13, 14, 11], 13));

// the short code
function betterThanAverage(classPoints, yourPoints){
    return  yourPoints > classPoints.reduce((acc,curr) => acc + curr)/classPoints.length? true : false
}