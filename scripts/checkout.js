import { 
  cart as myCart,
  getCheckItemsQuantity,
  removeFromCart,
  updateQuantity
} from '../data/cart.js'
import { products } from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import formatCurrency from './utils/money.js';

let myCartHTML = ''

myCart.forEach(cartItem => {
    const productId = cartItem.productId;

    let matchProduct;

    products.forEach(product=> {
        if (productId === product.id) {
            matchProduct = product            
        }
    })

const deliveryOptionId = cartItem.deliveryOptionId

let deliveryOption;

deliveryOption.forEach(option => {
  if(option.id === deliveryOption){
    deliveryOption = option;
  }
})

const today = dayjs();
const deliveryDate = today.add(
   deliveryOption.deliveryDays,
   'days'
);
const dateString = deliveryDate.format(
  'dddd, MMMM D'
);

myCartHTML += `
         <div class="cart-item-container 
            js-cart-item-container-${matchProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${matchProduct.image}>

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchProduct.name}
                </div>
                <div class="product-price">
                  $ ${formatCurrency(matchProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchProduct.id}">
                    ${cartItem.quantity}</span>
                  </span>

                  <span class="update-quantity-link link-primary js-update-link"
                    data-product-id="${matchProduct.id}">
                    Update
                  </span>

                  <input class="quantity-input js-quantity-input-${matchProduct.id}">

                  <span class="save-quantity-link link-primary is-save-link"
                    data-product-id="${matchProduct.id}">
                    Save
                  </span>

                  <span class="delete-quantity-link link-primary js-delete-link" 
                    data-product-id='${matchProduct.id}'>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingItem, cartItem)}

              </div>
            </div>
          </div>
    `
});


document.querySelector('.js-order-summary')
  .innerHTML = myCartHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();

      updateCartQuantity()
    });
  });

function updateCartQuantity(){
  let cartQuantity = 0;
  
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;

}

updateCartQuantity();





