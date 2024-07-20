// let shop = document.getElementById('shop');

// let shopItemData = [
//     {
//         id : '1',
//         name : 'Regular Fit Linen-blend shirt',
//         price : '1,999.00',
//         desc : 'White/Striped',
//         img : '/assets/hmgoepprod.jfif',
//     },

//     {
//         id : '2',
//         name : 'Baggy Jeans',
//         price : '2,699.00',
//         desc : 'Light grey',
//         img : '/assets/BaggyJeans.jfif',
//     },

//     {
//         id : '3',
//         name : 'Loose Fit Sweatshirt',
//         price : '479.00',
//         desc : 'Light grey',
//         img : '/assets/LooseFitSweatshirt.jfif',
//     },

//     {
//         id : '4',
//         name : 'Loose Fit Printed T-shirt',
//         price : '1,499.00',
//         desc : 'Turquoise/Rick and Morty',
//         img : '/assets/LooseFitPrintedT-shirt.jfif',
//     },

// ];

// let basket = [];


// let generateShop = () => {
//     return (shop.innerHTML = shopItemData.map((x)=>{
//         let {id, name, price, desc, img} = x;
//         return `
//         <div class="item" id=product-id-${id}>
//             <img src=${img} alt="" width="219">
//             <div class="details">
//                 <h4>${name}</h4>
//                 <p>${desc}</p>
//                 <div class="price-quantity">
//                     <h5>Rs. ${price}</h5>
//                     <div class="buttons">
//                         <i class="bi bi-dash" onclick = 'decrement(${id})'></i>
//                         <div class="quantity" id=${id}>0</div>
//                         <i class="bi bi-plus" onclick = 'increment(${id})'></i>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     `;
//     }).join(""));
// }

// generateShop();

// let increment = (id) => {

//     let search = basket.find((x)=> x.id === id);

//     if (search === undefined){
//         basket.push({
//             id : id,
//             item : 1
//         });
//     }
//     else {
//         search.item += 1;
//     }

//     console.log(basket);
//     // update(id);
// }
// let decrement = (id) => {
//     let search = basket.find((x)=> x.id === id);
//     if (search.item === 0) return;
//     else {
//         search.item -= 1;
//     }

//     console.log(basket);
//     // update(id);
// }
// let update = (id) => {
//     let search = basket.find((x) => x.id === id); 
//     console.log(search.item);
// }


let shop = document.getElementById('shop');

let shopItemData = [
    {
        id : '1',
        name : 'Regular Fit Linen-blend shirt',
        price : '1,999.00',
        desc : 'White/Striped',
        img : '/assets/hmgoepprod.jfif',
    },

    {
        id : '2',
        name : 'Baggy Jeans',
        price : '2,699.00',
        desc : 'Light grey',
        img : '/assets/BaggyJeans.jfif',
    },

    {
        id : '3',
        name : 'Loose Fit Sweatshirt',
        price : '479.00',
        desc : 'Light grey',
        img : '/assets/LooseFitSweatshirt.jfif',
    },

    {
        id : '4',
        name : 'Loose Fit Printed T-shirt',
        price : '1,499.00',
        desc : 'Turquoise/Rick and Morty',
        img : '/assets/LooseFitPrintedT-shirt.jfif',
    },

];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x)=>{
        let {id, name, price, desc, img} = x;
        return `
        <div class="item" id=product-id-${id}>
            <img src=${img} alt="" width="219">
            <div class="details">
                <h4>${name}</h4>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h5>Rs. ${price}</h5>
                    <div class="buttons">
                        <i class="bi bi-dash" onclick='decrement(${id})'></i>
                        <div class="quantity" id="quantity-${id}">0</div>
                        <i class="bi bi-plus" onclick='increment(${id})'></i>
                    </div>
                </div>

            </div>
        </div>
    `;
    }).join(""));
}

generateShop();

let increment = (id) => {
    let search = basket.find((x)=> x.id === id);

    if (search === undefined){
        basket.push({
            id : id,
            item : 1
        });
    } else {
        search.item += 1;
    }

    update(id);
    console.log(basket);
}

let decrement = (id) => {
    let search = basket.find((x)=> x.id === id);

    if (search === undefined || search.item === 0) return;

    if (search.item === 1) {
        basket = basket.filter((x) => x.id !== id);
    } else {
        search.item -= 1;
    }

    update(id);
    console.log(basket);
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(`quantity-${id}`).innerText = search ? search.item : 0;
}
