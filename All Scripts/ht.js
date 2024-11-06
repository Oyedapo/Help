import { addToCart, calculateCartQuantity, updateCart } from "./cart.js";
import { menu } from "./menu.js";

/*
window.addEventListener("load", function() {
  document.querySelector(".hero").classList.add("pop-up");
});

  function confirmReservation() {
    return confirm("Confirm Reservation?");
  }
*/
export const menu = [
  {
    id: "72j4-k8-q9p5",
    name: "Tonkotsu Ramen",
    image: "images/ramen.jpg",
    keyword: ["ramen", "tonkotsu"],
    priceCents:  1000
  },
  {
    id: "p2m5-x1-g9w0",
    name: "Sushi",
    image: "images/sushi.jpg",
    keyword: ["sushi"],
    priceCents:  2500
  },
  {
    id: "g9w0-d4-72j4",
    name: "Spicy Karaage(Japanese fried chcicken)",
    image: "images/spicy karaage.jpg",
    keyword: ["chicken"],
    priceCents:  1500
  },
  {
    id: "k8q9-p5-72j4",
    name: "Tempura",
    image: "images/tempura.jpg",
    keyword: ["tempura", "shrimp"],
    priceCents:  1500
  },
  {
    id: "p572-j4-k8q9",
    name: "Okonomiyaki",
    image: "images/Okonomiyaki.jpg",
    keyword: ["okonomiyaki"],
    priceCents:  1100
  },
  {
    id: "1w0r-36-2d4h",
    name: "Unagi Donburi (Grilled Eel Bowl)",
    image: "images/Unagi Donburi.jpg",
    keyword: ["unagi"],
    priceCents:  2500
  },
  {
    id: "472j-4k-8q9p",
    name: "Takoyaki",
    image: "images/takoyaki.jpg",
    keyword: ["takoyaki"],
    priceCents:  900
  },
  {
    id: "j4k8-q9-p572",
    name: "Tonkatsu",
    image: "images/tonkatsu.jpg",
    keyword: ["tonkatsu"],
    priceCents:  1400
  },
  {
    id: "k2q9-p4-77j2",
    name: "Udon Noodles",
    image: "images/Udon.jpg",
    keyword: ["Udon", "Noodles"],
    priceCents:  1000
  },
  {
    id: "p512-j3-k6q9",
    name: "Sakura Matcha Dessert",
    image: "images/Sakura Matcha Dessert.jpg",
    keyword: ["dessert", "matcha"],
    priceCents:  900
  },
  {
    id: "9w0d-47-2j4k",
    name: "Yakitori (per skewer)",
    image: "images/yakitori.jpg",
    keyword: ["yakitori"],
    priceCents:  400
  },
  {
    id: "4p0w-4g-8w9w",
    name: "Onigiri",
    image: "images/Onigiri.jpg",
    keyword: ["onigir", "rice"],
    priceCents:  300
  },
  {
    id: "4c0d-1g-3g7a",
    name: "Sukiyaki",
    image: "images/sukiyaki.jpg",
    keyword: ["onigiri", "rice"],
    priceCents:  1800
  }
]

// I made it 13 sha 
//no wam

//so this function would help with the calculation of the prices and convert it from cents to dollars

export function formatCurrency (priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2)
}

//demo
console.log(formatCurrency(1050))

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
console.log(getDish("g9w0-d4-72j4"))

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
        <button class="order-btn js-add-to-cart 
        data-dish-id = ${dish.id}
        ">Add To Cart</button>
      </div>
  `
})
document.querySelector('.js-menu-cards').innerHTML = menuCardDsiplay

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    let dishId = button.dataset.dishId
    addToCart(dishId)
    updateCart()
  })
})