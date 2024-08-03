let basket = JSON.parse(localStorage.getItem('Store Data')) || [];

const calculation = () => {
    const cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)

};
calculation();