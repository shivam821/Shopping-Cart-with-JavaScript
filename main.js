const shop = document.getElementById('shop');

const shopItemData = [
    {
        id: '1',
        name: 'Regular Fit Linen-blend shirt',
        price: '1,999.00',
        desc: 'White/Striped',
        img: '/assets/hmgoepprod.jfif',
    },
    {
        id: '2',
        name: 'Baggy Jeans',
        price: '2,699.00',
        desc: 'Light grey',
        img: '/assets/BaggyJeans.jfif',
    },
    {
        id: '3',
        name: 'Loose Fit Sweatshirt',
        price: '479.00',
        desc: 'Light grey',
        img: '/assets/LooseFitSweatshirt.jfif',
    },
    {
        id: '4',
        name: 'Loose Fit Printed T-shirt',
        price: '1,499.00',
        desc: 'Turquoise/Rick and Morty',
        img: '/assets/LooseFitPrintedT-shirt.jfif',
    },
];

let basket = JSON.parse(localStorage.getItem('Store Data')) || [];

const generateShop = () => {
    shop.innerHTML = shopItemData.map((x) => {
        const { id, name, price, desc, img } = x;
        const search = basket.find((item) => item.id === id) || { item: 0 };

        return `
        <div class="item" id="product-id-${id}">
            <img src="${img}" alt="${name}" width="219">
            <div class="details">
                <h4>${name}</h4>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h5>Rs. ${price}</h5>
                    <div class="buttons">
                        <i class="bi bi-dash" data-id="${id}"></i>
                        <div class="quantity" id="quantity-${id}">${search.item}</div>
                        <i class="bi bi-plus" data-id="${id}"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join("");
};

generateShop();

shop.addEventListener('click', (e) => {
    if (e.target.classList.contains('bi-plus')) {
        increment(e.target.dataset.id);
    } else if (e.target.classList.contains('bi-dash')) {
        decrement(e.target.dataset.id);
    }
});

const increment = (id) => {
    const search = basket.find((x) => x.id === id);

    if (search === undefined) {
        basket.push({
            id: id,
            item: 1
        });
    } else {
        search.item += 1;
    }

    localStorage.setItem('Store Data', JSON.stringify(basket));
    update(id);
    console.log(basket);
};

const decrement = (id) => {
    const search = basket.find((x) => x.id === id);

    if (search === undefined || search.item === 0) return;

    if (search.item === 1) {
        basket = basket.filter((x) => x.id !== id);
    } else {
        search.item -= 1;
    }

    localStorage.setItem('Store Data', JSON.stringify(basket));
    update(id);
    console.log(basket);
};

const update = (id) => {
    const search = basket.find((x) => x.id === id);
    document.getElementById(`quantity-${id}`).innerText = search ? search.item : 0;
    calculation();
};

const calculation = () => {
    // const cartIcon = document.getElementById('cartAmount');
    // const totalItems = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // const totalPrice = basket.reduce((total, item) => {
    //     const itemData = shopItemData.find((i) => i.id === item.id);
    //     return total + (parseFloat(itemData.price.replace(/,/g, '')) * item.item);
    // }, 0);
    // cartIcon.innerHTML = `Items: ${totalItems}, Total: Rs. ${totalPrice.toFixed(2)}`;

    const cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)

};
calculation();