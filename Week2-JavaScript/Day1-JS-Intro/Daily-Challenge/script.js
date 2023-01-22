const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift(); // removes the first element

fruits.sort(); // sorts the array

fruits.push("Kiwi");
 
// here, task failes successfully. The filter function works,
// but I had to copy the modified array to a new array,
// because filter function doesn't modify the array itself, it returns a new one.
const newFruits = fruits.filter(item => item != "Apples");

// now I'll do the same thing with diferrent function that will modify the array itself
// even tho it's way less cool.
delete fruits[fruits.lastIndexOf("Apples")];
console.log(newFruits);
console.log(fruits);

// =============== Exercise 2 ================
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);