// exercise 1
const x = 5;
const y = 2;
console.log(Math.max(x, y));

// exercise 2
const newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas");
} else {
    console.log("fuck Chihuahuas, I love cats");
}

// exercise 3
let userInput = prompt("Please type in a number");
if (userInput % 2) {
    console.log(`${userInput} is an odd number`)
}
else {
    console.log(`${userInput} is an even number`)
}

// exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

let usersStr = users[0];

for (let i = 1; i < users.length; i++) {
    usersStr += `, ${users[i]}`;
}

console.log(`${usersStr} and ${users.length} more are online`);