const allBooks = [
    {
        title: "Percy Jackson",
        author: "Rick Riordan",
        image: "percy.jpg",
        alreadyRead: true
    },
    {
        title: "Harry Potter",
        author: "Oh nawwww",
        image: "gay-dumbledore.avif",
        alreadyRead: false
    }
];

const bookTable = document.createElement("TABLE");
let row = Array();
row[0] = bookTable.insertRow(0);
row[0].setAttribute('class', 'silly');
row[1] = bookTable.insertRow(1);
let addCell;
for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 4; i++) {
        addCell = row[j].insertCell(i);
        if (i < 2) {
            addCell.innerHTML = Object.values(allBooks[j])[i];
        }
        else if (i === 2) {
            const imgElement = document.createElement('img');
            imgElement.src = Object.values(allBooks[j])[i];
            console.log(imgElement);
            addCell.appendChild(imgElement)
        }
        else {
            if (Object.values(allBooks[j])[i]) {
                row[j].style.backgroundColor = "#8A0013";
            }
        }
    }
}

document.getElementsByClassName("listBooks")[0].appendChild(bookTable);
