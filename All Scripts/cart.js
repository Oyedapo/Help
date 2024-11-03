console.log('Send Help')  
//lmao

export let cart = []

function saveTostorage() {
  loadFromStorage.setItem('cart', JSON.stringify(cart))
}

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'))

  if (!cart) {
    cart = [
      {
        id: "1w0r-36-2d4h",
        name: "Unagi Donburi (Grilled Eel Bowl)",
        image: "images/Unari Donburi.jpg",
        keyword: ["unagi"],
        priceCents:  2500
      },
      {
        id: "k8q9-p5-72j4",
        name: "Tempura",
        image: "images/tempura.jpg",
        keyword: ["tempura", "shrimp"],
        priceCents:  1500
      }
    ]
  }
}

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

  saveTostorage()
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
  saveTostorage()
}
//if you need me to explain anything lmk