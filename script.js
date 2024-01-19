onReady();

function onReady() {
  console.log('Javascript is working!');
}

//create function for handleFireClick
//adds the fire emoji to div element when clicked on

function handleFireClick() {
  let divIWantToAddTo = document.querySelector('div');
  divIWantToAddTo.innerText += '🔥';

}

//create function for handleIceClick
//adds the ice emoji to div element when clicked on

function handleIceClick() {
  let divIWantToAddTo = document.querySelector('div');
  divIWantToAddTo.innerText += '❄️';

}