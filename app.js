const grille = document.querySelector(".grille"); // récupère l'élément HTML de la classe "grille" de la page et le stocke dans la variable "grille" 

for (let i = 1; i <240; i++) { // boucle for qui exécute le code entre accolades 241 fois

    let newDiv = document.createElement("div"); // dans chaque itération de la boucle, une nouvelle div est créée et stockée dans la variable "newDiv"

    if(i % 20 === 0){ // cette condition vérifie si "pas" est divisible par 20 
        newDiv.setAttribute("class","right_div"); // Si c'est le cas, la class "right_div" est ajoutée à la nouvelle div créée.
    } 

    if((i-1) % 20 === 0){ // cette condition vérifie si 'pas-1' est divisible par 20. Si c'est le cas, la class "left_div" est ajoutée à la nouvelle div créée.
        newDiv.setAttribute("class","left_div"); // Si c'est le cas, la class "left_div" est ajoutée à la nouvelle div créée
    }

    grille.appendChild(newDiv); // la nouvelle div est ajoutée à la grille en tant qu'enfant de l'élément "grille"
}


var tableauId = [0,1,2,3,4,5,6,7,8,9,10,11,20,21,22,23,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,48,49,50,51]; // variable tableauId est déclarée qui contient une séquence d'entiers


const tableauGrille = grille.children; // la variable "tableauGrille" est déclarée qui contient les enfants de l'élément "grille"

tableauGrille[230].classList.add("tireur"); // la classe "tireur" est ajoutée à l'élément de la grille au "tableauI" 230.


tableauId.forEach(element => { 
    tableauGrille[element].classList.add("alien");
});

document.onkeydown = function(event) { // événement de touche enfoncée
    let tireur = document.querySelector(".tireur"); // récupère l'élément de la classe "tireur"
    let indexTireur = Array.from(tableauGrille).indexOf(tireur); // récupère l'index actuel du tireur dans "tableauGrille"
    
    switch (event.keyCode) { // vérifie le code de la touche enfoncée
    case 37: // flèche gauche
    if (indexTireur % 20 !== 0) { // vérifie que le tireur ne se trouve pas sur la bordure gauche
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur - 1].classList.add("tireur"); // ajoute la classe "tireur" à l'élément précédent
    }
    break;
    case 38: // flèche haut
    if (indexTireur >= 20) { // vérifie que le tireur ne se trouve pas sur la bordure supérieure
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur - 20].classList.add("tireur"); // ajoute la classe "tireur" à l'élément 20 cases au-dessus
    }
    break;
    case 39: // flèche droite
    if (indexTireur % 20 !== 19) { // vérifie que le tireur ne se trouve pas sur la bordure droite
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur + 1].classList.add("tireur"); // ajoute la classe "tireur" à l'élément suivant
    }
    break;
    case 40: // flèche bas
    if (indexTireur <= 219) { // vérifie que le tireur ne se trouve pas sur la bordure inférieure
    tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
    tableauGrille[indexTireur + 20].classList.add("tireur"); // ajoute la classe "tireur" à l'élément 20 cases en dessous
    }
    break;
}
};