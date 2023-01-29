document.body.firstElementChild.setAttribute('id', 'socialNetworkNavigation');

const newLi = document.createElement('li');
const txtNode = document.createTextNode("Logout");
newLi.appendChild(txtNode);
document.querySelector('ul').appendChild(newLi);

/**
 * @todo: bonus question
 */