// ## Creation Part

// - Pallet section
//     - array of 21 colors
const colorsArray = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "blueviolet",
    "brown",
    "cadetblue",
    "charteuse",
    "chocolate"
]
let color;
const leftSection = document.getElementById('left');
const rightSection = document.getElementById('right');
//     - loop through the array of color, and for each color create a div
//     - for each div add background color
//     - make each div clickable by adding an eventlistener of `click` that will call the function `retrieveColor`
//     (you could also give a value attribute to each div)
//     - append them the section
function createColorBox () {
    let colorDiv;
    let descriptionSpan;
    for (const color of colorsArray) {
        colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        descriptionSpan = document.createElement('span');
        descriptionSpan.innerText = color;
        descriptionSpan.classList.add("tooltiptext");
        colorDiv.appendChild(descriptionSpan);
        colorDiv.classList.add("tooltip");
        colorDiv.addEventListener("click", retrieveColor);

        leftSection.appendChild(colorDiv);

    }
}
createColorBox();


// - Grid section
//     - loop a lot of times (24 rows*60 colums) and create div
//     - make each div clickable by adding an eventlistener of `click` that will call the function `addColor`
//     - make each div mouseover, mousedown, mouseup by adding an eventlistener of `mouseover, mousedown, mouseup`
//     - append them to the 2nd section
function createGrid() {
    let gridDiv;
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            gridDiv = document.createElement('div');
            gridDiv.addEventListener("click", addColor);
            gridDiv.addEventListener("mouseover", mouseOver);
            gridDiv.addEventListener("mousedown", mouseDown);
            gridDiv.addEventListener("mouseup", mouseUp);

            rightSection.appendChild(gridDiv);

        }
    }
}

createGrid();


// ## retrieveColor
// - evt target and find the background color
// - store the color in a variable
function retrieveColor(eve) {
    color = eve.target.style.backgroundColor;
}

// ## addColor
// - use the variable that stores the color, to add the color as a background color
// of the div I click
function addColor(eve) {
    eve.target.style.backgroundColor = color;

}

let checkIfMouseDown = false;
// ## coloring
// Events
//     mousedown 
function mouseDown() {
    checkIfMouseDown = true;
}
//     mouseover
function mouseOver(eve) {
    if (checkIfMouseDown) {
        addColor(eve);
    }
}

//     mouseup
function mouseUp() {
    checkIfMouseDown = false;
}

// variable flag checkIfMouseDown will start as false, as soon as the mouse is down
// this variable will change to true
// as soon as the mouse is up this variable will change to false

// In the mouseover, we check, if the variable is true we can color
// if not we don't

// ## ClearButton
// add an event listener to the button that when clicked on, loop over the grid to hange the background color to white
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearScreen);
const divs = document.querySelectorAll("#right > div");
function clearScreen() {
    for (const div of divs) {
        div.style.backgroundColor = "white";
    }
}
