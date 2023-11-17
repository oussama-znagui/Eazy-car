// Regex Prenom
document.getElementById('prenom').addEventListener('input', function() {
  const prenomValue = this.value;
  const prenomstyle = this;
  const regexprenom = /^[A-Za-z]+$/;

  prenomstyle.classList.remove('border-black-600', 'border-red-600', 'border-green-600');

  if (!regexprenom.test(prenomValue)) {
    prenomstyle.classList.add('border-red-600');
    showError('prenom-error');
  } else {
    prenomstyle.classList.add('border-green-600');
    hideError('prenom-error');
  }
});

  // Regex nom
  document.getElementById('nom').addEventListener('input', function() {
    const nomValue = this.value;
    const nomstyle = this;
    const regexnom = /^[A-Za-z]+$/;
  
    nomstyle.classList.remove('border-black-600', 'border-red-600', 'border-green-600');
  
    if (!regexnom.test(nomValue)) {
      nomstyle.classList.add('border-red-600');
      showError('nom-error');
    } else {
      nomstyle.classList.add('border-green-600');
      hideError('nom-error');
    }
  });


// Regex Email
   document.getElementById('email').addEventListener('input', function() {
    const nomValue = this.value;
    const nomstyle = this;
    const regexnom = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
    nomstyle.classList.remove('border-black-600', 'border-red-600', 'border-green-600');
  
    if (!regexnom.test(nomValue)) {
      nomstyle.classList.add('border-red-600');
      showError('email-error');
    } else {
      nomstyle.classList.add('border-green-600');
      hideError('email-error');
    }
  });



// Regex telephone
document.getElementById('tele').addEventListener('input', function() {
  const nomValue = this.value;
  const nomstyle = this;
  const regexnom = /^(06|07)\d{8}$/;

  nomstyle.classList.remove('border-black-600', 'border-red-600', 'border-green-600');

  if (!regexnom.test(nomValue)) {
    nomstyle.classList.add('border-red-600');
    showError('tele-error');
  } else {
    nomstyle.classList.add('border-green-600');
    hideError('tele-error');
  }
});


//   invalide messages
function showError(errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.classList.remove('hidden');
  errorElement.classList.add('block');
}

function hideError(errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.classList.add('hidden');
}




document.getElementById('envoyer').addEventListener('click', function() {
  const errors = document.querySelectorAll('.error');
  const inputFields = document.querySelectorAll('.input-field');

  
  let isErrorVisible = false;

  errors.forEach((error) => {
    if (!error.classList.contains('hidden')) {
      isErrorVisible = true;
      return; 
    }
  });

  
  if (!isErrorVisible) {
    inputFields.forEach(function(inputField) {
      inputField.value = '';
      document.getElementById('message-input').value = '';
      
    });
  }
});
