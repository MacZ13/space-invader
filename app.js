/* crée les grille */

const spaceInvader = document.querySelector('.grille')

for (let i = 1; i < 241; i++){
    let madiv = document.createElement('div');

    if (i % 20 === 0) {
        madiv.setAttribute("class", "right_div");
    }

    if ((i - 1) % 20 === 0) {
        madiv.setAttribute("class", "left_div");
    }

    spaceInvader.appendChild(madiv);
}

var tableauId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

/* Afficher les vaisseau */

const tableauGrille = spaceInvader.children; // la variable "tableauGrille" est déclarée qui contient les enfants de l'élément "grille"

tableauGrille[230].classList.add("tireur"); // la classe "tireur" est ajoutée à l'élément de la grille au "tableauI" 230.


tableauId.forEach(element => {
    tableauGrille[element].classList.add("alien");
});

document.onkeydown = function(event) { // événement de touche enfoncée
    let tireur = document.querySelector(".tireur"); // récupère l'élément de la classe "tireur"
    let indexTireur = Array.from(tableauGrille).indexOf(tireur); // récupère l'index actuel du tireur dans "tableauGrille"
    
    switch (event.keyCode) { // vérifie le code de la touche enfoncée
        case 81: // flèche gauche
            console.log(1)
    if (indexTireur % 20 !== 0) { // vérifie que le tireur ne se trouve pas sur la bordure gauche
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur - 1].classList.add("tireur"); // ajoute la classe "tireur" à l'élément précédent
    }
        break;
        
        case 90: // flèche haut
            console.log(1)
    if (indexTireur >= 180) { // vérifie que le tireur ne se trouve pas sur la bordure plus de 3
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur - 20].classList.add("tireur"); // ajoute la classe "tireur" à l'élément 20 cases au-dessus
    }
        break;
        
        case 68: // flèche droite
            console.log(1)
    if (indexTireur % 20 !== 19) { // vérifie que le tireur ne se trouve pas sur la bordure droite
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur + 1].classList.add("tireur"); // ajoute la classe "tireur" à l'élément suivant
    }
        break;
        
        case 83: // flèche bas
            console.log(1)
    if (indexTireur <= 219) { // vérifie que le tireur ne se trouve pas sur la bordure inférieure
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur + 20].classList.add("tireur"); // ajoute la classe "tireur" à l'élément 20 cases en dessous
    }
            
        break;
    }
};