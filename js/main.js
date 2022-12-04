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