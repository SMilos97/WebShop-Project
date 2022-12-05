///Get data from mockapi

function fetchData() {
    fetch("https://6321bddefd698dfa29fe03be.mockapi.io/products")
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw Error('ERROR')
            }
            return response.json();
        })
        .then(data => {
            let prices = document.querySelectorAll('.price');
            prices.forEach(function (element, j) {

                element.innerHTML += `<span id="price">${data[j].price}<span>$`


            })
        })

        .catch(error => {
            console.log(error)
        });
}

fetchData();

function lowtohigh() {
    let buton = document.getElementById('btn');

    let mainEl = buton.closest('.box');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('.name').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cashbox');

    let span = document.querySelectorAll('.price')

    console.log(span)

    console.log(price)


}

lowtohigh();



function hmgmenu() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
}


hmgmenu();