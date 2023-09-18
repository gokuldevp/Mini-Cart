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
                        <img alt="increase" className="action-icons" src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/659/659892.png"/>
                        <img alt="delete" className="action-icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KW_16p1iuJg5nfDvYyJjygmrrEtBVi1-K_SX1csj&s"/>
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