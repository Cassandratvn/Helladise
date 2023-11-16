function afficheQuestion(n) {
  question.textContent = questions[n].label;
  enfer.textContent = questions[n].e;
  paradis.textContent = questions[n].p;
}

var questions = [
  {label: "Êtes vous plutôt film d’horreur ou film d’amour ?", e: "Horreur", p: "Amour"},
  {label: "Si vous en aviez l’occasion, tueriez vous la personne que vous détestez le plus ?", e: "Oui", p: "Non"},
  {label: "Avez vous déjà pris de la drogue ?", e: "Oui", p: "Non"},
  {label: "Vous venez de rouler sur quelqu’un alors que vous avez bu de l’alcool ?", e: "Je fuis", p: "J'appelle les secours"},
  {label: "Êtes vous amateur de porno ?", e: "Oui", p: "Non"},
  {label: "Avez-vous déjà eu des sentiments pour un enfant alors que vous êtes adulte ?", e: "Oui", p: "Non"},
  {label: "Avez-vous déjà torturé un insecte ou un animal pour le plaisir  ?", e: "Oui", p: "Non"},
  {label: "Avez-vous déjà eu des envies avec la personne qui se trouve à votre droite ?", e: "Oui", p: "Non"},
  {label: "Avez vous déjà consommé du contenu illégal", e: "Oui", p: "Non"},
  {label: "Ceci est la dernière la question, faites attention à votre réponse... Aimez vous le Hard Métal ?", e: "Oui", p: "Non"},
];
/* Questions ? 
- Êtes vous plutôt film d’horreur ou film d’amour ? - Horreur - Amour 
- Si vous en aviez l’occasion, tueriez vous la personne que vous détestez le plus ? - Oui - Non
- Avez vous déjà prit de la drogue ? - Oui - Non
- Vous venez de rouler sur quelqu’un alors que vous avez bu de l’alcool ? - Je fuis - J’appelle les secours 
- Êtes vous amateur de porno ? - Oui - Non
- Est ce que vous avez déjà eu des sentiments pour un enfant alors que vous êtes adulte ? 
- Est ce que vous avez déjà eu l’idée de tabasser un sdf pour le plaisir ? 
- Est ce que vous avez déjà torturer un insecte ou un animal pour le plaisir ? 
- Est ce que vous avez déjà eu des envies avec la personne à votre droite ?
- Avez vous déjà consommé du contenu illégal ? 
- Ceci est la dernière la question, faites attention à votre réponse
- Aimez vous le Hard Métal ?
*/
let myForm = document.getElementById('myForm');
let question = document.getElementById('question');
let enfer = document.getElementById('enfer');
let paradis = document.getElementById('paradis');
let checkbox1 = document.getElementById('rEnfer');
let checkbox2 = document.getElementById('rParadis');
var i = 0;
afficheQuestion(0);
let rEnfer = 0;
let rParadis = 0; //réponses

myForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if(e.target[0].checked) rEnfer++;
  else rParadis++;
  checkbox1.checked = false;
  checkbox2.checked = false;
  console.log(i, rEnfer, rParadis);
  i++;
  if(i <= 9) afficheQuestion(i);
  else {
    //stockage dans le localStorage pour le récupérer dans "compteur" dans les dossiers paradis et enfer
    localStorage.setItem('paradis', rParadis);
    localStorage.setItem('enfer', rEnfer);
    if(rEnfer > rParadis) document.location.href = "enfer.html";
    else document.location.href = "paradis.html";
  }
});