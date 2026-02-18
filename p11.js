/*
Pete, the baker. 
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});         */

/*
To solve this we can take both the inputs; recipe and the available ingredients. Then first we will make sure that available ingredients contains by matching the ingredients name in both- the recipe and the available ingredients, this will save the time. If the available ingredients have all the required ingredients which are in the recipe, then we can devide the amount of available ingredient by the amount of recipe ingredient one by one; and then return the lowest number from all the division result. As the lowest number is the minimum possible cake which can be made using the available ingredients.        */

// Solution:

// function cakes(recipe, available) {
//   const recipeKeys = [...Object.keys(recipe)];
//   const availableKeys = [...Object.keys(available)];
//   console.log(recipeKeys, availableKeys);
//   if (recipeKeys.every((key) => availableKeys.includes(key))) {
//     const possibleCake = [];
//     recipeKeys.forEach((key) => {
//       possibleCake.push(Math.floor(available[key]/recipe[key]))
//     });
//     console.log(possibleCake)
//     return possibleCake.reduce((a,b)=> Math.min(a,b));
//   } else {
//     return 0;
//   }
// }

// Best optimized solution
function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map(ingredient => 
      Math.floor((available[ingredient] || 0) / recipe[ingredient])
    )
  );
}


console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
  ),
);
