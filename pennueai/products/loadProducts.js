import { product } from './ProductList.js';
import { cart } from '../cart/carts.js';
const dprod = document.querySelector('#prod');
const iTemcount = document.querySelector('#item-count')

function showAllprod(prod) {
    prod.forEach(e => {

        let col4 = document.createElement('div');
        col4.setAttribute("class", "col-4 pd=2");

        let card = document.createElement('div');
        card.setAttribute("class", "card shadow");
        card.setAttribute("style", "width:100%");
        card.setAttribute("id", e.productId);

        let cardb = document.createElement('div');
        cardb.setAttribute("class", "card-body");

        let img = document.createElement('img');
        img.setAttribute("src", e.img);
        img.setAttribute("height", "400px");
        img.setAttribute("width", "380px");
        img.setAttribute("style", "object-fit: cover;")

        let pName = document.createElement('h5');
        pName.textContent = e.productName;

        let pId = document.createElement('p');
        pId.textContent = e.productId;

        let pDesc = document.createElement('p');
        pDesc.textContent = e.productDesc;

        let pPrice = document.createElement('p');
        pPrice.textContent = `Price : ${e.price}`;

        let pStock = document.createElement('p');
        pStock.textContent = `Stocks : ${e.stocks}`;

        let btnBuy = document.createElement('a');
        btnBuy.setAttribute("href", '#');
        btnBuy.setAttribute("class", "btn btn-secondary my-3");
        btnBuy.setAttribute("style", "width: 100% ");
        btnBuy.textContent = "Buy";

        col4.appendChild(card);
        dprod.appendChild(col4);
        cardb.appendChild(img);
        card.appendChild(cardb);
        cardb.appendChild(pName);
        cardb.appendChild(pDesc);
        cardb.appendChild(pPrice);
        cardb.appendChild(pStock);
        cardb.appendChild(btnBuy);

        btnBuy.addEventListener('click', () => {
            const prodId = e.productId;
            alert(`Add ${e.productId} : ${e.productName} to your cart`);
            const existingItem = cart.find(x => x.prodId === prodId);
            console.log(existingItem)
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    prodId,
                    quantity: 1
                })
            }
            let countItem = showItemcount(cart);
            iTemcount.textContent = countItem;
        })
    })
}
showAllprod(product);

function showItemcount(id) {
    return id.reduce((acc, item) => acc + item.quantity, 0);
}

export { showAllprod }