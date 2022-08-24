const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = document.querySelector(`.color`);
let btn = document.getElementById(`btn`);

btn.addEventListener(`click`, () => {
  let value = `#`;
  for (let i = 0; i < 6; i++) {
    let i = Math.floor(Math.random() * 16);
    let result = hex[i];
    let solution = (value += hex[i]);
    color.textContent = solution;
    document.body.style.backgroundColor = solution;
  }
});
