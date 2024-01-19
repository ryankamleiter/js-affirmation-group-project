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

// make a handle submit function
function handleSubmit(event) {

  event.preventDefault();
  let affirmationElement = document.getElementById('affirmation_text');
  let authorElement = document.getElementById('author_text');
  let inputContainer = document.querySelector('tbody');
  inputContainer.innerHTML += `
  <td>
  ${affirmationElement.value}
  </td>
  <td>
  ${authorElement.value}
  </td>
  <td>
  
   <button onClick="deleteAffirmation(event)">❌</button>

  </td>
  `;

  //console.log(affirmationElement.value);

  // console.log(affirmationElement);
  // console.log(authorElement);

  affirmationElement.value = '';
  authorElement.value = '';
};

//add rows to tbody
function deleteAffirmation(event) {

  event.target.parentElement.parentElement.remove();


  // console.log(event.target.parentElement.parentElement);


};


