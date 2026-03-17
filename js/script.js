//on récupère les éléments dans le document
const motMagique = document.getElementById('mot-magique');
const overlay = document.getElementById('overlay');
const boutonFermer = document.getElementById('fermer-x');

//on écoute le clic sur le mot "MAGIE"
motMagique.addEventListener('click', () => {
  overlay.style.display = 'block';
});

//On écoute le clic sur le fond sombre
overlay.addEventListener('click', (event) => {
//on vérifie que l'utilisateur a cliqué sur le fond
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }

  boutonFermer.addEventListener('click', () => {
  overlay.style.display = 'none';
});

});