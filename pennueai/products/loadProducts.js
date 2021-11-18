import { product } from './ProductList.js';
const dprod = document.querySelector('#prod');
product.forEach(e => {

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



})