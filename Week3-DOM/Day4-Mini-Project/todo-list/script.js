const tasks = [];
const ulPtr = document.createElement('ul');
ulPtr.classList.add("fa-ul");
document.querySelector(".listTasks").appendChild(ulPtr);

function addTask(event) {
    event.preventDefault();
    const userInput = document.getElementsByName("task")[0].value;
    if (userInput !== '') {
        tasks.push(userInput);
        const iconsSpan = document.createElement('iconsSpan'); // iconsSpan
        iconsSpan.classList.add("fa-li"); // iconsSpan.fa-li
        const xMark = document.createElement('i');// i
        xMark.classList.add("fa-solid", "fa-xmark");// i.fa-solid fa-xmark
        iconsSpan.appendChild(xMark); // iconsSpan.fa-li << i.fa-solid fa-xmark
        const liPtr = document.createElement('li'); // li
        liPtr.appendChild(iconsSpan); // li << iconsSpan.fa-li << i.fa-solid fa-xmark
        const vMark = document.createElement('i');
        vMark.classList.add("fa-regular", "fa-square");
        iconsSpan.appendChild(vMark);
        const inputNode = document.createTextNode(userInput);
        liPtr.appendChild(inputNode);
        ulPtr.appendChild(liPtr);

        /**
         * @todo: stop being lazy and write it down propperly
         */
        document.querySelector(".fa-square").addEventListener("click", function () {
            vMark.classList.replace("fa-regular", "fa-solid");
            vMark.classList.replace("fa-square", "fa-check-square");
            liPtr.style.textDecoration = "line-through";

            document.querySelector(".fa-check-square").addEventListener("click", function () {
                vMark.classList.replace("fa-solid", "fa-regular");
                vMark.classList.replace("fa-check-square", "fa-square");
                liPtr.style.textDecoration = "none";
            });
        });

        xMark.addEventListener("click", function () {
            liPtr.style.display = "none";
        });

        xMark.style.color = "white";
        xMark.style.backgroundColor = "red";
        xMark.style.padding = "2px";


    }
}