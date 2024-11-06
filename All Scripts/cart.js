import { formatCurrency, menu } from "./ht.js";
import { getDish } from "./ht.js";

console.log("Send Help");
//lmao
export let cart = [];

function saveToStorage() {
  localStorage.setItem("cart-for-ht", JSON.stringify(cart));
}

export function loadFromStorage() {
  const storedCart = JSON.parse(localStorage.getItem("cart-for-ht"));

  if (storedCart) {
    cart = storedCart;
  } else {
    cart = [
      {
        id: "k2q9-p4-77j2",
        quantity: 2,
      },
      {
        id: "k8q9-p5-72j4",
        quantity: 1,
      }
    ];
  }
}

loadFromStorage();

export function addToCart(dishId) {
  let matchingDish;

  cart.forEach((dish) => {
    if (dishId === dish.id) {
      matchingDish = dish;
    }
  });

  if (matchingDish) {
    matchingDish.quantity += 1;
  } 
  else {
    cart.push({
      id: dishId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeFromCart(dishId) {
  cart = cart.filter((dish) => dish.id !== dishId);
  saveToStorage();
}

export function calculateCartQuantity() {
  return cart.reduce((total, dish) => total + dish.quantity, 0);
}

// Displaying all cart items
let cartSummary = "";
cart.forEach((dish) => {
  const dishId = dish.id;

  let matchingDish = getDish(dishId);

  cartSummary += `
    <div class="cart-1">
        <img src="${matchingDish.image}" alt="">
      </div>
      <div class="cart-btn">
        <p>
          ${matchingDish.name} <br>
          $${formatCurrency(matchingDish.priceCents)}<br>
          Quantity: ${dish.quantity}
        </p>
        <button class="crt-btn" onclick="removeFromCart('${dishId}')">
          delete
        </button>
      </div>
  `;
});

document.querySelector(".js-cart").innerHTML = cartSummary;

console.log(getDish("72j4-k8-q9p5"));
console.log(calculateCartQuantity());
