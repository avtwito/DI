const form = document.getElementById("MyForm");

form.lastElementChild.addEventListener('click', calculateVolume);

const radius = form.querySelector('#radius');
const volume = form.querySelector('#volume');


function calculateVolume(eve) {
    eve.preventDefault();
    const volResult = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
    
    volume.value = volResult;

}