import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { 
  cart as myCart,
  calculateQuantity,
  deleteFromCart,
  udpateQuantity
} from '../data/cart.js'
import { products } from '../data/products.js';
import formatCurrency from './utils/money.js';

const todays = dayjs();
const deliveryDay = todays.add(7, 'days');

deliveryDay.format('dddd, MMM D')

let myCartHTML = ''

myCart.forEach(cartItem => {
    const productId = cartItem.productId;

    let matchProduct;

    products.forEach(product=> {
        
        if (productId === product.id) {
            matchProduct = product            
        }
    })

    myCartHTML += `
         <div class="cart-item-container 
            js-cart-item-container-${matchProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
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
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>

                  <input class="quantity-input js-quantity-input-${matchProduct.id}">

                  <span class="update-quantity-link link-primary js-update-link"
                    data-product-id="${matchProduct.id}">
                    Update
                  </span>

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
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
});
document.querySelector('.js-order-summary')
.innerHTML = myCartHTML;

document.querySelectorAll('.js-delete-link').forEach((link)=> {
    link.addEventListener('click', ()=> {
        const productId = link.dataset.productId;
        deleteFromCart(productId);
        
        const container = document.querySelector(
            `.js-cart-item-container-${productId}`
        )

        container.remove();
    })
})

document.querySelectorAll('.js-update-link')
  .forEach((link)=> {
    link.addEventListener('click', ()=> {
      const productId = link.dataset.productId;

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );

      container.classList.add('is-editing-quantity');
    })
  })

document.querySelectorAll('.js-save-link')
  .forEach((link)=> {
    link.addEventListener('click', ()=> {
      const productId = link.dataset.productId;

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );

      container.classList.remove('is-editing-quantity');

      const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );

     const newQuantity = Number(quantityInput.value);
     udpateQuantity(productId, newQuantity);
    });
  });
