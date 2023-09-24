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
    
    render() {
        const products = this.state.products;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem 
                    product = {product} 
                    key={products.id} 
                           />
                })}
            </div>
        )
    }
}
export default Cart;