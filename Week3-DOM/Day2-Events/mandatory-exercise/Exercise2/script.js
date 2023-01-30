const form = document.body.firstElementChild;
console.log(form);
form.lastElementChild.addEventListener("click", disableRefresh);

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

const fnameByName = document.getElementsByName("fname")[0];
const lnameByName = document.getElementsByName("lname")[0];

function disableRefresh (eve) {
    eve.preventDefault();
    const ulElement = document.createElement('ul');
    ulElement.setAttribute('class', 'usersAnswer');
    const fLi = document.createElement('li');
    fLi.innerHTML = fname.value;
    ulElement.appendChild(fLi);
    const lLi = document.createElement('li');
    lLi.innerHTML = lname.value;
    ulElement.appendChild(lLi);
    document.body.appendChild(ulElement);
}