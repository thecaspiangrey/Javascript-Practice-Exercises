/*
Problem(8 kata):
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If a number is a multiple of both 3 and 5, only count it once. */



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

console.log(solution(10))

// Best solution
/*
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
                                              */