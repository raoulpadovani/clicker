const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  button.innerHTML = `nc : ${event.detail}`;
});
