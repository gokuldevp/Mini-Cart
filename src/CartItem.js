import React from "react";

class CartItem extends React.Component {
    render() {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} /> {/* Applying the created syle*/}
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{fontSize:25}}>Rs: 100</div>
                    <div style={{fontSize:25}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {            //Creating object for style
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'pink'
    }
}

export default CartItem;