// ================Exercise 1================
const favoriteFood = "Seitan steak";
const favoriteMeal = "Dinner"
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesSentence = `${myWatchedSeries[0]}`;
for (let i = 1; i < myWatchedSeries.length; i++) {
    myWatchedSeriesSentence += `, ${myWatchedSeries[i]}`;
}
console.log(`I watched ${myWatchedSeries.length} series: ${myWatchedSeriesSentence}.`);


// ================Exercise 2================
myWatchedSeries[myWatchedSeries.lastIndexOf("the big bang theory")] = "friends";
myWatchedSeries.push("merlin");
myWatchedSeries.splice(0, 1, "sherlock");

console.log(myWatchedSeries[myWatchedSeries.lastIndexOf("money heist")][2]);

console.log(myWatchedSeries);

// ================Exercise 3================
const celsiusTemp = 32;

/**
 * A function to convert celsius to fahrenheit
 * @param {Number} celsius the celcius temperature
 * @returns {Number} the temperature in fahrenheit
 */
const frConvert = celsius => {
    return celsius / 5 * 9 + 32;
}

console.log(frConvert(celsiusTemp));

console.log("SEPARATOR");


// ================Exercise 4================

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55 both numbers
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23 both numbers
// Actual: 23

console.log(c);
// Prediction: undefined cuz I didn't define
// Actual: undefined

console.log(3 + 4 + '5');
// Prediction: '75'. It will start by adding 3 and 4
// and then covert 7 to string cuz we're trying to add string
// Actual: 75, as a number. Apperantly the type is determined
// by whichever is first in the arithmetic operation.

console.log("SEPARATOR");


// ================Exercise 5================
console.log(typeof(15));
// Prediction: Number
// Actual: number

console.log(typeof(5.5));
// Prediction: Number
// Actual: number

console.log(typeof(NaN));
// Prediction: Null
// Actual: number

console.log(typeof("hello"));
// Prediction: String
// Actual: string

console.log(typeof(true));
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2));
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s");
// Prediction: Error or hamburger
// Actual: NaN

console.log("1" + "3");
// Prediction: 13
// Actual: 13

console.log("1" - "3");
// Prediction: -2. cuz JS is weird. so it must be something weird too.
// Actual: -2. hehe I knew it

console.log("johnny" + 5);
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5);
// Prediction: Error
// Actual: NaN

console.log(99 * "hello");
// Prediction: "hello" concatended 99 times in a row
// Actual: NaN

console.log(1 != 1);
// Prediction: false
// Actual: false

console.log(1 == "1");
// Prediction: true. compares only value.
// Actual: true

console.log(1 === "1");
// Prediction: false. compares both value and type
// type is not equal
// Actual: false

console.log("SEPARATOR");


// ================Exercise 6================
console.log(5 + "34");
// Prediction: 39. 34 will be converted to int
// Actual: 534 (HMPF)

console.log(5 - "4");
// Prediction: 1. 4 will be converted to int.
// Actual: 1. WHY?!?! (because JS is dumb)

console.log(10 % 5);
// Prediction: 0. no remainder
// Actual: 0

console.log(5 % 10);
// Prediction: 5. 5 isn't a divider of 10 at all.
// Actual: 5

console.log("Java" + "Script");
// Prediction: "JavaScript". no space.
// Actual: JavaScript

console.log(" " + " ");
// Prediction: "  "
// Actual: Yeah, that thing

console.log(" " + 0);
// Prediction: " 0"
// Actual: same

console.log(true + true);
// Prediction: true. cuz true or true is true
// Actual: 2. well, it doesn't go with my "or" explaination.
// nut does fit my alternate suggestion below.

console.log(true + false);
// Prediction: true. cuz true or false is true.
// Alternate explanation - read next comment.
// Actual: 1. yeah, sounds right

console.log(false + true);
// Prediction: true. cuz false or true is stull true.
// Alternate way of thinking: the boolean values are converted to int.
// and 1 + 0 is 1.
// Actual: 1

console.log(false - true);
// Prediction: -1. same explanation
// Actual: -1

console.log(!true);
// Prediction: false. just !(not) true, is false.
// Actual: false

console.log(3 - 4);
// Prediction: -1. as simple as it is.
// Actual: -1

console.log("Bob" - "bill");
// Prediction: NaN
// Actual: NaN