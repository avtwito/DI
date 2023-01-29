const divPtr = document.body.firstElementChild;
console.log(divPtr);

const firstUlPtr = divPtr.nextElementSibling;
console.log(firstUlPtr);
firstUlPtr.lastElementChild.innerHTML = "Richard";

UlPtr = document.body.querySelectorAll(".list");
UlPtr[0].firstElementChild.innerHTML = "Avishay";
UlPtr[1].firstElementChild.innerHTML = "Avishay";

UlPtr[1].removeChild(UlPtr[1].children[1]);


// Bonus
UlPtr[0].classList.add('student-list');
UlPtr[1].classList.add('student-list');

UlPtr[0].classList.add('university', 'attendance');
