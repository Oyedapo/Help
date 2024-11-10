import { getDish, formatCurrency} from "./ht.js"
import { menu } from "./dishes-available.js"

console.log("Send Help");
//lmao
export let cart = [];

function saveToStorage() {
  localStorage.setItem('cart-for-ht', JSON.stringify(cart))
}

export function loadFromStorage() {
  const storedCart = JSON.parse(localStorage.getItem("cart-for-ht"));

  if (storedCart) {
    cart = storedCart;
  } else {
    cart = [
      {
        id: "k2q9-p4-77j2",
        quantity: 2
      },
      {
        id: "k8q9-p5-72j4",
        quantity: 1
      }
    ];
  }
}

loadFromStorage();

renderOrderSummary()
renderPaymentSummary()

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
      quantity: 1
    });
  }

  renderOrderSummary()
  renderPaymentSummary()
  saveToStorage();
}

export function removeFromCart(dishId) {
  cart = cart.filter((dish) => dish.id !== dishId);
  renderOrderSummary()
  renderPaymentSummary()
  saveToStorage();
}


export function calculateCartQuantity() {
  let cartQuantity = 0
  cart.forEach(dish => {
    cartQuantity += dish.quantity
  })
  return cartQuantity
}

export function updateCart() {
  document.querySelector('.js-cart-quantity').innerHTML = calculateCartQuantity()
}
//updateCart()

export function renderOrderSummary() {
// Displaying all cart items
let cartSummary = ''
cart.forEach(dish => {
  const dishId = dish.id

  let matchingDish = getDish(dishId)

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
        <button class="crt-btn js-delete js-delete-${dish.id}" data-dish-id = "${dish.id}">
          delete
        </button>
      </div>
  `;
});

if (cart.length == 0) {
  let cartPage = document.querySelector('.js-cart')
  cartPage.classList.add('js-whole-cart')
  document.querySelector('.js-whole-cart').innerHTML = "<h2> There is nothing in cart. </h2> <h4>why don't you spoil yourself and get some good food?</h4> <button class='redirect'>Menu</button>"
} else document.querySelector(".js-cart").innerHTML = cartSummary;
}

document.querySelector('.redirect').addEventListener('click', () => {
  window.location.href = 'menu.html'
})

document.querySelectorAll('.js-delete').forEach(button => {
  button.addEventListener('click', () => {
    const dishId = button.dataset.dishId
    removeFromCart(dishId)
    window.location.reload()
  })
})

document.querySelector('.js-clear-cart').addEventListener('click', () => {
  cart.length = 0
  saveToStorage()
  window.location.reload()
  /*
  let cartPage = document.querySelector('.js-cart')
  cartPage.classList.add('js-whole-cart')
  document.querySelector('.js-whole-cart').innerHTML = "<h2> You just cleared your cart.</h2> <h5> hope you're happy.</h5> <button class= 'redirect'>Go To Menu</button>"
  renderOrderSummary()
  */
  renderPaymentSummary()
})

export function renderPaymentSummary() {
let orderSummary = ''
let totalItems = 0
let priceBeforeFees = 0
let totalPrice = 0

cart.forEach(dish => {
  const dishId = dish.id
  let matchingDish = getDish(dishId)

  priceBeforeFees += (matchingDish.priceCents * dish.quantity)
})

//console.log(priceBeforeFees)
//console.log(totalPrice)

if (cart.length == 0) {
  totalPrice += 0 + priceBeforeFees
  orderSummary += `
    <h1>
    Order Summary
  </h1>
  <h3>Items: ${calculateCartQuantity()}</h3> 
  <h3>Price: $${formatCurrency(priceBeforeFees)}</h3> 
  <h3>Service Fee: $0</h3>
  <h3>Delivery Fee: $0</h3><br><hr style="border-style: solid;">
  <h3>Total: $${formatCurrency(totalPrice)}</h3> 
  <button class="crt-btn" style="margin-left: 30vh; ">
    Place Order
  </button>
  `
} else {
  totalPrice += 99 + 500 + priceBeforeFees

  orderSummary += `
  <h1>
    Order Summary
  </h1>
  <h3>Items: ${calculateCartQuantity()}</h3> 
  <h3>Price: $${formatCurrency(priceBeforeFees)}</h3> 
  <h3>Service Fee: $0.99</h3>
  <h3>Delivery Fee: $5</h3><br><hr style="border-style: solid;">
  <h3>Total: $${formatCurrency(totalPrice)}</h3> 
  <button class="crt-btn" style="margin-left: 30vh; ">
    Place Order
  </button>
 `
}

document.querySelector('.js-checkout').innerHTML = orderSummary
}


/*
document.querySelector('.js-crt-btn').addEventListener('click', () => {
  document.querySelector('.js-place-order').innerHTML =
  `
  <div style= "width: 4rem">
    <p style= "word-wrap: wrap">Thank you for using our website, our delivery personell would call soon</p>
    <p>Want more? <button class="crt-btn">Menu</button> </p>
  </div>
  `
})

 
<span class="js-edit-value">
  <button class="crt-btn js-edit" data-dish-id = "${dish.id}">Edit Quantity</button>
</span>

  document.querySelectorAll('.js-edit').forEach(button => {
   button.addEventListener('click', () => {
    document.querySelector('.js-edit-value').innerHTML =
      `
        <input type="text" placeholder="enter desired quantity">
      `
    })
  })
*/


