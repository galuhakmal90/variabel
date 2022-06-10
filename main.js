//IMPLEMENTASI CREATE READ UPDATE DELETE on array in Object

// we have showroom car
let toDoList = []


function addToCart (kegiatan) {
  // let product = 
  // console.log("function called")
  // console.log("product", product)
  carts.push(kegiatan)
}

function getListCart () {
  console.log("ini list cart", toDoList)
}

function deleteItemCart (id) {
  // console.log("carts", carts)
  // console.log("id yang mau dihapus", id)
  const filteredCarts = carts.filter(function(toDoList) {
   return toDoList.id !== id
  })

  carts = filteredCarts
  // console.log("filtered cart", filteredCarts)
}

function updateQuantityCart (id) {
  console.log("id yang mau diupdate", id)
  toDoList.forEach(function(cart) {
    if(id == cart.id) {
      cart.quantity = 10
      // console.log("update", cart)
      cart.quantity = cart.quantity + 1
      // cart.quantity++
      // cart.quantity += 1
    }
  })

}

function updateQuantityByText (id, quantity) {
  console.log("id yang mau diupdate", id)
  carts.forEach(function(cart) {
    if(id == cart.id) {
      cart.quantity = quantity
    }
  })
}



addToCart({
  nama: "Brownies Crispy",
  price: 20000,
  quantity: 1,
  id: 2
});

// get list pertama
// getListCart();

addToCart({
  nama: "Lemonilo Crispy",
  price: 20000,
  quantity: 1,
  id: 1
});

addToCart({
  nama: "rendang Crispy",
  price: 20000,
  quantity: 1,
  id: 3
});

// get list kedua
// getListCart();

// delete 1 product di cart
// deleteItemCart(1)


// getListCart();


// update quantityy cart

updateQuantityCart(1);



// updateQuantityCart(1);
// updateQuantityCart(1);
// updateQuantityCart(1);
// updateQuantityCart(1);
// updateQuantityCart(1);
// updateQuantityCart(1);

updateQuantityByText(1, 15)

getListCart();