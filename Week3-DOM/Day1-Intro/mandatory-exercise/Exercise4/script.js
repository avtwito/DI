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
        alreadyRead: true
    }
];

const bookTable = document.createElement("TABLE");
let row = Array();
row[0] = bookTable.insertRow(0);
row[0].setAttribute('class', 'silly');
row[1] = bookTable.insertRow(1);
let i = 0;
for (const key in allBooks[0]) {
    if (Object.hasOwnProperty.call(allBooks[0], key)) {
        let addCell = row[0].insertCell(i);
        addCell.innerHTML = allBooks[0][key];
        i++;
    }
}

i = 0;
for (const key in allBooks[1]) {
    if (Object.hasOwnProperty.call(allBooks[0], key)) {
        let addCell = row[1].insertCell(i);
        addCell.innerHTML = allBooks[1][key];
        i++;
    }
}
document.getElementsByClassName("listBooks")[0].appendChild(bookTable);
