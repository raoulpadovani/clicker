const button = document.querySelector("button");
const counter = document.getElementById("counter");
let count = 0;
button.addEventListener("click", () => 
{
  count++;
  counter.textContent = count;
  if (count == 10) {
    document.getElementById("pierre").addEventListener("click", () => {
      document.body.style.cursor = "url('piochep.png'), auto";
    });}
    if (count == 20) {
      document.getElementById("or").addEventListener("click", () => {
        document.body.style.cursor = "url('piochej.png'), auto";
      });
    
  }
});






