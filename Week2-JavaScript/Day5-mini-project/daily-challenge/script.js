function playTheGame() {
    if (!(confirm("Would you like to play the game?\nEither OK or Cancel."))) {
        alert("OK, No problem (in a passive-aggresive tone)");
    }
    bottleCounter = prompt("Please type-in a number of beers");
    /**
     * @todo: check validity
     */
    let song = `We start the song at ${bottleCounter} bottles\n`;
    let subtracter = 1;
    while (bottleCounter - subtracter >= 0) {
        song += `${bottleCounter} bottles of beer on the wall\n${bottleCounter} bottles of beer\n`;
        if (subtracter === 1) {
            song += `Take ${subtracter} down, pass it around\n`;
        }
        else {
            song += `Take ${subtracter} down, pass them around\n`;
        }
        bottleCounter -= subtracter;
        subtracter += 1;
        if (bottleCounter === 1) {
            song += `${bottleCounter} bottle of beer on the wall\n`;
        }
        else {
            song += `${bottleCounter} bottles of beer on the wall\n`;
        }
    }
    typeWriter(song);
}


function typeWriter(text) {
    const outputDiv = document.getElementById("typing-container");
    const splitted = text.split(`\n`);
    splitted.forEach(function () {
        const p = document.createElement('p');
        outputDiv.appendChild(p);
    });

    const paras = outputDiv.querySelectorAll('p');

    let i = 0;
    let currentPara = 0;
    const intervalID = setInterval(function () {
        if (i === splitted[currentPara].length) {
            currentPara++;
            i = 0;
            if (currentPara === splitted.length) {
                clearInterval(intervalID);
            }
            // this condition is added in order to skip empty lines
            if (splitted[currentPara].length === 0) return;
        }
        
        paras[currentPara].innerHTML += splitted[currentPara][i];
        i++;

    }, 50);
}


// $('#typing-container').stop().animate({
//     scrollTop: $("#typing-container")[0].scrollHeight
//   }, 15000);
  
//   $('#typing-container').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e) {
//     if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
//       $('#typing-container').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
//     }
//   });