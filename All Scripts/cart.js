import { getDish } from "./ht.js"

console.log('Send Help')  
//lmao

export let cart = []

function saveToStorage() {
  loadFromStorage.setItem('cart-for-ht', JSON.stringify(cart))
}

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart-for-ht'))

  if (!cart) {
    cart = [
      {
        id: "1w0r-36-2d4h",
        quantity: 2
      },
      {
        id: "k8q9-p5-72j4",
        quantity: 1
      }
    ]
  }
}

loadFromStorage()

/*
what these are is basically explained in the function's name 
and if you and to understand in details you'd have to watch the video (i could send a vn, just ask if needed)

i highkey copied this stuff cause i really can't be stressing that much
*/

export function addToCart(dishId) {
  let matchingDish

  cart.forEach((dish) => {
    if (dishId === dish.id) {
      matchingDish = dish
    }
  })

  if(matchingDish) {
    matchingDish.quantity += 1
  } else {
    cart.push({
      id: dishId,
      quantity: 1
    })
  }

  saveToStorage()
}
//this is simple enough to read through, right?

export function removeFromCart(dishId) {
  let newCart = []

  cart.forEach((dish) => {
    if(dishId !== dish.id) {
      newCart.push(dish)
    }
  })

  cart = newCart
  saveToStorage()
}
//if you need me to explain anything lmk

export function calculateCartQuantity() {
  let cartQuantity = 0
  cart.forEach(dish => {
    cartQuantity += dish.quantity
  })
  return cartQuantity
}


cart.forEach(dish => {
  const {dishId} = dish.id

  let matchingDish = getDish(dishId)

  let cartSummary = ''
   
})

console.log(getDish("72j4-k8-q9p5"))
console.log(calculateCartQuantity())