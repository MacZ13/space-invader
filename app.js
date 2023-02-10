/* crée les grille */

const spaceInvader = document.querySelector('.grille')
var resultsDisplay = document.querySelector('h3')
const btnReset = document.getElementById("bouton_reset")
let results = 0
let tireurIndex = 230
let laserEncours = 230

let direction = 1
let width = 20
let invadersId
let goBouge = true
let aliensRemoved = []


btnReset.onclick = function () {
    window.location.reload();
}

for (let i = 1; i < 241; i++){
    const maDiv = document.createElement('div');
    spaceInvader.appendChild(maDiv);
}

const toutesLesDivs = spaceInvader.children; // la variable "toutesLesDivs" est déclarée qui contient les enfants de l'élément "grille"

/* Afficher les vaisseau */

var alienInvaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

/* function qui ajoute les alien */

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            toutesLesDivs[alienInvaders[i]].classList.add('alien')
        }
    }
}

draw()

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        toutesLesDivs[alienInvaders[i]].classList.remove('alien')
    }
}

toutesLesDivs[230].classList.add('tireur')



alienInvaders.forEach(element => {
    toutesLesDivs[element].classList.add("alien");
});

/* mouvement du tireur */

document.onkeydown = function(event) { // événement de touche enfoncée
    let tireur = document.querySelector(".tireur"); // récupère l'élément de la classe "tireur"
    
    switch (event.keyCode) { // vérifie le code de la touche enfoncée
        case 81: // flèche gauche
            console.log(1)
    if (tireurIndex % 20 !== 0) { // vérifie que le tireur ne se trouve pas sur la bordure gauche
        tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
        tireurIndex -= 1;
    toutesLesDivs[tireurIndex].classList.add("tireur"); // ajoute la classe "tireur" à l'élément précédent
    }
        break;
        
        case 90: // flèche haut
            console.log(1)
    if (tireurIndex >= 180) { // vérifie que le tireur ne se trouve pas sur la bordure plus de 3
        tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
        tireurIndex -= 20;
    toutesLesDivs[tireurIndex].classList.add("tireur"); // ajoute la classe "tireur" à l'élément 20 cases au-dessus
    }
        break;
        
        case 68: // flèche droite
            console.log(1)
    if (tireurIndex % 20 !== 19) { // vérifie que le tireur ne se trouve pas sur la bordure droite
        tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
        tireurIndex += 1;
    toutesLesDivs[tireurIndex].classList.add("tireur"); // ajoute la classe "tireur" à l'élément suivant
    }
        break;
        
        case 83: // flèche bas
            console.log(1)
    if (tireurIndex <= 219) { // vérifie que le tireur ne se trouve pas sur la bordure inférieure
        tireur.classList.remove("tireur"); // enlève la classe "tireur" de l'élément actuel
        tireurIndex += 20;
    toutesLesDivs[tireurIndex].classList.add("tireur"); // ajoute la classe "tireur" à l'élément 20 cases en dessous
    }
            
        break;
    }
};

/* function mouvement des ennemies */

function moveAlien() {
    const leftMove = alienInvaders[0] % width === 0
    const rightMove = alienInvaders[alienInvaders.length - 1] % width === width - 1
    remove()

    if (rightMove && goBouge) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1
            direction = -1
            goBouge = false
        }
    }

    if (leftMove && !goBouge) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1
            direction = 1 
            goBouge = true
        }
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }

    draw()

/*   if (toutesLesDivs[tireurIndex].classList.contains('alien', 'tireur')) {
    results.innerHTML = 'TES NUL'
    clearInterval(invadersId)
  } 

  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[tireurIndex] > (toutesLesDivs.length)) {
      results.innerHTML = 'TES NUL'
      clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    results.innerHTML = 'YOU WIN'
    clearInterval(invadersId)
  }  */
}

invadersId = setInterval(moveAlien, 600);
    
document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 32: // Touche espace
            toutesLesDivs[tireurIndex -20].classList.add('laser')
            break;
    }
});
laserId = setInterval(moveLaser, 100);

//-------------------------------------------------//

/* Function permet de gèrer la colison des vaisseaux et le laser */

function moveLaser() {

    for (let i = 0; i < toutesLesDivs.length; i++) {
        if (toutesLesDivs[i].classList.contains('laser')) {
             laserEncours = i - 20;

            toutesLesDivs[i].classList.remove('laser');
            if (laserEncours > 0) {
                toutesLesDivs[laserEncours].classList.add('laser')
    

                if (toutesLesDivs[laserEncours].classList.contains('alien')) {
                    toutesLesDivs[laserEncours].classList.remove('laser');
                    toutesLesDivs[laserEncours].classList.remove('alien');
                    toutesLesDivs[laserEncours].classList.add('boom');
                    alienInvaders = alienInvaders.filter(el => el !== laserEncours);  
                    results++
                }
            }
        }
        if (toutesLesDivs[i].classList.contains('boom'))
        toutesLesDivs[i].classList.remove('boom');  
    }

    resultsDisplay.innerHTML = "Score : " + results;
    if (alienInvaders.length == 0) {
        resultsDisplay.innerHTML = window.alert('GG');
        clearInterval(laserId);
        clearInterval(invadersId);

        for (let i = 1; i < toutesLesDivs.length; i++){

            if (toutesLesDivs[i].classList.contains("laser")) {
                toutesLesDivs[i].classList.remove("laser")
            }

            if (toutesLesDivs[i].classList.contains("boom")) {
                toutesLesDivs[i].classList.remove("boom")
            }
        }
    }   
}

