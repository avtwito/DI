const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("button");
submit.setAttribute('type', 'submit');
submit.setAttribute('name', 'form');
submit.innerHTML = 'submit';
submit.addEventListener('click', function (eve) {
    eve.preventDefault();
})
input.setAttribute('name', 'form');
input.setAttribute('type', 'text');
let text;

// input.setAttribute('onkeyup', 'myFunction(event)');
// another option:
// input.onkeyup = myFunction();
input.addEventListener("keyup", myFunction);
form.appendChild(input);
form.appendChild(submit);
const outputPara = document.createElement('p');
document.body.appendChild(form);
document.body.appendChild(outputPara);

function myFunction(event) {
    if (event.keyCode < 65 || event.keyCode > 90) {
        input.style.color = "red";
        outputPara.textContent = `cannot type ${event.key}`;
        text = input.value;
        input.value = text.substring(0, text.length - 1);
        input.style.color = "black";
    }
    else {
        outputPara.textContent = '';
        input.style.color = "green";
    }
}
