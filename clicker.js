/*déclaration*/
const button = document.querySelector("button");
const counter = document.getElementById("counter");
const buttonBlock = document.getElementById("block");
const buttonFer = document.getElementById("fer");
const buttonOr = document.getElementById("or");
const buttonDiamant = document.getElementById("diamant");
const buttonNetherite = document.getElementById("netherite");
let count = 0;

/* gold click */
buttonBlock.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
  console.log(count, 'yo');
});
/* gold / second */
setInterval(() => document.getElementById("block").click(), 1000);




/*amélioration*/
buttonFer.addEventListener("click", () => {
  if (count >= 30) {
    document.body.style.cursor = "url('piochef.png'), auto";
    const img = buttonBlock.querySelector("img");
    img.src = "block fer.png"; // Remplacez "arbre.png" par le chemin de votre nouvelle image
    img.style.width = "200px"; // Ajustez la largeur
    img.style.height = "200px";
  }
});
buttonOr.addEventListener("click", () => {
  if (count >= 50) {
    document.body.style.cursor = "url('piochej.png'), auto";
    const img = buttonBlock.querySelector("img");
    img.src = "block or.png"; // Remplacez "arbre.png" par le chemin de votre nouvelle image
    img.style.width = "200px"; // Ajustez la largeur
    img.style.height = "200px";
  }
});











