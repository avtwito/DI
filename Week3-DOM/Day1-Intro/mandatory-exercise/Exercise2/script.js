const divPtr = document.querySelector("div");
divPtr.style.backgroundColor = "lightBlue";

const ulPtr = document.getElementsByTagName("ul");
ulPtr[0].firstElementChild.style.display = "none";
ulPtr[0].lastElementChild.style.border = "5px groove #4C0013";

document.querySelector("*").style.fontSize = "1.2rem";

// Bonus: 
if (divPtr.style.backgroundColor = "lightBlue") {
    alert(`Hello ${ulPtr[0].firstElementChild.textContent} and ${ulPtr[0].lastElementChild.textContent}`)
}