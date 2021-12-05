import { product } from "../products/ProductList.js";
console.log(product);

let cart = {
    items: [],

    addProd: function(products) {
        let foundIndex = -1;

        foundIndex = cart.items.findIndex(
            (item) => item.productId === products.productId
        );

        if (foundIndex === -1) {
            this.items.push({ productId: products.productId, qty: 1 });
        } else {
            items[foundIndex].qty += 1;
        }
    },

    cleatCart: function() {
        cart.items = [];
    },
    totalPrice: function() {
        return this.items.reduce((pre, cur) => {
            console.log(pre, cur);
            return (product.find(val => pre.prodId == val.productId).price * pre.quantity) + (product.find(val => cur.prodId == val.productId).price * cur.quantity)
        });
    },
    save: function() {
        localStorage.setItem('localSave', JSON.stringify(this.items));
    },
    remove: function() {
        if (confirm('Empty cart')) {
            this.items = [];
            localStorage.removeItem('localSave');
        }
    },
    load: function() {
        this.items = localStorage.getItem('localSave');
        if (cart.items === undefined || cart.items.length == 0) {
            cart.items = [];
        } else {
            cart.items = JSON.parse(cart.items);
        }
    },
    list: function() {
        this.load();
        const prodInCart = [];
        cart.items.forEach((item) => {
            products.forEach((product) => {
                if (item.productId.includes(product.productId))
                    prodInCart.push({...product, qty: item.qty });
            });
        });
        console.log(prodInCart);
        return prodInCart;
    }




};


export { cart };