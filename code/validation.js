const nomRegex = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
const telephoneRegex = /^(06|07)\d{8}$/;

function validerNom(nom) {
  return nomRegex.test(nom);
}
function validerEmail(email) {
  return emailRegex.test(email);
}
function validerTelephone(tele) {
  return telephoneRegex.test(tele);
}
function validerEtColorerChamp(id, regex, errorMessageId) {
  const champ = document.getElementById(id);
  const champError = document.getElementById(errorMessageId);
  const estValide = regex.test(champ.value);

  if (estValide) {
    champ.classList.remove("input-error");
    champ.classList.add("input-valid");
    champError.style.display = "none";
  } else {
    champ.classList.remove("input-valid");
    champ.classList.add("input-error");
    champError.style.display = "block";
  }
}

document.getElementById("prenom").addEventListener("blur", function () {
  validerEtColorerChamp("prenom", nomRegex, "prenom-error");
});

document.getElementById("nom").addEventListener("blur", function () {
  validerEtColorerChamp("nom", nomRegex, "nom-error");
});

document.getElementById("email").addEventListener("blur", function () {
  validerEtColorerChamp("email", emailRegex, "email-error");
});
document.getElementById("tele").addEventListener("blur", function () {
  validerEtColorerChamp("tele", telephoneRegex, "tele-error");
});

function onclic() {
  const prenomInput = document.getElementById("prenom");
  const nomInput = document.getElementById("nom");
  const emailInput = document.getElementById("email");
  const teleInput = document.getElementById("tele");
  const aficher = document.getElementById("aficher");

  aficher.innerHTML = "";
  const prenom = prenomInput.value;
  const nom = nomInput.value;
  const email = emailInput.value;
  const tele = teleInput.value;
  var c = 0;

  if (validerNom(nom) && validerEmail(email) && validerTelephone(tele)) {
    aficher.innerHTML = "Msg ok";
    c = 1;
  }

  if (c == 1) {
    prenom
    prenomInput.value = "";
    nomInput.value = "";
    teleInput.value = "";
    emailInput.value = "";
  }
}
