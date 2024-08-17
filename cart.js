let label = document.getElementById('label');
let ShoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem('Store Data')) || [];

const calculation = () => {
    const cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)

};
calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        console.log('Basket is not empty');
    }
    else {
        ShoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Shopping Cart is empty</h2>
        <a href = 'index.html'>
            <button class = 'HomeBtn'>Home</button>
        </a>
        `;
    }
}

generateCartItems();