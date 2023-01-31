let timeout = setTimeout(function () {
    alert("Hello World");
}, 2000);

let para;
timeout = setTimeout(function () {
    para = document.createElement('p');
    para.textContent = "Hello World";
    document.getElementById("container").appendChild(para);

}, 2000);

let counter = 0;
let repeater;
repeater = setInterval(addNewPar, 2000);

function addNewPar() {
    document.getElementById("container").innerHTML += "<p>New paragraph</p>";
    counter++;
    if (counter === 5) {
        clear();
    }
}

let button = document.getElementsByTagName("button")[0];
button.addEventListener('click', clear);
function clear() {
    clearInterval(repeater);
}
