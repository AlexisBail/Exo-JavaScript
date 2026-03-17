let totalVues = 0;

//Crée la fonction ajouterVues
function ajouterVues(nombre) {
    totalVues += nombre;
}
//La boucle pour simuler 5 jours de buzz
for (let jour = 1; jour <= 5; jour++) {
    let vuesDuJour = jour * 10;

    // Appelle ta fonction ici pour ajouter les vues du jour
    ajouterVues(vuesDuJour);

    console.log("Jour " + jour + " : +" + vuesDuJour + " vues");
}

//Affiche le total final et vérifie si c'est un succès (> 100)
console.log("Total final : " + totalVues);

if (totalVues > 100) {
    console.log("Félicitations ! C'est un véritable succès ! 🚀");
} else {
    console.log("Le buzz est un peu timide, continuez les efforts ! ✨");
}