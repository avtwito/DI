let position = 0;
let repeater;
function myMove() {
    repeater = setInterval(moveDiv, 1);
}

const animate = document.querySelector("#animate");
const container = document.querySelector("#container");

function moveDiv() {
    position++;
    animate.style.left = `${position}px`;
    if (position === 350) {
        clearInterval(repeater);
    }
}