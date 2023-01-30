let allBoldItems = Array();

/**
 * for-in provides access to the object keys,
 * wereas the for-of provides access to the values of those keys
 */
/**
 * what's interesting is, when I tried to use the for-in in the highlight function,
 * the key was only an index while the for-of function gave me the actual object,
 * as opposed to what said before.
 */


/**
 * this function should collect all the bold items
 * inside the paragraph and assign them to the allBoldItems variable
 */
function getBold_items() {
    const strongItems = document.body.getElementsByTagName('strong');
    for (const item of strongItems) {
        allBoldItems.push(item)
    }
}

getBold_items();

/**
 * this function changes the color of all the bold text to blue
 */
function highlight() {
    for (const key of allBoldItems) {
        key.style.color = "blue";
    }
}


function return_normal() {
    for (const key of allBoldItems) {
        key.style.color = "black";
    }
}

const para = document.body.firstElementChild;
para.addEventListener("mouseover", highlight);
para.addEventListener("mouseout", return_normal);
