// ============ Exercise 1 ==========
const people = ["Greg", "Mary", "Devon", "James"];

// part one - review about arrays
people.shift(); // removed first element

people.pop(); //popped James
people.push("Jason"); //pushed Jason
// other option
people[people.length - 1] = "Jason";

people.push("Avishay");

console.log(people.indexOf("Mary"));

const copyArray = people.slice(1, 3);
console.log(copyArray);

console.log(people.indexOf(/foo/i)); // will gove -1 cuz foo is not in the array

const last = people.pop(); // stores the last element of the array but removes it
people.push(last); // revert changes
console.log(last);

// other option of getting last element of an array
console.log(people[people.length - 1]);


// part 2 - loops
people.forEach(element => console.log(element));

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (i == people.indexOf(/jason/i)) break;
}


// ============ Exercise 2 ===========
