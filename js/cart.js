let mainTotal = 0;

function addToCart(element) {
  console.log(element)
  let mainEl = element.closest('.box');
  let price = mainEl.querySelector('.price').innerText;
  let name = mainEl.querySelector('.name').innerText;
  let quantity = mainEl.querySelector('input').value;
  let cartItems = document.querySelector('.cashbox');


  if (parseInt(quantity) > 0) {
    price = price.substring()
    price = parseInt(price)
    let total = parseInt(quantity) * price
    mainTotal += total
    cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>Price : $${price} , quantity: ${quantity} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>
                                 `

    document.querySelector('.cashbox').style.border = "1px solid black";
    document.querySelector('.total').innerHTML = `Total : $${mainTotal}`
    element.innerText = 'Added'
    element.setAttribute('disabled', 'disabled')
  } else {
    alert('You have not entered a quantity')
  }


}

function removeFromCart(element) {
  let mainEl = element.closest('.cart-single-item')
  let price = mainEl.querySelector('p span').innerText
  let name = mainEl.querySelector('h3').innerText
  let clothes = document.querySelectorAll('.box')
  price = parseInt(price)

  console.log(clothes)

  mainTotal -= price
  document.querySelector('.total').innerText = `Total : $${mainTotal}`
  mainEl.remove()

  clothes.forEach(function (product) {
    let itemName = product.querySelector('.box h4').innerText

    console.log(itemName)


    if (itemName === name) {

      product.querySelector('.box input').value = 0
      product.querySelector('.box button').removeAttribute('disabled', 'disabled')
      product.querySelector('.box button').innerText = 'ADD TO CART'
    }
  })

};

function lowtohigh() {
  let buton = document.getElementById('btn');

  let mainEl = buton.closest('.box');
  let price = mainEl.querySelector('.price').innerText;
  let name = mainEl.querySelector('.name').innerText;
  let quantity = mainEl.querySelector('input').value;
  let cartItems = document.querySelector('.cashbox');

  console.log(price)


}

lowtohigh();