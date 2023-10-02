import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {

        const {products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct, totalPrice} = props;
        return (
            <div className="cart">
                {products.map((product) => {
                    return <CartItem 
                    product = {product} 
                    key={product.id} 
                    onIncreaseQuantity = {onIncreaseQuantity}
                    onDecreaseQuantity = {onDecreaseQuantity}
                    onDeleteProduct = {onDeleteProduct}
                    />
                })}

            <div style={{margin: 10}}>
                 <h4>Total: {totalPrice()}</h4>
            </div>
            </div>
        )
}

export default Cart;