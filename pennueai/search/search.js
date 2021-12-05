import { product } from "../products/ProductList.js";
import { showAllprod } from "../products/loadProducts.js";
const dprod = document.querySelector('#prod');
const search = document.querySelector('#cba');
const input = document.querySelector('#input');

const tSearch = document.querySelector('#input-text');
const btnSearch = document.querySelector('#btn-search');

search.addEventListener('click', () => {

    if (input.getAttribute('class') == "invisible") {

        input.setAttribute('class', 'visible');
        input.style = "width: 100%";
    } else {
        input.setAttribute('class', 'invisible')
    }
});

btnSearch.addEventListener('click', () => {

    let vSearch = searchx();
    dprod.innerHTML = " ";
    showAllprod(vSearch);

})

function searchx() {
    if (tSearch.value.length == 0) {
        return product;

    } else {
        return product.filter(
            searchProd => searchProd.productName.toLowerCase().includes(tSearch.value.toLowerCase()) ||
            searchProd.productDesc.toLowerCase().includes(tSearch.value.toLowerCase())

        );

    }

}