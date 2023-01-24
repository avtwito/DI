const sentence = "The movie is not bad, I like it";

const wordNot = sentence.search(/not/i);
const wordBad = sentence.search(/bad/i); //I've used this instead of indexOf in order for the search to be case insensitive


// another option: using java regular expressions
const obj = /bad/.exec(sentence);
document.getElementById("paragraph1").innerHTML = 
`Found ${obj[0]} in position ${obj.index} in the text: ${obj.input}`;



/**
 * A method to replace a substring at a range of indexes.
 * @param {Number} indexStart 
 * @param {Number} indexEnd 
 * @param {String} replacement 
 * @returns new modified String.
 */
String.prototype.replaceAt = function(indexStart, indexEnd, replacement) {
    return this.substring(0, indexStart) + replacement + this.substring(indexEnd)
}

if (wordNot < wordBad) {
    console.log(sentence.replaceAt(wordNot, wordBad + "bad".length, "good"));
}

