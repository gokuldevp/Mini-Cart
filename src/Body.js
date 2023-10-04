import React from "react";
import Cart from "./Cart";
import AddProducts from "./AddProducts";

const Body = (props) => {
    const {products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct, isAddProducts, totalPrice, offAddProduct, onAddFormSubmit} = props;
        return (
            <div className="body">
                {isAddProducts ? 
                <AddProducts
                offAddProduct = {offAddProduct}
                onAddFormSubmit = {onAddFormSubmit}
                />:
                <Cart
                products = {products}
                onIncreaseQuantity = {onIncreaseQuantity}
                onDecreaseQuantity = {onDecreaseQuantity}
                onDeleteProduct = {onDeleteProduct}
                totalPrice = {totalPrice}
                />
                }
            </div>
        )
}

export default Body;