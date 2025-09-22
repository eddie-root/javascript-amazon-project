export const cart = [];

export function addToCart(productId){
  let matchItems = '';
            
  cart.forEach(cartItem => {
    if (productId === cartItem.productId) {
      matchItems = cartItem;
    }               
  })

  if (matchItems) {
        matchItems.quantity += 1;
      } else {
        cart.push({
        productId: productId,
        quantity: 1,
    })                
  };
}