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
        console.log(`My ${i}${suffixes[i]} choice is ${color}`);
    }
    if (i >= 3) {
        console.log(`My ${i}${suffixes[3]} choice is ${color}`);
    }
}




// ================ Exercise 3 ===============
let userInput;
do {
    userInput = prompt("Please type-in a number");
}
while (!(isNaN(userInput)) && (userInput < 10));


// ================ Exercise 4 ================
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
for (let i = 0; i < Object.keys(building.numberOfAptByFloor).length; i+=2) {
    console.log(`In floor ${i + 1} there are ${Object.values(building.numberOfAptByFloor)[i]} floors`);
}

console.log(`Name: ${building.nameOfTenants[1]} number of rooms: 
${building.numberOfRoomsAndRent[Object.keys(building.numberOfRoomsAndRent)
    .find(key => key.toLocaleLowerCase() === building.nameOfTenants[1].toLocaleLowerCase())][0]}`);

if (building.numberOfRoomsAndRent.sarah[1]
    + building.numberOfRoomsAndRent.david[1]
    > building.numberOfRoomsAndRent.dan[1]) {
        building.numberOfRoomsAndRent.dan[1] = 1200;
}


// =============== Exercise 5 ================
// Create an object called family with a few key value pairs.
const family = {
    abba : 9,
    imma: 4,
    savta: 5
};
console.log(family);
// Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key);
}
// Using a for in loop, console.log the values of the object.
for (const key in family) {
    if (Object.hasOwnProperty.call(family, key)) {
        console.log(family[key]);
    }
}

// ============== Exercise 6 ==================
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for (const key in details) {
    if (Object.hasOwnProperty.call(details, key)) {
        console.log(details[key]);
        
    }
}

// ============= Exercise 7 ===================
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Console.log the name of their secret society. The output should be “ABJKPS”
let societyName = String();
names.sort();
for (const name of names) {
    societyName += name[0];
}
console.log(societyName);