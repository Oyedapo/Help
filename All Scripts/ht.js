import { addToCart, calculateCartQuantity, updateCart } from "./cart.js";
import { menu } from "./dishes-available.js";





// I made it 13 sha 
//no wam

//so this function would help with the calculation of the prices and convert it from cents to dollars

export function formatCurrency (priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2)
}

//demo
//console.log(formatCurrency(1050))

//this function would get an item in the menu by just using the id so we can use it to specify a bunch of things

export function getDish (dishId) {
  let matchingDish 
  menu.forEach((dish) => {
    if (dish.id === dishId)
    {
      matchingDish = dish
    }
  })
  return matchingDish
}
//demo
//console.log(getDish("g9w0-d4-72j4"))

const menuCards = [
  {
    id: "72j4-k8-q9p5",
    name: "Tonkotsu Ramen",
    image: "images/ramen.jpg",
    keyword: ["ramen", "tonkotsu"],
    priceCents:  1000
  },
  {
    id: "4p0w-4g-8w9w",
    name: "Onigiri",
    image: "images/Onigiri.jpg",
    keyword: ["onigir", "rice"],
    priceCents:  300
  },
  {
    id: "p2m5-x1-g9w0",
    name: "Sushi",
    image: "images/sushi.jpg",
    keyword: ["sushi"],
    priceCents:  2500
  }
]

 let menuCardDsiplay = ''
menuCards.forEach(dish => {
  const dishId = dish.id
  let matchingDish = getDish(dishId)

  menuCardDsiplay += `
    <div class="menu-card">
        <img src="${matchingDish.image}" alt="Onigiri">
        <h3>${matchingDish.name}</h3>
        <p>Rice balls with various fillings, wrapped in seaweed.</p>
        <button class="order-btn js-add-to-cart" 
        data-dish-id = "${dish.id}"
        ">Add To Cart</button>
      </div>
  `
})
document.querySelector('.js-menu-cards').innerHTML = menuCardDsiplay


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    let dishId = button.dataset.dishId
    //console.log(dishId)
    addToCart(dishId)
  })
})
  