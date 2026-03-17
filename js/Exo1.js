const ingredients = [10, -5, 3, 0, 15, -2, 8];

function preparerMagie(liste) {
    let somme = 0;

    //Boucle sur le tableau 'liste'
    for (let nombre of liste) {
        
        // Utilise un 'if' pour vérifier si le nombre est > 0
        if (nombre > 0) {
            
            //Multiplie le nombre par 2 et ajoute-le à 'somme'
            somme += nombre * 2;
        }
    }

    console.log("Puissance totale : " + somme);

    //Ajoute la condition pour le message final
    if (somme > 50) {
        console.log("La magie est puissante !");
    } else {
        console.log("Il manque un peu de paillettes...");
    }
}

// Appel la fonction avec le panier d'ingrédients
preparerMagie(ingredients);