import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 19999,
                    title: 'Mobile Phone',
                    qty: 0,
                    img: "",
                    id: 1
                },
                {
                    price: 49999,
                    title: 'Computer',
                    qty: 0,
                    img: "",
                    id: 2
                },
                {
                    price: 2000,
                    title: 'Memmory card',
                    qty: 0,
                    img: "",
                    id: 3
                },
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const products = this.state.products;
        const index = products.indexOf(product)
        products[index].qty ++;
        console.log(`Quantity of id: ${product.id} has been increased by 1`);
        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        const products = this.state.products;
        const index = products.indexOf(product)
        if (products[index].qty > 0) {
            products[index].qty --;
            console.log(`Quantity of id: ${product.id} has been increased by 1`);
            this.setState({
                products
            })
        } else {
            console.log(`Quantity of id: ${product.id} can't be decreased further`);
        }
    }
    
    render() {
        const products = this.state.products;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem 
                    product = {product} 
                    key={products.id} 
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    />
                })}
            </div>
        )
    }
}
export default Cart;