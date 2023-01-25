// ================ Exercise 1 ===================

// Part 1
function infoAboutMe() {
    console.log("My cat's name is Lady and she's so silly");
}
infoAboutMe();

// Part 2
function infoAboutPerson(perrsonName, personAge, personFavoriteColor) {
    console.log(`Your name us ${perrsonName}, you are ${personAge}, your favorite color is ${personFavoriteColor}`);
}

// ================ Exercise 2 ===================
function calculateTip() {
    billAmount = prompt("please type in the bill amount");
    if(billAmount < 50) return billAmount*1.2;
    if(billAmount > 50 && billAmount < 200) return billAmount*1.15;
    if(billAmount > 200) return billAmount*1.1;
}
console.log(calculateTip());

// ================ Exercise 3 ===================
function isDivisiable(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0) {
            console.log(`${i} `);
            sum += i;
        }
    }
    return sum;
}
console.log(isDivisiable(prompt("please type in a divisor")));
// ================ Exercise 4 ===================
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let sum = 0;
    for (const iterator of shoppingList) {
        if (Object.hasOwnProperty.call(stock, iterator)) {
            sum += prices[iterator];
            stock[iterator] -= 1;
        }
    }
    return sum;
}
console.log(myBill());
// ================ Exercise 5 ===================
const changeDict = {
    0: 0.25,
    1: 0.1,
    2: 0.05,
    3: 0.01
}
function changeEnough(itemPrice, amountOfChange) {
    let sum = Number();
    for (let i = 0; i < amountOfChange.length; i++) {
        sum += amountOfChange[i] * changeDict[i];
    }
    return itemPrice <= sum;
}
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// ================ Exercise 6 ===================

function hotelCost(numOfNights) {
    return numOfNights * 140;
}

const destPrice = {
    London: 183,
    Paris: 220,
    Other: 300
}
function planeRideCost(destination) {
    if (destination in destPrice) {
        return destPrice[destination];
    }
    return destPrice.Other;
}

function rentalCarCost(daysOfRental) {
    if (daysOfRental > 10) {
        daysOfRental *= 0.95;
    }
    return daysOfRental * 40;
}

function totalVacationCost() {
    let sum = hotelCost((() => {let userInput; while (isNaN(userInput)) {userInput = parseInt(prompt("please type in number of nights"));} return userInput;})());
    sum += planeRideCost((() => {let userInput; while (/[a-z]+$/ig.test(userInput)) {userInput = prompt("please type in a destination - method is case sensitive!");} return userInput;})());
    sum += rentalCarCost((() => {let userInput; while (isNaN(userInput)) {userInput = parseInt(prompt("please type in number of days"));} return userInput;})());
    return sum;
}

console.log(`Vacation costs ${totalVacationCost()}$`);
