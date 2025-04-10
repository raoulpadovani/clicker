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

const buttonEpeefer = document.getElementById("epeefer");
const buttonEpeeor = document.getElementById("epeeor");
const buttonEpeediamant = document.getElementById("epeediamant");
const buttonEpeenetherite = document.getElementById("epeenetherite");

const buttonReset = document.getElementById("reset");
const buttonPlay = document.getElementById("son"); 
const buttonStop = document.getElementById("stop"); 

let count = parseInt(localStorage.getItem("count")) || 0; 
let lastBlock = localStorage.getItem("lastBlock") || "asset/block/p.png"; 
let lastPickaxe = localStorage.getItem("lastPickaxe") || "asset/item/mp.png"; 
let lastBlockWidth = localStorage.getItem("lastBlockWidth") || "200px"; 
let lastBlockHeight = localStorage.getItem("lastBlockHeight") || "200px"; 
let lastFond = localStorage.getItem("lastFond") || "/clicker/asset/paysage/fond.png";

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
  count += 1; 
  counter.textContent = count; 
  localStorage.setItem("count", count); 
}, 1000); 

/* gold click */
buttonBlock.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
  localStorage.setItem("count", count); 
});
/** son */
buttonPlay.addEventListener("click", () => {
  const audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    const img = buttonPlay.querySelector("img");
    img.src = "asset/item/chef.gif";
  } else {
    audio.pause();
    audio.currentTime = 0;
    const img = buttonPlay.querySelector("img");
    img.src = "asset/item/jukebox.gif"; 

  }
});

/* reset */
buttonReset.addEventListener("click", () => {
  if (confirm("Êtes-vous sûr de vouloir réinitialiser le jeu ?")) {
    count = 0; 
    counter.textContent = count;
    localStorage.setItem("count", count); 

    // Réinitialise la pioche et le bloc
    document.body.style.cursor = "url('asset/item/mp.png'), auto"; 
    localStorage.setItem("lastPickaxe", "asset/item/mp.png"); 

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/p.png"; 
    img.style.width = "200px"; 
    img.style.height = "200px"; 
    localStorage.setItem("lastBlock", "asset/block/p.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 

    // Réinitialise le fond
    document.body.style.backgroundImage = "url('asset/paysage/fond.png')";
    localStorage.setItem("lastFond", "asset/paysage/fond.png");

    // Affiche un message de confirmation
    console.log("Le jeu a été réinitialisé.");
  }
});
/*amélioration*/
buttonFer.addEventListener("click", () => {
  if (count >= 30) {
    count -= 30;
    counter.textContent = count;
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/mi.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mi.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block fer.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block fer.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
    buttonBlock.addEventListener("click", () => {
      count += 50000;
      counter.textContent = count;
      localStorage.setItem("count", count); 
    });
  }
});

buttonOr.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    counter.textContent = count;
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/min.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/min.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block or.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block or.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px");
    buttonBlock.addEventListener("click", () => {
      count += 4;
      counter.textContent = count;
      localStorage.setItem("count", count); 
    });
  }
});

buttonDiamant.addEventListener("click", () => {
  if (count >= 80) {
    count -= 80;
    counter.textContent = count;
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/mpiochediamant.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mpiochediamant.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block diamant.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block diamant.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px");
    buttonBlock.addEventListener("click", () => {
      count += 8;
      counter.textContent = count;
      localStorage.setItem("count", count); 
    });
  }
});

buttonNetherite.addEventListener("click", () => {
  if (count >= 110) {
    count -= 110;
    counter.textContent = count;
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/mine.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/mine.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/block netherite.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/block netherite.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
  }
});




buttonHachefer.addEventListener("click", () => {
  if (count >= 220) {
    count -= 220;
    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/paysagearbre.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/paysagearbre.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/hf.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/hf.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/bouleau.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/bouleau.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
    
  }
});

buttonHacheor.addEventListener("click", () => {
  if (count >= 440) {
    count -= 4400;

    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/paysagearbre.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/paysagearbre.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/ho.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/ho.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/chene.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/chene.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
  }
});

buttonHachediamant.addEventListener("click", () => {
  if (count >= 880) {
    count -= 880;
    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/paysagearbre.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/paysagearbre.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/hd.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/hd.png"); 

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/arbre.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/arbre.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
  }
});
buttonHachenetherite.addEventListener("click", () => {
  if (count >= 1760) {
    count -= 1760;
    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/paysagearbre.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/paysagearbre.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/hn.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/hn.png"); 

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/pale.png";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/pale.png"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
  }
});

buttonEpeefer.addEventListener("click", () => {
  if (count >= 3520) {
    count -= 3520;
    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/combat.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/combat.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/sf.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/sf.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/v.gif";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/v.gif"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
    
  }
});

buttonEpeeor.addEventListener("click", () => {
  if (count >= 7040) {
    count -= 7040;

    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/combat.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/combat.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/so.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/so.png"); 
    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/blaze.gif";
    img.style.width = "300px";
    img.style.height = "300px";
    localStorage.setItem("lastBlock", "asset/block/blaze.gif"); 
    localStorage.setItem("lastBlockWidth", "300px"); 
    localStorage.setItem("lastBlockHeight", "300px"); 
  }
});

buttonEpeediamant.addEventListener("click", () => {
  if (count >= 14080) {
    count -= 14080;
    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/combat.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/combat.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/sd.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/sd.png"); 

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/g.gif";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/g.gif"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
  }
});

buttonEpeenetherite.addEventListener("click", () => {
  if (count >= 28160) {
    count -= 28160;
    counter.textContent = count;
    
    document.body.style.backgroundImage = "url('asset/paysage/combat.png')";
    localStorage.setItem("lastFond", "/clicker/asset/paysage/combat.png");
    localStorage.setItem("count", count); 
    document.body.style.cursor = "url('asset/item/sn.png'), auto";
    localStorage.setItem("lastPickaxe", "asset/item/sn.png"); 

    const img = buttonBlock.querySelector("img");
    img.src = "asset/block/dragon.gif";
    img.style.width = "200px";
    img.style.height = "200px";
    localStorage.setItem("lastBlock", "asset/block/dragon.gif"); 
    localStorage.setItem("lastBlockWidth", "200px"); 
    localStorage.setItem("lastBlockHeight", "200px"); 
  }
});


