const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = document.querySelector(`.color`);
let btn = document.getElementById(`btn`);

btn.addEventListener(`click`, function () {
  // let newArray=[]
  let value = `#`;
  for (let i = 0; i < 6; i++) {
    let i = Math.floor(Math.random() * 16);
    let result = hex[i];
    let solution = (value += hex[i]);
    // console.log(solution);
    color.textContent = solution;
    document.body.style.backgroundColor = solution;
    // return result
  }
});

// btn.addEventListener(`click`,function () {
//     let newArray=[]
//     let value = `#`
//     for (let i = 0; i < 6; i++) {
//         let i = Math.floor(Math.random()*16)
//         let result= hex[i]
//         let solution = newArray.push(result)
//         console.log(solution);
//         color.textContent=solution
//         // document.body.style.backgroundColor = solution

//     }
// })
