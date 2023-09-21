import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h1>CART</h1>
                <CartItem/>
            </div>
            
        )
    }
}
export default Cart;