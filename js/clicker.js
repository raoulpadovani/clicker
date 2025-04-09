/*déclaration*/
const button = document.querySelector("button");
const counter = document.getElementById("counter");
const buttonBlock = document.getElementById("block");
const buttonFer = document.getElementById("fer");
const buttonOr = document.getElementById("or");
const buttonDiamant = document.getElementById("diamant");
const buttonNetherite = document.getElementById("netherite");
const buttonHachefer = document.getElementById("hachefer");
const buttonHacheor = document.getElementById("hacheor");
const buttonHachediamant = document.getElementById("hachediamant");
const buttonHachenetherite = document.getElementById("hachenetherite");

const buttonReset = document.getElementById("reset");
const buttonPlay = document.getElementById("son"); // 
const buttonStop = document.getElementById("stop"); // 

let count = parseInt(localStorage.getItem("count")) || 0; // Récupère le score depuis le stockage local ou initialise à 0


let lastBlock = localStorage.getItem("lastBlock") || "asset/block/p.png"; // Dernier bloc par défaut
let lastPickaxe = localStorage.getItem("lastPickaxe") || "asset/item/mp.png"; // Dernière pioche par défaut
let lastBlockWidth = localStorage.getItem("lastBlockWidth") || "200px"; // Largeur par défaut
let lastBlockHeight = localStorage.getItem("lastBlockHeight") || "200px"; // Hauteur par défaut
let lastFond = localStorage.getItem("lastfond") || "asset/paysage/paysagearbre.png"; // Dernier bloc par défaut

// Met à jour l'affichage du score au chargement
counter.textContent = count;

// Charge le dernier bloc, la dernière pioche et leur taille
document.body.style.cursor = `url('${lastPickaxe}'), auto`;
const img = buttonBlock.querySelector("img");
img.src = lastBlock;
img.style.width = lastBlockWidth;
img.style.height = lastBlockHeight;

// Autoclick actif dès le début
setInterval(() => {
  count += 1; // Incrémente le score automatiquement
  counter.textContent = count; // Met à jour l'affichage
  localStorage.setItem("count", count); // Enregistre le score dans le stockage local
}, 1000); // Intervalle de 1 seconde

/* gold click */
buttonBlock.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
  localStorage.setItem("count", count); // Enregistre le score dans le stockage local
  console.log(count, 'yo');
});
/** son */
buttonPlay.addEventListener("click", () => {
  const audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    buttonPlay.textContent = "Arrêter le son"; // Change le texte du bouton
  } else {
    audio.pause();
    audio.currentTime = 0; // Remet le son au début
    buttonPlay.textContent = "Jouer le son"; // Change le texte du bouton
  }
});

/* reset */
buttonReset.addEventListener("click", () => {
  if (confirm("Êtes-vous sûr de vouloir réinitialiser le jeu ?")) {
    // Réinitialise toutes les valeurs
    count = 0; // Réinitialise le score
    counter.textContent = count; // Met à jour l'affichage du score
    localStorage.setItem("count", count); // Enregistre le score réinitialisé dans le stockage local

    // Réinitialise la pioche et le bloc
    document.body.style.cursor = "url('asset/item/mp.png'), auto"; // Réinitialise la pioche
    localStorage.setItem("lastPickaxe", "asset/item/mp.png"); // Réinitialise la dernière pioche

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/p.png"; // Réinitialise le bloc
    img.style.width = "200px"; // Réinitialise la largeur
    img.style.height = "200px"; // Réinitialise la hauteur
    localStorage.setItem("lastBlock", "asset/block/p.png"); // Réinitialise le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Réinitialise la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Réinitialise la hauteur

    // Affiche un message de confirmation
    console.log("Le jeu a été réinitialisé.");
  }
});

/*amélioration*/
buttonFer.addEventListener("click", () => {
  if (count >= 30) {
    count -= 30;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/mi.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mi.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block fer.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block fer.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});

buttonOr.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/min.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/min.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block or.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block or.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});

buttonDiamant.addEventListener("click", () => {
  if (count >= 80) {
    count -= 80;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/mpiochediamant.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mpiochediamant.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block diamant.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block diamant.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});

buttonNetherite.addEventListener("click", () => {
  if (count >= 110) {
    count -= 110;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/mine.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mine.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block netherite.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block netherite.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});




buttonHachefer.addEventListener("click", () => {
  if (count >= 220) {
    count -= 220;
    counter.textContent = count;

    // Change le fond en paysagearbre.png
    document.body.style.backgroundImage = "url('asset/paysage/paysagearbre.png')";
    localStorage.setItem("lastFond", "asset/paysage/paysagearbre.png"); // Sauvegarde le paysage dans le stockage local

    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/hf.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/hf.png"); // Sauvegarde la dernière pioche

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/bouleau.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/bouleau.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});

buttonOr.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/min.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/min.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block or.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block or.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});

buttonDiamant.addEventListener("click", () => {
  if (count >= 80) {
    count -= 80;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/mpiochediamant.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mpiochediamant.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block diamant.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block diamant.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});

buttonNetherite.addEventListener("click", () => {
  if (count >= 110) {
    count -= 110;
    counter.textContent = count;
    localStorage.setItem("count", count); // Enregistre le score dans le stockage local
    document.body.style.cursor = "url('asset/item/mine.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mine.png"); // Sauvegarde la dernière pioche
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block netherite.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block netherite.png"); // Sauvegarde le dernier bloc
    localStorage.setItem("lastBlockWidth", "200px"); // Sauvegarde la largeur
    localStorage.setItem("lastBlockHeight", "200px"); // Sauvegarde la hauteur
  }
});