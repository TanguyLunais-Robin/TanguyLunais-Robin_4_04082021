function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal event
modalCross[0].addEventListener ("click", closeModal);


// form must be valide when user click on "submit"
const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;

const validation = document.getElementById ('checkbox1')
const errorFirst = document.getElementById ('error-first');
const errorLast = document.getElementById ('error-last');
const errorMail = document.getElementById ('error-mail');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-quantity');
const errorCity = document.getElementById ('error-city');
const errorValidation = document.getElementById ('error-validation');

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');



form.addEventListener('submit', (e) => {
  e.preventDefault();
})


function validate () {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let tournamentChecked;
  let radioChecked;
  let conditionsChecked;

  if (firstName.value === '' || firstName.value == null || firstName.value.length < 2) {
    errorFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.';
    errorFirst.style.color = 'red';
    errorFirst.style.fontSize = '0.8rem';
    errorFirst.style.marginTop = '10px';
    firstName.style.border = 'solid red 2px';
  } else {
    errorFirst.style.display = 'none';
    firstName.style.border = 'none';
    firstChecked = true;
  };

    if (lastName.value === '' || lastName.value == null || lastName.value.length < 2) { 
      errorLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du Nom.';
      errorLast.style.color = 'red';
      errorLast.style.fontSize = '0.8rem';
      errorLast.style.marginTop = '10px';
      lastName.style.border = 'solid red 2px';      
  }  else {
    errorLast.style.display = 'none';
    lastName.style.border = 'none';
    lastChecked = true;
  };

    if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(eMail.value)) { 
      errorMail.innerText = 'Veuillez renseigner une addresse mail valide';
      errorMail.style.color = 'red';
      errorMail.style.fontSize = '0.8rem';
      errorMail.style.marginTop = '10px';
      eMail.style.border = 'solid red 2px';
  } else {
      errorMail.style.display = 'none';
      eMail.style.border = 'none';
      mailChecked = true;
  };

  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { 
    errorBirth.innerText = 'Veuillez remplir votre date d\'anniversaire';
    errorBirth.style.color = 'red';
    errorBirth.style.fontSize = '0.8rem';
    errorBirth.style.marginTop = '10px';
    birthDate.style.border = 'solid red 2px';
    } else {
    errorBirth.style.display = 'none';
    birthDate.style.border = 'none';
    birthChecked = true;      
    }

  if (!quantityTournament.value.match(numbers)) { 
    errorQuantity.innerText = 'Vous devez indiquer un nombre';
    errorQuantity.style.color = 'red';
    errorQuantity.style.fontSize = '0.8rem';
    errorQuantity.style.marginTop = '10px';
    quantityTournament.style.border = 'solid red 2px';
  } else {
    errorQuantity.style.display = 'none';
    quantityTournament.style.border = 'none';
    tournamentChecked = true;
  };

  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    errorCity.innerText = 'Vous devez choisir une ville';
    errorCity.style.color = 'red';
    errorCity.style.fontSize = '0.8rem';
    errorCity.style.marginTop = '10px';          
  } else {
    errorCity.style.display = 'none';
    radioChecked = true;
  };

  if (!validation.checked) {
    errorValidation.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions';
    errorValidation.style.color = 'red';
    errorValidation.style.fontSize = '0.8rem';
    errorValidation.style.marginTop = '10px';
    errorValidation.style.marginBottom = '20px';
  } else {
    errorValidation.style.display = 'none';
    conditionsChecked = true;
  };

  if (firstChecked == true && lastChecked == true && mailChecked == true && tournamentChecked == true && radioChecked == true && conditionsChecked == true && birthChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
    console.log("Participation enregistrer Bravo !!");
  }

  
}

// Close modal form
confirmationCloseBtn[0].addEventListener("click", closeModal);