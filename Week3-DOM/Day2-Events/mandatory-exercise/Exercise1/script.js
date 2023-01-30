const articlePtr = document.body.firstElementChild;
console.log(articlePtr.firstChild);

const lastPar = articlePtr.lastElementChild;
articlePtr.removeChild(lastPar);

const h2Ptr = document.querySelector('h2');
h2Ptr.onclick = function () {
    this.style.backgroundColor = "red";
}

const h3Ptr = h2Ptr.nextElementSibling;
h3Ptr.onclick = function () {
    this.style.display = "none";
}

const newButton = document.createElement('button');
const t = document.createTextNode("Bold");
newButton.appendChild(t);
newButton.onclick = function () {
    document.querySelector("*").style.fontWeight = "bold";
}
document.body.appendChild(newButton);

// bonuses
articlePtr.firstElementChild.addEventListener("mouseover", randomSize);

function randomSize() {
    document.querySelector("*").style.fontSize = `${Math.random() * 100}px`;
}

const p2Ptr = articlePtr.querySelectorAll('p')[1];
p2Ptr.addEventListener('mouseover', animation);

function animation() {
    p2Ptr.style.animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }
    ], {
        // timing options
        duration: 1000,
        iterations: Infinity
    });
}

