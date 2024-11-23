import { addToCart } from "./cart.js";
import { menu } from "./dishes-available.js";
import { getDish } from "./ht.js";




const orderButton = document.querySelectorAll('.order-btn')
orderButton.forEach(button => {
  button.classList.add('js-order-btn')

  button.addEventListener('click', () =>{
    const dishId = button.dataset.dishId
    addToCart(dishId)
  })
})
  
/*
let menuDisplay = ''
menu.forEach((dish) => {
  let matchingDish = getDish(dish.id)
  menuDisplay += `
    <div class="menu-card">
      <img src="${matchingDish.image}" alt="Sakura Matcha Dessert">
      <h3>${matchingDish.name}</h3>
      <p>Cherry blossom and matcha flavored dessert.</p>
      <p><strong>Price:</strong> $${matchingDish.priceCents}</p>
      <button class="order-btn js-order-button data-dish-id = ${dish.id}">Add To Cart</button>
    </div>
  `
})
document.querySelector('.js-menu-container').innerHTML = menuDisplay
*/