
import deliveryOptions from "./deliveryOptions.js";

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptions: '1'
    }, {  
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptions: '2'
    }];
}

function saveToStorage (){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
  let matchItems = '';
            
  cart.forEach(cartItem => {
    if (productId === cartItem.productId) {
      matchItems = cartItem;
    }
  })

  const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
  
  if (matchItems) {
    matchItems.quantity += quantity;

      } else {
        cart.push({
        productId: productId,
        quantity: quantity,
        deliveryOptions: 1,
    })                
  };

  saveToStorage();
}

export function deleteFromCart(productId){
    const newArray = [];

    cart.forEach(cartItem=> {
        if (cartItem.productId !== productId) {
            newArray.push(cartItem)
        }
    })

    cart = newArray;
    
    saveToStorage();
}
