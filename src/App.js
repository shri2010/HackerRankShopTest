import React, { Component } from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        };

        this.addToCart = this.addToCart.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);

    }

    increaseQuantity(item) {
        debugger;
        var items = this.state.cart.items.map((cardItem) => {
            if (item.name === cardItem.item) {
                cardItem.quantity += 1;
            }
            return cardItem;
        });

        var products = this.state.products.map((prod) => {
            if (item.name === prod.name) {
                prod.cartQuantity += 1;
            }
            return prod;
        });
        this.setState((state) => ({ cart: { items: items }, products: products }));
    }

    decreaseQuantity(item) {
        var items = this.state.cart.items.map((cardItem) => {
            if (item.name === cardItem.item) {
                cardItem.quantity -= 1;
            }
            return cardItem;
        });

        var products = this.state.products.map((prod) => {
            if (item.name === prod.name) {
                prod.cartQuantity -= 1;
            }
            return prod;
        });
        this.setState((state) => ({ cart: { items: items }, products: products }));
    }

    addToCart(item) {
        debugger;
        var items = this.state.cart.items;
        items.push({ item: item.name, quantity: 1 });
        var products = this.state.products.map((prod) => {
            if (item.name === prod.name) {
                prod.cartQuantity += 1;
            }
            return prod;
        });
        this.setState((state) => ({ cart: { items: items }, products: products }));
    }

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} addToCart={this.addToCart} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} />
                    <Cart cart={this.state.cart} />
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
