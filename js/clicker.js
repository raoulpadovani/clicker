const counter = document.getElementById("counter");
const buttonBlock = document.getElementById("block");
const buttonReset = document.getElementById("reset");
const buttonPlay = document.getElementById("son");
const upgrades = [
  { id: "fer", cost: 30, gain: 2, cursor: "asset/item/mi.png", block: "asset/block/block fer.png", background: "asset/paysage/fond.png" },
  { id: "or", cost: 50, gain: 4, cursor: "asset/item/min.png", block: "asset/block/block or.png", background: "asset/paysage/fond.png" },
  { id: "diamant", cost: 80, gain: 8, cursor: "asset/item/mpiochediamant.png", block: "asset/block/block diamant.png", background: "asset/paysage/fond.png" },
  { id: "netherite", cost: 110, gain: 16, cursor: "asset/item/mine.png", block: "asset/block/block netherite.png", background: "asset/paysage/fond.png"  },

  { id: "hachefer", cost: 220, gain: 32, cursor: "asset/item/hf.png", block: "asset/block/bouleau.png", background: "asset/paysage/paysagearbre.png" },
  { id: "hacheor", cost: 440, gain: 64, cursor: "asset/item/ho.png", block: "asset/block/chene.png", background: "asset/paysage/paysagearbre.png" },
  { id: "hachediamant", cost: 880, gain: 128, cursor: "asset/item/hd.png", block: "asset/block/arbre.png", background: "asset/paysage/paysagearbre.png" },
  { id: "hachenetherite", cost: 1760, gain: 256, cursor: "asset/item/hn.png", block: "asset/block/pale.png", background: "asset/paysage/paysagearbre.png"},

  { id: "epeefer", cost: 3520, gain: 464, cursor: "asset/item/sf.png", block: "asset/block/v.gif", background: "asset/paysage/combat.png" },
  { id: "epeeor", cost: 7040, gain: 928, cursor: "asset/item/so.png", block: "asset/block/blaze.gif", background: "asset/paysage/combat.png" },
  { id: "epeediamant", cost: 14080, gain: 1856, cursor: "asset/item/sd.png", block: "asset/block/g.gif", background: "asset/paysage/combat.png" },
  { id: "epeenetherite", cost: 28160, gain: 3712, cursor: "asset/item/sn.png", block: "asset/block/dragon.gif", background: "asset/paysage/combat.png" }
];

let count = parseInt(localStorage.getItem("count")) || 0;
let clickGain = 1;
const cpsDisplay = document.getElementById("cps");

const img = buttonBlock.querySelector("img");
counter.textContent = count;

// Mise à jour des stats
function updateCPS() {
  cpsDisplay.textContent = `${clickGain} clics `;
}
setInterval(() => {
  count += clickGain;
  counter.textContent = count;
  localStorage.setItem("count", count);
}, 1000);
updateCPS();

// Clic sur le bloc
buttonBlock.addEventListener("click", () => {
  count += clickGain;
  counter.textContent = count;
  localStorage.setItem("count", count);
});

// Réinitialisation
buttonReset.addEventListener("click", () => {
  if (confirm("Réinitialiser le jeu ?")) {
    count = 0;
    clickGain = 1;
    counter.textContent = count;
    localStorage.setItem("count", count);
    updateCPS();
  }
});

// Musique
buttonPlay.addEventListener("click", () => {
  const audio = document.getElementById("audio");
  const img = buttonPlay.querySelector("img");
  if (audio.paused) {
    audio.play();
    img.src = "asset/item/chef.gif";
  } else {
    audio.pause();
    audio.currentTime = 0;
    img.src = "asset/item/jukebox.gif";
  }
});

// Améliorations
upgrades.forEach(upgrade => {
  const btn = document.getElementById(upgrade.id);
  btn.addEventListener("click", () => {
    if (count >= upgrade.cost) {
      count -= upgrade.cost;
      clickGain = upgrade.gain;
      counter.textContent = count;
      localStorage.setItem("count", count);
      img.src = upgrade.block;
      document.body.style.cursor = `url('${upgrade.cursor}'), auto`;
      document.body.style.backgroundImage = `url('${upgrade.background}')`;
      updateCPS();
    }
  });
});
