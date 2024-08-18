let label = document.getElementById('label');
let ShoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem('Store Data')) || [];
// console.log(shopItemData);

const calculation = () => {
    const cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)

};
calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return ShoppingCart.innerHTML = basket.map((x)=>{
            let {id,item} = x;
            let search = shopItemData.find((y) => y.id === id) || []
            return `
            <div class = 'cart-item'>
                <img src = ${search.img} alt = '' width = 100/>
                <div class = 'details>
                    <div class="title-price-x"></div>
                    <div class="cart-buttons"></div>
                    <h3></h3>
                </div>
                
            <div>
            `
        }).join('');
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