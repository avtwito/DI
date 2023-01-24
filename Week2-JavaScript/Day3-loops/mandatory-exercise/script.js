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
const colors = ["blue", "red", "yellow", "green", "purple"];
for (let i = 0, color; (color = colors[i]) && (i < colors.length); i++) {
    console.log(`My #${i + 1} choice is ${color}`);
}

// doing the same thing using the right suffix of each number
const suffixes = {
    1: "st",
    2: "nd",
    3: "th"
};

for (let i = 1, color; (color = colors[i - 1]) && (i <= colors.length); i++) {
    if (i < 3) {
        console.log(`My ${i}${suffixes[i]} choice is `);
    }
}