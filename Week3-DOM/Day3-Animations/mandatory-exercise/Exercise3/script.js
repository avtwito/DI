const draggableElement = document.querySelector("#box");

draggableElement.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", draggableElement.id);
});

for (const target of document.querySelectorAll("#target")) {
    target.addEventListener("dragover", e => {
        e.preventDefault();
        target.classList.add("drop-zone--over");
    });

    target.addEventListener("dragleave", e => {
        target.classList.remove("drop-zone--over");
    });

    target.addEventListener("drop", e => {
        e.preventDefault();

        const droppedElementId = e.dataTransfer.getData("text/plain");
        const droppedElement = document.getElementById(droppedElementId);
        
        target.appendChild(droppedElement);
        target.classList.remove("drop-zone--over");

    });

}