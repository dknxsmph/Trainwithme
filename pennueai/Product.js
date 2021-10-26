import { product } from "./ProductList.js"; // Import

product.forEach(product => {

    const item_container = document.createElement('div');
    item_container.setAttribute('class', "container py-1");

    const row = document.createElement("div");
    row.setAttribute('class', "row");
    item_container.appendChild(row);

    const col = document.createElement("div");
    col.setAttribute('class', "col-sm ");
    row.appendChild(col);

    const listshadow = document.createElement("ul");
    listshadow.setAttribute('class', "list-group shadow");
    col.appendChild(listshadow);

    const listitem = document.createElement("ul");
    listitem.setAttribute('class', "list-group-item");
    listshadow.appendChild(listitem);

    const align = document.createElement("div");
    align.setAttribute('class', "media align-items-lg-center flex-column flex-lg-row p-3");
    listitem.appendChild(align);

    const order = document.createElement("div");
    order.setAttribute('class', "media-body order-2 order-lg-1");
    align.appendChild(order);

    const product_name = document.createElement("h5");
    product_name.setAttribute('class', "mt-0 font-weight-bold mb-2");
    product_name.textContent = product.productName;
    order.appendChild(product_name);

    const product_id = document.createElement("p");
    product_id.setAttribute('class', "font-italic text-muted mb-0 small");
    product_id.textContent = `Product ID : ${product.productId}`;
    order.appendChild(product_id);

    const br = document.createElement("br");
    order.appendChild(br);

    const product_description = document.createTextNode(`Description : ${product.productDesc}`);
    order.appendChild(product_description);

    order.appendChild(br);

    const product_stock = document.createTextNode(`Stock : ${product.stocks}`);
    order.appendChild(product_stock);

    const node12 = document.createElement("div");
    node12.setAttribute('class', "d-flex align-items-center justify-content-between mt-1");
    order.appendChild(node12);

    const product_price = document.createElement("h6");
    product_price.setAttribute('class', "font-weight-bold my-2");
    product_price.textContent = `ราคา : ${product.price}฿`;
    node12.appendChild(product_price);

    const product_img = document.createElement("img")
    product_img.setAttribute('class', "rounded float-right ml-lg-5 order-1 order-lg-2");
    product_img.setAttribute('src', product.img);
    product_img.setAttribute('width', "250");
    align.appendChild(product_img);
    const ele = document.querySelector(".item");
    ele.appendChild(item_container);
});