function dizerOi() {
  alert("oi");
}

class Calculator {}
const buttons = document.querySelectorAll("#buttons-container button");
console.log(buttons.innerText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const value = event.target.innerText;
    console.log(value);
  });
});
