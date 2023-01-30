const form = document.getElementById("libform");
document.getElementById("lib-button").addEventListener('click', playGame);


// noun, adjective, person, verb, place
function get(id) {
    const text = form.querySelector(`#${id}`).value;
    if (text.length > 0) {
        return text;
    }
    return null;
}



function playGame (eve) {
    eve.preventDefault();
    const text = `I ${get('verb')} the ${get('adjective')} eggs all around the ${get('noun')} with ${get('person')} in the ${get('place')}`;
    textNode = document.createTextNode(text);
    document.getElementById('story').appendChild(textNode);

}