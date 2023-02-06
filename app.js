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

