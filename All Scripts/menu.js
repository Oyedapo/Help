import { cart, saveToStorage } from "./cart.js";

const orderButton = document.querySelectorAll('.order-btn')
let dishArray = []
let flag = true

document.querySelectorAll('.order-btn').forEach((button) => {
  let {dishId} = button.dataset
  if (dishId == undefined) {
    flag = false
  }
  if (flag) {
    dishArray.push(dishId)
  }
})

//console.log(dishArray)

let selctorSection = document.querySelectorAll('.js-select')
let selectSummary = ''
dishArray.forEach((dishId, index) => {
  selectSummary = `
    <select class="quantity js-quantity-selector-${dishId}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
    </select>
  `
  selctorSection[index].innerHTML = selectSummary
})
  
orderButton.forEach((button) => {
  let {dishId} = button.dataset
  button.addEventListener('click', () => {
    const selecto = Number(document.querySelector(`.js-quantity-selector-${dishId}`).value)
    //console.log(selecto)

    let matchingDish;

  cart.forEach((dish) => {
    if (dishId === dish.id) {
      matchingDish = dish;
    }
  });

  if (matchingDish) {
    matchingDish.quantity = 1 + (selecto - 1) + matchingDish.quantity
  } 
  else {
    cart.push({
      id: dishId,
      quantity: selecto
    });
  }

  saveToStorage();
  })
})

