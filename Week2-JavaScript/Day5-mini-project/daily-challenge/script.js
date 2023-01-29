function playTheGame() {
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
    playSong();
    typeWriter(song);
}


function typeWriter(text) {
    // const outputDiv = document.getElementById("typing-container");
    const outputDiv = document.createElement('div');
    outputDiv.setAttribute('id', 'typing-container')
    document.body.appendChild(outputDiv);
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
            // if (splitted[currentPara].length === 0) return;
        }
        
        paras[currentPara].innerHTML += splitted[currentPara][i];
        i++;

    }, 50);
}

function playSong() {
    const song = document.getElementById("myAudio");

    song.play();
}


// $('#typing-container').stop().animate({
//     scrollTop: $("#typing-container")[0].scrollHeight
//   }, 15000);
  
//   $('#typing-container').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e) {
//     if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
//       $('#typing-container').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
//     }
//   });