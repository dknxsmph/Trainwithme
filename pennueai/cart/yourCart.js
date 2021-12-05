import { cart } from "./carts.js";
import { showAllprod } from "../products/loadProducts.js";
import { product } from "../products/ProductList.js";
const dprod = document.querySelector("#showProd");
document.querySelector("#yrcart").addEventListener("click", showCart)
const totalPrice = document.querySelector("#total");

function showCart() {
    dprod.innerHTML = "";
    if (cart.items == null || cart.items.length == 0) {
        dprod.innerHTML = "mai mee kaaa";
        totalPrice.innerHTML = " ";
    } else {
        cart.items.forEach((x, index) => {
            // totalPrice.innerHTML = "Total : " + cart.totalPrice();

            const showProd = product.find(prodX => x.prodId == prodX.productId);
            const trow = document.createElement("tr");
            trow.setAttribute("class", "align-middle");
            const row1 = document.createElement("td");
            row1.innerText = index + 1;
            trow.appendChild(row1);
            const row2 = document.createElement("td");
            const div = document.createElement("div");
            div.setAttribute("class", "d-flex");
            const img = document.createElement("img");
            img.setAttribute("src", showProd.img);
            img.setAttribute("height", "150px");
            const p = document.createElement("p");
            p.setAttribute("style", "text-align:left");
            p.setAttribute("class", "mt-5");
            p.innerHTML = `<b> Name : ${showProd.productName} </b> <br> ${showProd.productDesc} `;
            row2.appendChild(div);
            div.appendChild(img);
            div.appendChild(p);
            trow.appendChild(row2);
            const row3 = document.createElement("td");
            row3.textContent = x.quantity;
            const row4 = document.createElement("td");
            trow.appendChild(row3);
            row4.innerHTML = (showProd.price * x.quantity);
            trow.appendChild(row4);
            dprod.appendChild(trow);
        });
    }
}


document.querySelector("#clearCart").addEventListener("click", () => {
    cart.cleatCart();
    showCart();
});